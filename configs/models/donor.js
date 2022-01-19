const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = require('./fileSchema');

const donorSchema = new Schema(
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
        motivations: {
            type: [String],
            trim: true
        },
        birthday: {
            type: Date
        },
        bloodGroup: {
            type: String
        },
        rhesusFactor: {
            type: String
        },
        identification: {
            type: Number
        },
        profession: {
            type: String,
            trim: true
        },
        maritalStatut: {
            type: String,
            enum: ['single', 'married', 'divorced', 'pacsed']
        },
        region: {
            type: String
        },
        state: {
            type: String,
            trim: true,
            enum: ["eligible", "illegible"]
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
        picFile: {
            type: fileSchema
        },
        identityCardFile: {
            type: fileSchema
        },
        files: {
            type: [fileSchema]
        }
    }
);

module.exports = mongoose.model('Donor', donorSchema);
