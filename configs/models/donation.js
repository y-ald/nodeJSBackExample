const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema(
    {
        donor: {
            type: String
        },
        donationDate: {
            type: String
        },
        donationType: {
            type: String,
            enum: ['volunteer', 'alerted', 'campaign']
        }
    }
);

module.exports = mongoose.model('Donation', donationSchema);
