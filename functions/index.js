const functions = require('firebase-functions');
const { createClient } = require('@moltin/request')
// const MoltinGateway = require('@moltin/sdk').gateway
const omise = require('omise')({
  'secretKey': 'skey_test_5d2vldphd4pbo9lbgde',
  'omiseVersion': '2015-09-10',
})


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const client = new createClient({
  client_id: 'PCvuouFCdj4Pii5AZTJj6zgMzNPIn1ooAVdHjJatNF',
  client_secret: 'LflDcU8GxdMdvD8a43rnNhsAZJW6IyA9ZibYyjJnUP',
  grant_type: 'client_credentials'
})

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase! hahah");
});

exports.moltinPayment = functions.https.onRequest((request, response) => {
  // const Moltin = MoltinGateway({
  //   client_id: 'PCvuouFCdj4Pii5AZTJj6zgMzNPIn1ooAVdHjJatNF',
  //   client_secret: 'LflDcU8GxdMdvD8a43rnNhsAZJW6IyA9ZibYyjJnUP',
  //   grant_type: 'client_credentials'
  // })

  // Moltin.Authenticate().then(res => {
  //   console.log('authenticated', res)
  //   return response.send(res.data)
  // }).catch(console.log)

  // client.post('carts/123456/items?include=product')

  // client.get('/carts/123456/items?include=product')
  //   .then((res) => {
  //     console.log(res.data)
  //     return response.send(res.data)
  //   })
  //   .catch(console.error)
  omise.links.create({
    'amount': 10000,
    'currency': 'thb',
    'title': 'Moltin Dev',
    'description': 'moltin test',
  }, (err, resp) => {
    if (err) {
      console.log(err)
    }
    console.log(resp)
    return response.send(resp)
  });
});
