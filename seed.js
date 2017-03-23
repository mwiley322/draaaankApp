var db = require("./models");

var drinkList = [];

drinkList.push({
  name : 'Vesper',
  glass : 'Cocktail',
  ingredients : ['3 oz. Plymouth gin', '1 oz. Absolut Vodka', '.5 Lillet Blanc'],
  garnish : '1 Lemon Peel',
  img: 'http://fanfood.com/wp-content/uploads/2013/08/VesperMartini.jpg'
});
drinkList.push({
  name : 'Old Fashioned',
  glass : 'Old Fashioned',
  ingredients : ['4 dashes of Angostura bitters', ' 1 tsp of sugar', ' 1 orange wheel', '1 splash of club soda', '2 oz of Bourbon'],
  garnish : '1 Fresh Orange Wheel and 1 Cherry',
  img: 'http://cdn.liquor.com/wp-content/uploads/2012/09/bourbon-old-fashioned.jpg'
});

db.Drink.remove({}, function(err, drinks) {
    db.Drink.create(drinkList, function(err, drinks) {
        if (err) { return console.log('ERROR', err); }
        console.log("all drinks: ", drinks);
        console.log("created ", drinkList.length, " drinks");
        process.exit();
    });
});
