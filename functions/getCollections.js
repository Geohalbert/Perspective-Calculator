const functions = require('firebase-functions');
const admin = require('./admin');

const db = admin.firestore()

const defColls = [];
const userColl = [];

exports.default = functions.https.onCall((data, context) => {
  let defaultRef = db.collection('objects').doc('default');
  return defaultRef.getCollections().then(collections => {
    collections.forEach(collection => {
      if (collection.exists) {
        defColls.push(collection.id)
      } else {
        return null;
      }
    })
    res.send(defColls);
    return null;
  })
  .catch(error => {
    return console.log(error);
  })
});

exports.user = functions.https.onCall((data, context) => {
  const snapshot = db.collection('objects').doc('users').collection(data);
  return snapshot.docs.map(doc => doc.data());
});

