/*********
 * app.js file
 *********/


const express = require('express');
const bodyParser = require('body-parser');

module.exports = function () {
    let server = express(),
        create,
        start;

    create = (config) => {
        let routes = require('../routes');
        // set all the server things
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);

        // add middleware to parse the json
        server.use(bodyParser.json({
            limit: '10MB'
        }));
        server.use(bodyParser.urlencoded({
            extended: false
        }));
        console.log('cors enabled');
        server.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            // authorized headers for preflight requests
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });

        // Set up routes
        routes.init(server);
    };


    start = () => {
        let hostname = server.get('hostname'),
            port = server.get('port');
        server.listen(port, function () {
            console.log('Express server listening on - http://' + hostname + ':' + port);
            //const all_routes = require('express-list-endpoints');
            //console.log(all_routes(server));
        });
        return server;
    };
    return {
        create: create,
        start: start
    };
};
