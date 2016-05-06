var Station = require('../models/station');

exports.findOneStation = function(req, res) {
    Station.find({ stationId: req.params.stationId}, function(err, station) {
        if (err)
            res.send(err);
        res.json(station);
    });
};

exports.findAllStations =  function(req, res) {
        Station.find(function(err, measurements) {
            if (err)
                res.send(err);
            res.json(measurements);
        });
};

exports.saveStation =  function(req, res) {
    var station = new Station();
    station.stationId = req.body.stationId;
    station.name = req.body.name;
    station.place = req.body.place;
    station.owner = req.body.owner;
    station.chartText = req.body.chartText;
    station.longitude = req.body.longitude;
    station.latitude = req.body.latitude;
    station.yrUrl = req.body.yrUrl;
    station.logoUrl = req.body.logoUrl;
    station.webcamUrl = req.body.webcamUrl;
    station.linkUrl = req.body.linkUrl;

    station.save(function(err) {
        if(err)
            res.send(err);
        res.json({ message: 'Station saved! ' + station.id });
    })

};