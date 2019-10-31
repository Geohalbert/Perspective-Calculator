const functions = require('firebase-functions');
const admin = require('./admin');

const db = admin.firestore()

module.exports = functions.firestore.document('objects/users/{userId}/{userObject}').onCreate((change, context) => {
    const user = context.params.userId
    const userProfile = db.doc(`users/${user}`);
    const timestamp = new Date().getTime()
    return userProfile.update({
        updatedAt: timestamp
    });
});