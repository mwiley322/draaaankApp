var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/draaaankApp");

var Drink = require('./drink');
var Ingredient = require('./ingredient');

module.exports.Drink = Drink;
module.exports.Ingredient = Ingredient;
