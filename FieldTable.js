var db = require('./db');
var Sequelize = require('sequelize');

var FieldTable = db.define('FieldTable', {
	id : {
		type : Sequelize.UUID,
		primaryKey : true,
		defaultValue : Sequelize.UUIDV4
	}
});

module.exports = FieldTable;