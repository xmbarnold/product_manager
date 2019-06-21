var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title'],
        unique: true,
        minlength: [3, 'Title must be longer than 3 characters'],
        maxlength: [20, 'Benny Bob says: Your title is too long']
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price, we aren\'t a charity'],
    },
    url: {
        type: String,
        required: [true, 'Please provide an image, how else is the product gonna sell?'],
    },
}, {timestamps: true});
ProductSchema.plugin(uniqueValidator, {message: 'This product already exists'});

module.exports = mongoose.model('Product', ProductSchema);