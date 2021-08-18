const uuid = require('uuid');

function getNewId() {
	return uuid.v4();
}
module.exports.getNewId = getNewId;
