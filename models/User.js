const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        index: {
            unique: true,
            dropDups: true
        }
    },
    password: String
});

module.exports = mongoose.model('user', userSchema, 'users');