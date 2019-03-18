const functions = require('firebase-functions')
const wercker = require('./wercker')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.wercker = functions.https.onRequest((req, res) => {
  wercker.handler(req, res)
})