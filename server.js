var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan')

var    vindsiden = require('./routes/vindsiden');
var    Recording   = require('./models/recording');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'))

var router = express.Router();

router.get('/wrm.aspx', vindsiden.register);
router.get('/measurements', vindsiden.allMeasurements)

app.use('', router);

app.listen(3000);
console.log('Listening on port 3000...');