angular
  .module('draaaankApp')
  .controller('DrinkShowAllController', DrinkShowAllController);

  DrinkShowAllController.$inject = ['$http'];
  function DrinkShowAllController ($http){
    var vm = this;
    vm.newDrink = {};
    vm.getAllDrinks = function(){
      $http({
        method : 'GET',
        url : '/api/drinks'
      }).then(function getAllDrinks(drinkData){
        console.log(drinkData);
        vm.drinks = drinkData.data;
      }, function errorGettingAllDrinks (error){
        console.log('There is a problem with getAllDrinks function', error);
      });
    }
    vm.getAllDrinks();
    vm.createDrink = function (){
      $http({
        method : 'POST',
        url : '/api/drinks',
        data : vm.newDrink
      }).then(successNewDrink, errorNewDrink)
    }

  function successNewDrink(drinkData) {
      vm.drinks.unshift(drinkData.data);
    }
    function errorNewDrink(error) {
      console.log('There was an error posting the data: ', error);
    }
    vm.deleteDrink = function (drink) {
      $http({
        method: 'DELETE',
        url: '/api/drinks/'+ drink._id
      }).then(successDeletedDrink, errorDeletingDrink);
    }
    function successDeletedDrink(drinkData) {
      var index = vm.drinks.indexOf(drinkData);
      vm.drinks.splice(index,1);
      vm.getAllDrinks();
    }
    function errorDeletingDrink(error) {
      console.log('There was an error deleting the data: ', error);
    }
    vm.editDrink = function (drink) {
      $http({
        method: 'PUT',
        url: '/api/drinks/' + drink._id,
        data: drink
      }).then(function successEditedDrink(res) {
        //the drink will update automatically in the view
      }, function errorEditingDrink(err) {
        console.log('There was an error editing the drink: ', error);
      });
    }
  }
