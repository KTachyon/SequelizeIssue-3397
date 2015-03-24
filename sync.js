var db = require('./db');
var MyTable = require('./MyTable');
var BBPromise = require('sequelize').Utils.Promise;

module.exports = function() {
	return db.sync().then(function() {
		return BBPromise.all([ require('./CountryTableData')(), require('./FieldTableData')() ]);
	}).then(function() {
		return require('./MyTableData')();
	});
};