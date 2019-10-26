const functions = require('firebase-functions');
const admin = require('./admin');

const db = admin.firestore()

exports.default = functions.https.onCall((data, context) => {
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

exports.user = functions.https.onCall((data, context) => {
  const userColl = [];
  let userRef = db.collection('objects').doc('users').collection(data);
  return userRef.getCollections().then(collections => {
    collections.forEach(collection => {
      if (collection.exists) {
        userColl.push(collection.id)
      } else {
        return null;
      }
    })
    res.send(userColl);
    return null;
  })
  .catch(error => {
    return console.log(error);
  })
});

