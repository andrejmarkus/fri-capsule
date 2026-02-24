const functions = require("firebase-functions");
const { defineString } = require("firebase-functions/params");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Parameters replace the legacy functions.config()
const emailService = defineString("EMAIL_SERVICE", { default: "gmail" });
const emailUser = defineString("EMAIL_USER");
const emailPass = defineString("EMAIL_PASS");

const transporter = nodemailer.createTransport({
  service: emailService.value(),
  auth: {
    user: emailUser.value(),
    pass: emailPass.value(),
  },
});

// Trigger email when a new report is created in Firestore
exports.onReportCreated = functions.region("europe-west1").firestore
    .document("reports/{reportId}")
    .onCreate(async (snap, context) => {
        const report = snap.data();
        functions.logger.info(`Processing new report: ${context.params.reportId}`);

        // Admin Notification
        const adminMailOptions = {
            from: `"FRI CAPSULE System" <${emailUser.value()}>`,
            to: emailUser.value(),
            subject: `[FRI CAPSULE] Nový report: ${(report.type || "feedback").toUpperCase()}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #1e293b; background-color: #f1f5f9; border-radius: 12px;">
                    <h1 style="color: #10b981; margin-bottom: 20px; font-size: 24px;">Nový report - ${report.type}</h1>
                    <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <p><strong>Od:</strong> ${report.name} (${report.email || "bez emailu"})</p>
                        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 15px 0;">
                        <p><strong>Správa:</strong></p>
                        <p style="white-space: pre-wrap; line-height: 1.6;">${report.message}</p>
                    </div>
                </div>
            `,
        };

        try {
            await transporter.sendMail(adminMailOptions);
            functions.logger.info(`Admin notification sent for report: ${context.params.reportId}`);

            if (report.email) {
                const userMailOptions = {
                    from: `"FRI CAPSULE Support" <${emailUser.value()}>`,
                    to: report.email,
                    subject: "Potvrdenie prijatia reportu - FRI CAPSULE",
                    html: `
                        <div style="font-family: sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px;">
                            <h2 style="color: #10b981;">Ahoj ${report.name || "užívateľ"},</h2>
                            <p>Tvoj report "<strong>${report.type}</strong>" bol úspešne doručený.</p>
                        </div>
                    `,
                };
                await transporter.sendMail(userMailOptions);
                functions.logger.info(`User confirmation sent to: ${report.email}`);
            }
        } catch (error) {
            functions.logger.error("Error sending email:", error);
        }
    });