var express = require('express');
var app = express();

var path = require('path'); // used in app.all
var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'))


// app.all('*', (req, res, next) => { // check what this shit does
//     res.sendFile(path.resolve('./public/dist/public/index.html'));
// })


var server = app.listen(2000, function () {
    console.log('SERVER RUNNING @ localhost:2000');
})

require('./server/config/mongoose');
require('./server/config/routes')(app);