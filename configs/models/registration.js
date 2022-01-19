const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = new Schema(
    {
        registrationDate: {
            type: Date
        },
        hospital: {
            type: String
        },
        donor: {
            type: String
        }
    }
);

module.exports = mongoose.model('Registration', registrationSchema);
