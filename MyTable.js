var db = require('./db');
var Sequelize = require('sequelize');

var CountryTable = require('./CountryTable');
var FieldTable = require('./FieldTable');

var MyTable = db.define('MyTable', {
	id : {
		type : Sequelize.UUID,
		primaryKey : true,
		defaultValue : Sequelize.UUIDV4
	},
	country : {
		type : Sequelize.STRING,
		unique : 'compositeKey',
		references : CountryTable.getTableName(),
		referencesKey : 'id'
	},
	field : {
		type : Sequelize.UUID,
		unique : 'compositeKey',
		references : FieldTable.getTableName(),
		referencesKey : 'id'
	},
	value : {
		type: Sequelize.TEXT,
		validate: {
            len: [0, 10240]
        }
    }
});

module.exports = MyTable;