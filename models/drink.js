var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DrinkSchema = new Schema({
  name : String,
  img : String,
  ingredients : [ String ],
  origin : String,
  glass : String,
  garnish : String
});

var DrinkSchema = mongoose.model('Drink', DrinkSchema);


module.exports = Drink;
