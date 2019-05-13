const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase! hahah");
});

exports.moltinPayment = functions.https.onRequest((request, response) => {
  response.send('payment');
  // client.get('carts/123456/items?include=product')
  //   .then((data) => {
  //     console.log(data)
  //     return response.send(data)
  //   })
  //   .catch(console.error)
  // omise.links.create({
  //   'amount': 10000,
  //   'currency': 'thb',
  //   'title': 'Hot Latte',
  //   'description': 'A warm cup of coffee',
  // }, (err, resp) => {
  //   /* Response. */
  // });
});
