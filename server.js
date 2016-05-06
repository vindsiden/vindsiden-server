var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan')

var Recording = require('./models/measurement');
var Station = require('./models/station');

var measurements = require('./routes/measurements');
var stations = require('./routes/stations');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('combined'))

var router = express.Router();

router.get('/wrm.aspx', measurements.saveMeasurement);
router.get('/measurements', measurements.allMeasurements)

router.get('/stations', stations.findAllStations);
router.get('/stations/:stationId', stations.findOneStation);
router.post('/stations', stations.saveStation);

app.use('', router);

app.listen(3000);
console.log('Listening on port 3000...');