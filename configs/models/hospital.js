const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hospitalSchema = new Schema(
    {
        hospitalType: {
            type: String
        },
        name: {
            type: String
        },
        email: {
            type: String
        },
        phoneNumber: {
            type: String
        },
        registrationDate: {
            type: Date
        },
        town: {
            type: String
        },
        street: {
            type: String
        },
        referenceStreet: {
            type: String
        }
    }
);

module.exports = mongoose.model('Hospital', hospitalSchema);
