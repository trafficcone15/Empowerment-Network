const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// Environment variables
const serviceGmailUser = process.env.SERVICE_GMAIL_EMAIL;
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const googleRefreshToken = process.env.GOOGLE_REFRESH_TOKEN;
const googleAccessToken = process.env.GOOGLE_ACCESS_TOKEN;
const personalGmailUser = process.env.PERSONAL_GMAIL_EMAIL;

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: serviceGmailUser,
        clientId: googleClientId,
        clientSecret: googleClientSecret,
        refreshToken: googleRefreshToken,
        accessToken: googleAccessToken
    },
});

// Route for testing server availability
router.get('/test', (req, res) => res.send('Contact route is active and available!'));

// Utility function for basic email validation
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

router.post('/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Validate inputs
    if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: 'All fields (name, email, phone, message) are required.' });
    }
    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: personalGmailUser,
        subject: `New message from ${name} ${phone} via Empowerment Network`,
        text: message
    };

    mailTransport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email sending error:', error.message);
            res.status(500).json({ error: 'There was an error sending your message. Please try again later.' });
        } else {
            console.log('Email successfully sent:', info.response);
            res.status(200).json({ message: 'Message sent successfully!' });
        }
    });
});

module.exports = router;