configRoutes.$inject = ["$routeProvider", "$locationProvider"];

function configRoutes ($routeProvider, locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'templates/index.html'
    })
    .otherwise({rediretTo: '/'});
$locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
}
