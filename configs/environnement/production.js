/*********
 * procuction.js
 *********/

let envConfig = {
    hostname: process.env.IP || "0.0.0.0",
    port: process.env.PORT || 3000,
    databaseUri: process.env.DATABASE_URI
};

module.exports = envConfig;
