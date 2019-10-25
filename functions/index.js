const functions = require('firebase-functions');
const onUserCreated	= require('./onUserCreated.js');
const defaultCollections = require('./defaultCollections.js')

/* Functions */
exports.onUserCreated = onUserCreated;

/* HTTP Functions */
exports.defaultCollections = defaultCollections;

/* PubSubs */
