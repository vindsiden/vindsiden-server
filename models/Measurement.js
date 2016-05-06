var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RecordingSchema   = new Schema({
    locationId: Number,
    windAverage: Number,
    windMin: Number,
    windMax: Number,
    direction: Number,
    temperature: Number
});

module.exports = mongoose.model('Recording', RecordingSchema);