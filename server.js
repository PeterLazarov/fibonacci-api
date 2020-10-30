const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const db = require('./config/database');
const envConfig = require('./config/env-config');
const FibonacciRouter = require('./routes/FibonacciRouter');

db.authenticate().then(() => {
    return db.sync();
}).then(() => {
    var app = express();
    var server = http.createServer({
        requestCert: false,
        rejectUnauthorized: false
    }, app);

    app.use(bodyParser.json());
    app.use(
        bodyParser.urlencoded({
            extended: true
        })
    );
    app.use(helmet());
    
    app.use('/fibonacci', FibonacciRouter);

    //Starting server on port 3001
    server.listen(envConfig.port, 'localhost', () => {
        console.log("Server started on port " + envConfig.port);
    });
}).catch(err => {
    console.error('[DB] Database error: ', err);
});