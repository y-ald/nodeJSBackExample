/*********
 * dev.js
 *********/

let envConfig = {
    hostname: process.env.IP || 'localhost',
    port: process.env.PORT || 4000,
    databaseUri: process.env.DATABASE_URI || 'mongodb://localhost:27017/bloodDonation'
};

module.exports = envConfig;
