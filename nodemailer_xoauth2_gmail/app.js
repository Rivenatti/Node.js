const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");

// console.developer.google.com/apis
// create new API project, credentials, OAuth consent screen, create web application
// authorised redirect URIs developers.google.com/oauthplayground

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
      user: "example@gmail.com",
      clientId: "google_id_here",
      clientSecret: "secret_here",
      refreshToken: "token_here"
    })
  }
});

const mailOptions = {
  fron: "John <John@gmail.com>",
  to: "Josh@gmail.com",
  subject: "Node mailing system",
  text: "This is an example"
};

transporter.sendMail(mailOptions, (err, res) => {
  if (err) console.log(err);
  else console.log("Email has been sent.");
});
