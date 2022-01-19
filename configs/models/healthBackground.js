const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const healthBackgroundSchema = new Schema(
    {
        donor: {
            type: String
        },
        nb_blood_donation: {
            type: Number,
            min: 0
        },
        accidents_donation: {
            type: [String]
        },
        transfusion_date: {
            type: [Date]
        },
        accidents_transfusion: {
            type: [String]
        }
    }
);

module.exports = mongoose.model('healthBackground', healthBackgroundSchema);
