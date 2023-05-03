const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    try {
        const { name, email, phone, mensagem, subscription } = req.body;

        const transporter = nodemailer.createTransport({
            host: 'smtp.umbler.com',
            port: 587,
            secure: false,
            auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
            },
            tls: {
            rejectUnauthorized: false
            }
        });

        const message = {
            from: 'your-email-address@gmail.com',
            to: 'recipient-email-address@example.com',
            subject: 'New message from your website',
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${mensagem}</p>
        <p><strong>Subscription:</strong> ${subscription ? 'Yes' : 'No'}</p>
`,
        };

        await transporter.sendMail(message);

        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
});

app.listen(5000, () => console.log('Server started on port 5000'));
