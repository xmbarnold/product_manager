var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

mongoose.connect('mongodb://localhost/product_manager', {}, function (err) { // replace database name
    // catch connection errors
    if (err) {
        console.log('Error:', err);
    }
    else {
        console.log('Connected to DB');
    }
});
var modelsPath = path.join(__dirname, './../models');

fs.readdirSync(modelsPath).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(modelsPath + '/' + file);
    }
})