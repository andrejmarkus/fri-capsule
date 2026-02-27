const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const logger = require("firebase-functions/logger");
const { defineString } = require("firebase-functions/params");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

setGlobalOptions({ region: "europe-west1" });

const emailService = defineString("EMAIL_SERVICE", { default: "gmail" });
const emailUser = defineString("EMAIL_USER");
const emailPass = defineString("EMAIL_PASS");
const recaptchaSecret = defineString("RECAPTCHA_SECRET");
const recaptchaMinScore = defineString("RECAPTCHA_MIN_SCORE", { default: "0.5" });

const MAX_NAME = 80;
const MAX_EMAIL = 120;
const MAX_MESSAGE = 3000;
const REPORT_TYPES = new Set(["bug", "feedback"]);
const RECAPTCHA_EXPECTED_ACTION = "submit_report";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function setCors(_req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
}

function validatePayload(raw) {
  const payload = raw && typeof raw === "object" ? raw : {};

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim().toLowerCase();
  const message = String(payload.message || "").trim();
  const type = String(payload.type || "feedback").trim().toLowerCase();
  const website = String(payload.website || "").trim();
  const captchaToken = String(payload.captchaToken || "").trim();

  if (website.length > 0) {
    throw new Error("Spam detected.");
  }
  if (!name || name.length > MAX_NAME) {
    throw new Error("Invalid name.");
  }
  if (!email || email.length > MAX_EMAIL) {
    throw new Error("Invalid email.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Invalid email format.");
  }
  if (!message || message.length > MAX_MESSAGE) {
    throw new Error("Invalid message.");
  }
  if (!REPORT_TYPES.has(type)) {
    throw new Error("Invalid report type.");
  }
  if (!captchaToken) {
    throw new Error("Missing CAPTCHA token.");
  }

  return { name, email, message, type, captchaToken };
}

function isValidationError(message) {
  return (
    message === "Spam detected." ||
    message === "Invalid name." ||
    message === "Invalid email." ||
    message === "Invalid email format." ||
    message === "Invalid message." ||
    message === "Invalid report type." ||
    message === "Missing CAPTCHA token." ||
    message === "CAPTCHA verification failed."
  );
}

async function verifyRecaptchaToken(captchaToken, req) {
  const secret = recaptchaSecret.value();
  if (!secret) {
    throw new Error("Missing reCAPTCHA secret.");
  }
  const minScore = Number.parseFloat(recaptchaMinScore.value() || "0.5");
  const safeMinScore =
    Number.isFinite(minScore) && minScore >= 0 && minScore <= 1 ? minScore : 0.5;

  const params = new URLSearchParams();
  params.append("secret", secret);
  params.append("response", captchaToken);

  const forwardedFor = req.get("x-forwarded-for");
  const remoteIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "";
  if (remoteIp) {
    params.append("remoteip", remoteIp);
  }

  const verifyResponse = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    },
  );

  if (!verifyResponse.ok) {
    throw new Error("CAPTCHA verification failed.");
  }

  const verifyJson = await verifyResponse.json();
  if (!verifyJson.success) {
    throw new Error("CAPTCHA verification failed.");
  }
  if (verifyJson.action !== RECAPTCHA_EXPECTED_ACTION) {
    throw new Error("CAPTCHA verification failed.");
  }
  if (typeof verifyJson.score !== "number" || verifyJson.score < safeMinScore) {
    throw new Error("CAPTCHA verification failed.");
  }
}

async function sendReportEmails(report) {
  const transporter = nodemailer.createTransport({
    service: emailService.value(),
    auth: {
      user: emailUser.value(),
      pass: emailPass.value(),
    },
  });

  const safeName = escapeHtml(report.name);
  const safeEmail = escapeHtml(report.email);
  const safeType = escapeHtml(report.type);
  const safeMessage = escapeHtml(report.message);

  const adminMailOptions = {
    from: `"FRI CAPSULE System" <${emailUser.value()}>`,
    to: emailUser.value(),
    subject: `[FRI CAPSULE] Novy report: ${safeType.toUpperCase()}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; color: #1e293b; background-color: #f1f5f9; border-radius: 12px;">
        <h1 style="color: #10b981; margin-bottom: 20px; font-size: 24px;">Novy report - ${safeType}</h1>
        <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
          <p><strong>Od:</strong> ${safeName} (${safeEmail})</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 15px 0;">
          <p><strong>Sprava:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(adminMailOptions);

  const userMailOptions = {
    from: `"FRI CAPSULE Support" <${emailUser.value()}>`,
    to: report.email,
    subject: "Potvrdenie prijatia reportu - FRI CAPSULE",
    html: `
      <div style="font-family: sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #10b981;">Ahoj ${safeName},</h2>
        <p>Tvoj report \"<strong>${safeType}</strong>\" bol uspesne doruceny.</p>
      </div>
    `,
  };

  await transporter.sendMail(userMailOptions);
}

exports.submitReport = onRequest({ memory: "128MiB", timeoutSeconds: 15 }, async (req, res) => {
  setCors(req, res);

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed." });
    return;
  }

  try {
    const report = validatePayload(req.body);
    await verifyRecaptchaToken(report.captchaToken, req);

    await sendReportEmails(report);

    await admin.firestore().collection("reports").add({
      name: report.name,
      email: report.email,
      message: report.message,
      type: report.type,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      source: "submitReport",
    });

    logger.info("Report processed successfully", { type: report.type });
    res.status(200).json({ ok: true });
  } catch (error) {
    logger.error("Report submit failed", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    const status = isValidationError(message) ? 400 : 500;
    res.status(status).json({ ok: false, error: "Invalid request." });
  }
});
