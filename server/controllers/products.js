var mongoose = require('mongoose');
require('../models/product');
const Product = mongoose.model('Product');

module.exports = {
    index: (req, res) => {
        Product.find({}, (err, data) => {
            if(err){
                res.json({message: 'Error:', error: err});
            }
            else{
                res.json({message: 'Success:', result: data});
            }
        })
    },
    create: (req, res) => {
        Product.create(req.body, (err, data) => {
            if(err){
                res.json({message: 'Error:', error: err});
            }
            else{
                res.json({message: 'Success:', result: data});
            }
        })
    },
    read: (req, res) => {
        Product.findById(req.params.prodID, (err, data) => {
            if(err){
                res.json({message: 'Error:', error: err});
            }
            else{
                res.json({message: 'Success:', result: data});
            }
        })
    },
    update: (req, res) => {
        Product.findByIdAndUpdate(req.params.prodID, req.body, {runValidators: true, context: 'query'}, (err, data) => {
            if(err){
                res.json({message: 'Error:', error: err});
            }
            else{
                res.json({message: 'Success:', result: data});
            }
        })
    },
    delete: (req, res) => {
        Product.findByIdAndDelete(req.params.prodID, (err, data) => {
            if(err){
                res.json({message: 'Error:', error: err});
            }
            else{
                res.json({message: 'Success:', result: data});
            }
        })
    } 
}