const onUserCreated	= require('./onUserCreated.js');
const onUserUpdated	= require('./onUserUpdated.js');
const onCollectionCreated = require('./onCollectionCreated.js')
const getCollections = require('./getCollections.js');

/* Functions */
exports.onUserCreated = onUserCreated;
exports.onUserUpdated = onUserUpdated;
exports.onCollectionCreated = onCollectionCreated;

/* HTTP Functions */
exports.defaultCollections = getCollections.default
exports.userCollections = getCollections.user

/* PubSubs */
