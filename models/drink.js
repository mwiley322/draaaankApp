var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DrinkSchema = new Schema({
  name : String,
  sevingSize : Number,
  img : String,
  ingredients : [ String ],
  origin : String
});

var DrinkSchema = mongoose.model('Drink', DrinkSchema);


module.exports = Drink;
