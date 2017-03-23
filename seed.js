var db = require("./models");

var drinkList = [];

drinkList.push({
  name : 'Vesper',
  glass : 'Cocktail',
  garnish : '1 Lemon Peel',
  img: 'http://fanfood.com/wp-content/uploads/2013/08/VesperMartini.jpg',
  ingredients : [{
                  name: 'Plymouth gin',
                  amount: '3 oz'
                }, {
                  name: 'Absolut Vodka',
                  amount: '1 oz'
                }, {
                  name: 'Lillet Blanc',
                  amount: '.5 oz'
                }]
});
drinkList.push({
  name : 'Old Fashioned',
  glass : 'Old Fashioned',
  garnish : '1 Fresh Orange Wheel and 1 Cherry',
  img: 'http://cdn.liquor.com/wp-content/uploads/2012/09/bourbon-old-fashioned.jpg',
  ingredients : [{
                  name: 'Angostura bitters',
                  amount: '4 dashes'
                }, {
                  name: 'sugar',
                  amount: '1 tsp'
                }, {
                  name: 'club soda',
                  amount: '1 splash'
                }, {
                  name: 'Bourbon',
                  amount: '2 oz'
                }]
});

db.Drink.remove({}, function(err, drinks) {
    db.Drink.create(drinkList, function(err, drinks) {
        if (err) { return console.log('ERROR', err); }
        console.log("all drinks: ", drinks);
        console.log("created ", drinkList.length, " drinks");
        process.exit();
    });
});
