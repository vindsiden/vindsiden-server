var Measurement = require('../models/measurement');
var moment = require('moment');

exports.saveMeasurement = function(req, res) {
    var measurements = req.body;

    var measurement  = new Measurement();
        measurement.locationId = req.query.Id;
        measurement.timestamp = moment();
        measurement.windAverage = req.query.Wind;
        measurement.windMin = req.query.WindMin;
        measurement.windMax = req.query.WindMax;
        measurement.direction = req.query.Dir;
        measurement.temperature = req.query.Temp1;

    measurement.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Measurement saved!' });
    });
};

exports.allMeasurements =  function(req, res) {
        Measurement.find(function(err, measurements) {
            if (err)
                res.send(err);
            res.json(measurements);
        });
};
