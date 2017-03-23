// SERVER-SIDE JAVASCRIPT

var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var controllers = require('./controllers');


/**********
 * ROUTES *
 **********/

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index);

//DRINK CONTROLLERS
app.get('/api/drinks', controllers.drinks.index);
app.get('/api/drinks/:drinkId', controllers.drinks.show);
app.post('/api/drinks', controllers.drinks.create);
app.delete('/api/drinks/:drinkId', controllers.drinks.destroy);
app.put('/api/drinks/:drinkId', controllers.drinks.update);

// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Draaaankin draaaanks on http://localhost:3000/');
});
