const admin = require('firebase-admin');
var serviceAccount = require('/Users/halpeters/Programming/keys/persp-calc/perspective-calc-firebase-adminsdk-jhfrt-d219fe772d.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://perspective-calc.firebaseio.com"
});

module.exports = admin;