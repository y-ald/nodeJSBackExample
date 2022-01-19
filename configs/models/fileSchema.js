const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    file: {
        data: Buffer,
        contentType: String
    },
    state: {
        type: String,
        trim: true,
        enum: ["valid", "invalid"],
        default: "invalid"
    }
});

module.exports = fileSchema;
