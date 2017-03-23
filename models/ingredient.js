var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
  name: String,
  amount: String
});

var Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = Ingredient;
