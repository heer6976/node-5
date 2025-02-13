const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "keniljasoliya2004@gmail.com",
    pass: "gojq bzlu fhgh pytn",
  },
});

const sendOTP = (userEmail , sub , msg , path) => {
    mailOptions = {
      from: "keniljasoliya2004@gmail.com",
      to: userEmail,
      subject: sub,
      html: msg,
    };

    if(path) {
      mailOptions['attachments'] = [
        {
          path : path,
        }
      ];
    }

    transport.sendMail(mailOptions);
};

module.exports = sendOTP;