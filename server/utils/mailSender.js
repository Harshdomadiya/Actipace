const nodemailer = require("nodemailer");
require("dotenv").config(); // Import dotenv

const mailSender = async (email, title, body) => {
    try {
        // Create the transporter
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: parseInt(process.env.MAIL_PORT),
            secure: process.env.MAIL_PORT === 465, // false for TLS
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // Add DKIM
        transporter.use(
            "stream",
            require("nodemailer-dkim").signer({
                domainName: process.env.DKIM_DOMAIN,
                keySelector: process.env.DKIM_SELECTOR,
                privateKey: process.env.DKIM_PRIVATE_KEY,
                identity: process.env.MAIL_FROM,
            })
        );

        // Send email
        let info = await transporter.sendMail({
            from: `Actipace <${process.env.MAIL_FROM}>`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        });

        console.log("Email sent successfully:", info);
    } catch (e) {
        console.error("Error sending email:", e.message);
    }
};

module.exports = { mailSender };
