const functions = require('firebase-functions');
const admin = require('./admin');

const db = admin.firestore()

module.exports = functions.auth.user().onCreate((user) => {
  const userCollection = db.collection('users');
  var email = user.email;
  return userCollection.doc(uid).set({
    email: email && email.toLowerCase ? email.toLowerCase() : email,
    uid: user.uid,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  });
});