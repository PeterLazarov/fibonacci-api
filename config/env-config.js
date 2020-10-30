const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,    
    dbName: process.env.DB_NAME,    
    dbUsername: process.env.DB_USERNAME,    
    dbPassword: process.env.DB_PASSWORD,    
    dbHost: process.env.DB_HOST
}