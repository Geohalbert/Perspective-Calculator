const onUserCreated	= require('./onUserCreated.js');
const onUserUpdated	= require('./onUserUpdated.js');
const getCollections = require('./getCollections.js')

/* Functions */
exports.onUserCreated = onUserCreated;
exports.onUserUpdated = onUserUpdated;

/* HTTP Functions */
exports.defaultCollections = getCollections.default
exports.userCollections = getCollections.user

/* PubSubs */
