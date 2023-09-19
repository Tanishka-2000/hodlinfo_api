const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cryptoSchema = new Schema({
    base_unit: String,
    last: Number,
    volume: Number,
    sell:Number,
    buy: Number,
    name: String
});

module.exports = mongoose.model('Crypto', cryptoSchema)