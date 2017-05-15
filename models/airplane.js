var mongoose = require('mongoose');

var AirplaneSchema = new mongoose.Schema({
    imgUrl: String,
    manufacturer: String,
    model: String,
    engines: Number
});

module.exports = mongoose.model('Airplane', AirplaneSchema);
