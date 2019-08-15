const mongoose = require('mongoose');
const Character = require('./Character');

const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    character: Character,
    quote: String,
    season: Number,
    length: Number,
});

module.exports = mongoose.model('quote', quoteSchema, 'quotes');