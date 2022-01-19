
/*******
 * server.js file
 ********/

let server = require('./configs/app')();
const config = require('./configs/environnement/config');
const mongoose = require('mongoose');

//create the basic server setup
server.create(config);

//start the server
server = server.start();
mongoose.set('useCreateIndex', true);
mongoose.connect(config.databaseUri, {useUnifiedTopology: true, useNewUrlParser: true}).then(
    () => {
        console.log('connected to ' + config.databaseUri)
    },
    err => {
        console.log(err)
    }
);

module.exports = server;
