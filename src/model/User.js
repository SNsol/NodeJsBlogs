const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        min: 6,
        max: 12
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        min: 8,
        max: 100
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);