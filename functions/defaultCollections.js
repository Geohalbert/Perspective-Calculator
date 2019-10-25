const functions = require('firebase-functions');
const admin = require('./admin');

const db = admin.firestore()

exports.defaultCollections = functions.https.onCall((req, res) => {
  const defColls = [];
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