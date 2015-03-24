var CountryTable = require('./CountryTable');
var BBPromise = require('sequelize').Utils.Promise;

module.exports = function() {
	return BBPromise.all([
		CountryTable.create({ id:"de" }),
		CountryTable.create({ id:"en" }),
		CountryTable.create({ id:"es" }),
		CountryTable.create({ id:"fr" }),
		CountryTable.create({ id:"it" }),
		CountryTable.create({ id:"ja" }),
		CountryTable.create({ id:"pt" }),
		CountryTable.create({ id:"ru" }),
		CountryTable.create({ id:"sv" })
	]);
};
