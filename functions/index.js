const functions = require('firebase-functions');
const onUserCreated	= require('./onUserCreated.js');
const getCollections = require('./getCollections.js')

/* Functions */
exports.onUserCreated = onUserCreated;

/* HTTP Functions */
exports.defaultCollections = getCollections.default
exports.userCollections = getCollections.user

/* PubSubs */
