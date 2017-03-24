console.log('connected');
angular
.module('draaaankApp', ['ngRoute'])
.config(config);


config.$inject=['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl : '/templates/drinks',
    controller : 'DrinkShowAllController',
    controllerAs : 'drinkAllCtrl'
  })
  .when('/drinks/:id', {
    templateUrl : '/templates/drinkShow',
    controller : 'DrinkShowOneController',
    controllerAs : 'drinkOneCtrl'
  })
  $locationProvider.html5Mode({
    enabled : true,
    requireBase : false
  });
}
