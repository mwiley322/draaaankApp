var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Ingredient = require('./ingredient');

var DrinkSchema = new Schema({
  name : String,
  img : String,
  ingredients : [ Ingredient.schema ],
  glass : String,
  garnish : [ String ]
});

var Drink = mongoose.model('Drink', DrinkSchema);


module.exports = Drink;
