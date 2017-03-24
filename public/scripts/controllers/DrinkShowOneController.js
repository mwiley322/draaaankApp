angular
  .module('draaaankApp')
  .controller('DrinkShowOneController', DrinkShowOneController);

  DrinkShowOneController.$inject = ['$http', '$routeParams'];

  function DrinkShowOneController( $http, $routeParams) {
    var vm = this;
    $http({
      method: 'GET',
      url: '/api/drinks/' + $routeParams.id
    }).then(foundOneDrink, errorFindingOneDrink);

    function foundOneDrink(drinkData) {
      vm.drink = drinkData.data;
      console.log('GOT A DRANK!', vm.drink);
      console.log('U GOT SOME INGREDIENTS! ', vm.drink.ingredients);
      vm.ingredients = vm.drink.ingredients;
    }

    function errorFindingOneDrink(err) {
      console.log('ERROR FINDING ONE DRINK: ', err);
    }


  }
