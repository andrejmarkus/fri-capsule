const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configuration documentation: 
// Set variables via terminal: 
// firebase functions:config:set email.user="your@email.com" email.pass="your-app-password" email.service="gmail"

const transporter = nodemailer.createTransport({
  service: functions.config().email?.service || "gmail",
  auth: {
    user: functions.config().email?.user,
    pass: functions.config().email?.pass,
  },
});

let ssrServerServer;
exports.ssrServer = functions.region("europe-west1").https.onRequest(async (request, response) => {
    if (!ssrServerServer) {
        functions.logger.info("Initialising SvelteKit SSR entry");
        ssrServerServer = require("./ssrServer/index").default;
        functions.logger.info("SvelteKit SSR entry initialised!");
    }
    functions.logger.info("Requested resource: " + request.originalUrl);
    return ssrServerServer(request, response);
});

// Trigger email when a new report is created in Firestore
exports.onReportCreated = functions.region("europe-west1").firestore
    .document("reports/{reportId}")
    .onCreate(async (snap, context) => {
        const report = snap.data();
        functions.logger.info(`Processing new report: ${context.params.reportId}`);

        // Admin Notification
        const adminMailOptions = {
            from: `"FRI CAPSULE System" <${functions.config().email?.user}>`,
            to: functions.config().email?.user,
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
                    from: `"FRI CAPSULE Support" <${functions.config().email?.user}>`,
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