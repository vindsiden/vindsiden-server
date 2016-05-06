var    Recording   = require('../models/recording');

exports.register = function(req, res) {
    var vindsiden = req.body;

    var recording  = new Recording();
        recording.locationId = req.query.Id;
        recording.windAverage = req.query.Wind;
        recording.windMin = req.query.WindMin;
        recording.windMax = req.query.WindMax;
        recording.direction = req.query.Dir;
        recording.temperature = req.query.Temp1;

    recording.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Recording saved!' });
    });

};

exports.allMeasurements =  function(req, res) {
        Recording.find(function(err, recordings) {
            if (err)
                res.send(err);

            res.json(recordings);
        });
};