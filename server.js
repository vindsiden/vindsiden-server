var express = require('express');
var app = express();

var config = require('./config');
var bodyParser = require('body-parser');
var morgan = require('morgan')
var mongoose   = require('mongoose');

var Recording = require('./models/measurement');
var Station = require('./models/station');

var measurements = require('./routes/measurements');
var stations = require('./routes/stations');

mongoose.connect(config.mongodb.url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'))

var router = express.Router();

router.get('/wrm.aspx', measurements.saveMeasurement);
router.post('/v2/measurements', measurements.saveMeasurement);
router.get('/v2/measurements', measurements.allMeasurements)

router.get('/v2/stations', stations.findAllStations);
router.get('/v2/stations/:stationId', stations.findOneStation);
router.post('/v2/stations', stations.saveStation);

app.use('', router);

app.listen(8000);
console.log('Listening on port 8000...');
