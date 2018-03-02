function MainController($scope) {
  $scope.message = 'It Is Working!';
}

angular
  .module('ag-app')
  .controller('MainController', MainController);
