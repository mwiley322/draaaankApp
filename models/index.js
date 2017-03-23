var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/draaaankApp");

var Drink = require('./drink');

module.exports.Drink = Drink;
