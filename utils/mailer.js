const nodemailer = require('nodemailer');

// Create a transporter object that will send the email
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
});

// Define the email message
const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'arburhanar@gmail.com',
    subject: 'Welcome to our website!',
    text: 'Thank you for signing up to our website.'
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
