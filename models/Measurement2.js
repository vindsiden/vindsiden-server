var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MeasurementSchema   = new Schema({
    locationId: Number,
    timestamp: Date,
    windAverage: Number,
    windMin: Number,
    windMax: Number,
    direction: Number,
    temperature: Number,
    station: [{type: Schema.Types.ObjectId, ref: 'Station'}]
});

module.exports = mongoose.model('Measurement', MeasurementSchema);