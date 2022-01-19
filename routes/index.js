/**********
 * index.js file (for routes)
 **********/
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('../configs/swagger.json');
const config = require('../configs/environnement/config');
const apiRoute = "/api/v1/";

var endPoints = [];

const init = (server) => {
    server.get('*', function (req, res, next) {
        console.log('Request to: ' + req.originalUrl);
        return next();
    });

    //Load all the js file in this folder :
    fs.readdirSync(__dirname).forEach(function (routeFile) {
        if (routeFile === 'index.js') return;
        var routeFileCompletePath = path.join(__dirname, routeFile);
        var stat = fs.statSync(routeFileCompletePath);
        if (stat && !stat.isDirectory()) {
            endPoints.push(routeFileCompletePath);
            //console.log("Init : server.use(" + apiRoute + path.basename(routeFile, '.js') + ", require(" + './' + routeFile + "))");
            server.use(apiRoute + path.basename(routeFile, '.js'), require('./' + path.basename(routeFile, '.js')));
        }
    });

    // server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
    swaggerDocument.host = config.hostname + ':' + config.port;
    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

module.exports = {
    init: init
};
