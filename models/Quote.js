const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    character: String,
    quote: String,
    season: Number,
    length: String,
});

module.exports = mongoose.model('Quote', quoteSchema, 'quotes');