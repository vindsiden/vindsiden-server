var express = require('express');
var app = express();

var    vindsiden = require('./routes/vindsiden');
var    Recording   = require('./models/recording');


var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

app.get('/wrm.aspx', vindsiden.register);

app.listen(3000);
console.log('Listening on port 3000...');