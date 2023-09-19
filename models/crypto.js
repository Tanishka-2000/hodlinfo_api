const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cryptoSchema = new Schema({
    base_unit: String,
    last: Schema.Types.Decimal128,
    volume: Schema.Types.Decimal128,
    sell:Schema.Types.Decimal128,
    buy: Schema.Types.Decimal128,
    name: String
});

module.exports = mongoose.model('Crypto', cryptoSchema)