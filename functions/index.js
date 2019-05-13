const functions = require('firebase-functions');
const nodemailer = require('nodemailer')
const emailAccount = require('./email.json')

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailAccount.email,
    pass: emailAccount.password,
  },
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase! hahah");
});

exports.moltinPayment = functions.https.onRequest((request, response) => {
  const body = request.body
  const email = body.email
  const orderId = body.orderId
  const mailOptions = {
    to: email,
    // bcc: emailAccount.email,
    from:'no_reply@devincube.com',
    subject: `Recieve Order No. ${orderId}`,
    // html: ejs.render(orderCustomerConfirm, { value })
    text: `Devincube store recieve your order ${orderId} now.\nThank for shopping`
  };

  mailTransport.sendMail(mailOptions);
  response.send({ success: true });
});
