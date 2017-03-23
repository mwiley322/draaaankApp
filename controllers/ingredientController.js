var db = require('../models');

// app.get('/api/drinks/:id/ingredients', controllers.ingredients.index);
function index(req, res) {
  db.Drink.findById(req.params.id, function(err, foundDrink) {
    console.log('responding with ingredients:', foundDrink.ingredients);
    res.json(foundDrink.ingredients);
  });
}

// app.get('/api/ingredients', controllers.ingredients.showAll);
function showAll(req, res) {
  db.Ingredient.find({}, function(err, ingredients) {
    res.json(ingredients);
  });
}

// POST '/api/drinks/:id/ingredients'
function create(req, res) {
  db.Drink.findById(req.params.id, function(err, foundDrink) {
    console.log(req.body);
    var newIngredient = new db.Ingredient(req.body);
    foundDrink.ingredients.push(newIngredient);
    foundDrink.save(function(err, savedDrink) {
      console.log('newIngredient created: ', newIngredient);
      res.json(newIngredient);
      //note: RESPONDING WITH JUST INGREDIENT, NOT WHOLE DRINK OBJECT.
    });
  });
}

// app.delete('/api/drinks/:id/ingredients/:id', controllers.ingredients.destroy);
function destroy(req, res) {
  db.Drink.findById(req.params.id, function(err, foundDrink) {
    console.log(foundDrink);
    var correctIngredient = foundDrink.ingredients.id(req.params.id);
    if (correctIngredient) {
      correctIngredient.remove();
      foundDrink.save(function(err, saved) {
        console.log('REMOVED ', correctIngredient.name, 'FROM ', saved.ingredients);
        res.json(correctIngredient);
      });
    } else {
      res.send(404);
    }
  });

}

//app.put('/api/drinks/:id/ingredients/:id', controllers.ingredients.update);
function update(req, res) {
  db.Drink.findById(req.params.id, function(err, foundDrink) {
    console.log(foundDrink);
    var correctIngredient = foundDrink.ingredients.id(req.params.id);
    if (correctIngredient) {
      console.log(req.body);
      correctIngredient.name = req.body.name;
      correctIngredient.amount = req.body.amount;
      foundDrink.save(function(err, saved) {
        console.log('UPDATED', correctIngredient, 'IN ', saved.ingredients);
        res.json(correctIngredient);
      });
    } else {
      res.send(404);
    }
  });

}


module.exports = {
  index: index,
  showAll: showAll,
  create: create,
  update: update,
  destroy: destroy
};
