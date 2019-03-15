const functions = require('firebase-functions')
const prismic = require('./prismic')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.prismic = functions.https.onRequest((req, res) => {
  prismic.handler(req, res)
})