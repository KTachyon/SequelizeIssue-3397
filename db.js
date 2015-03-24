var Sequelize = require('sequelize');

var db = new Sequelize('test_db', '', '', {
	dialect:  'postgres',
    protocol: 'postgres',
    native: true,
    //maxConcurrentQueries: 100, // (default: 50)
    //pool: { maxConnections: 5, maxIdleTime: 30}, // use pooling in order to reduce db connection overload and to increase speed
    logging: global.logger ? function(message) { logger.info(message); } : console.log,
	define: {
	    underscored: false,
	    freezeTableName: false,
	    charset: 'utf8',
	    collate: 'utf8_general_ci',
	    timestamps: true
	}
});

module.exports = db;