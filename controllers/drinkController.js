/************
 * DATABASE *
 ************/
var db = require('../models');

// GET /api/drinks
function index(req, res) {
  db.Drink.find({}, function(err, drinks) {
    res.json(drinks);
  });
}

// GET /api/drinks/:id
function show(req, res) {
  var drinkId = req.params.id;
  console.log('drink to show: ', drinkId);
  db.Drink.findById(drinkId, function(err, foundDrink) {
    if (err) {
      res.sendStatus(204);
    } else {
      res.json(foundDrink);
    }
  });
}

// POST /api/drinks
function create(req, res) {
  var newDrink = new db.Drink(req.body);
  db.Drink.create(newDrink, function(err, createdDrink) {
    if(err){return console.log(err);}
    res.json(createdDrink);
  });
}

// PUT /api/drinks/:id
function update(req, res) {
  console.log('drink to update: ', req.params);
  var drinkId = req.params.id; //id to search
  var drinkToUpdate = req.body; //form data to update
  db.Drink.findByIdAndUpdate(drinkId, drinkToUpdate, {new: true}, function(err, updatedDrink) {
    if (err) { console.log('err!: ', err);
      res.sendStatus(204);
    } else {
      console.log(updatedDrink);
      res.json(updatedDrink);
    }
  });
}


// DELETE /api/drinks/:id
function destroy(req, res) {
  console.log('drink to delete:', req.params);
  var drinkId = req.params.id;
  db.Drink.findByIdAndRemove(drinkId, function(err, deletedDrink) {
    if (err) {
      console.log('err! ', err);
    } else {
      res.json(deletedDrink);
    }
  });
}

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};
