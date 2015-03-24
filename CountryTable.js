var db = require('./db');
var Sequelize = require('sequelize');

var CountryTable = db.define('CountryTable', {
	id : {
		type : Sequelize.STRING,
		primaryKey : true
	}
});

module.exports = CountryTable;