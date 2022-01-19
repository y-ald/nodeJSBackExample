const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = require('./fileSchema');

const doctorSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            uppercase: true
        },
        surname: {
            type: String,
            trim: true
        },
        phoneNumber: {
            type: String
        },
        email: {
            type: String,
            trim: true,
            unique: true
        },
        image:{
            type: fileSchema
        },
        town: {
            type: String
        },
        street: {
            type: String
        },
        referenceStreet: {
            type: String
        },
        region: {
            type: String
        },
        hopital:{
            type: String
        },
        birtday:{
            type: Date
        },
        identityCard: {
            type: fileSchema
        },
    }
);

module.exports = mongoose.model('Doctor', doctorSchema);
