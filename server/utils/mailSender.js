const nodemailer = require("nodemailer");
require("dotenv").config(); // Import dotenv

const mailSender = async (email, title, body) => {
    try {

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: parseInt(process.env.MAIL_PORT) || 587,
            secure: process.env.MAIL_PORT === 465,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });


        let info = await transporter.sendMail({
            from: `Actipace <${process.env.MAIL_FROM}>`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        });

        console.log("Email sent successfully:", info);
    } catch (e) {
        console.error("Error sending email:", e.message);
        throw error;
    }
};

module.exports = { mailSender };
