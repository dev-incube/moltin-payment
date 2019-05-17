const functions = require('firebase-functions');
const nodemailer = require('nodemailer')
const { createClient } = require('@moltin/request')
const cors = require('cors')({ origin: true })

const emailAccount = require('./email.json')
const app = require('./app')

const client = new createClient({
  client_id: 'PCvuouFCdj4Pii5AZTJj6zgMzNPIn1ooAVdHjJatNF',
  client_secret: 'LflDcU8GxdMdvD8a43rnNhsAZJW6IyA9ZibYyjJnUP',
  grant_type: 'client_credentials',
})

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

exports.moltindd = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    if (request.method !== "POST") {
      return response.status(401).json({
        message: "Not allowed"
      })
    }
    return client.get('carts/123456/items')
      .then((data) => {
        response.status(200).json(data)
        return true
      })
      .catch(console.log)
  })
})

exports.moltin2 = functions.https.onRequest(app)
