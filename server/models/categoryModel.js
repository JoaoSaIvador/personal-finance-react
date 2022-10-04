const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Categories', categorySchema);