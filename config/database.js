const envConfig = require('./env-config');
const Sequelize = require('sequelize');

module.exports =  new Sequelize(
    envConfig.dbName,
    envConfig.dbUsername,
    envConfig.dbPassword, 
    {
        host: envConfig.dbHost,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);