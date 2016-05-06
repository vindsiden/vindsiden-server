var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StationSchema = new Schema({
    stationId: Number,
    name: String,
    place: String,
    owner: String,
    chartText: String,
    longitude: Number,
    latitude: Number,
    yrUrl: String,
    logoUrl: String,
    webcamUrl: String,
    linkUrl: String
});

module.exports = mongoose.model('Station', StationSchema);