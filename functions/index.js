const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const { Nuxt } = require('nuxt')
const app = require('express')()
const nuxt = new Nuxt({
  dev: false,
  buildDir: '.nuxt',
  build: {
    publicPath: '/'
  }
})

function handler(req, res) {
  nuxt.renderRoute('/', { req }).then(result => {
    res.send(result.html)
  }).catch(e => {
    res.send(e)
  })
}

app.use(handler)
exports.app = functions.https.onRequest(app)