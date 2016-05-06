var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MeasurementSchema   = new Schema({
    locationId: Number,
    timestamp: Date,
    windAverage: Number,
    windMin: Number,
    windMax: Number,
    direction: Number,
    temperature: Number
});

module.exports = mongoose.model('Measurement', MeasurementSchema);