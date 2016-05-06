var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('windDataDB', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to database");
        db.collection('windDataDB', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The locations collection doesn't exist.");

            }
        });
    }
});

exports.register = function(req, res) {
    var vindsiden = req.body;

    var recording = {
        locationId: req.query.Id,
        windAverage: req.query.Wind,
        windMin: req.query.WindMin,
        windMax: req.query.WindMax,
        direction: req.query.Dir,
        temperature: req.query.Temp1
    };

    console.log('Adding data: ' + JSON.stringify(recording));
    db.collection('windData', function (err, collection) {
        collection.insert(recording, {safe: true}, function (err, result) {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(recording));
                res.send(result[0]);
            }
        });
    })
};