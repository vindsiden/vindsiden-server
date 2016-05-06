var express = require('express'),
    vindsiden = require('./routes/vindsiden');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
});

app.get('/wrm.aspx', vindsiden.register);

app.listen(3000);
console.log('Listening on port 3000...');