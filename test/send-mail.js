const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'modu720@gmail.com',
        pass: 'modu0500',
    },
});

module.exports = function sendEmail(to, subject, message) {
    const mailOptions = {
        from: 'modu720@gmail.com',
        to,
        subject,
        html: message,
    };
    transport.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        }
        else console.log("modu");
    });
};
