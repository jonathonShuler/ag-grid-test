function MainController($scope) {
  $scope.message = 'It Is Working!';

  var columnDefs = [
    {headerName: "Make", field: "make"},
    {headerName: "Model", field: "model"},
    {headerName: "Price", field: "price"}
  ];

  var rowData = [
      {make: "BMW", model: "X5", price: 65000},
      {make: "Chevrolet", model: "Volt", price: 32000},
      {make: "Porsche", model: "Cayenne", price: 72000}
  ];

  $scope.gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData
  };
}

angular
  .module('ag-app')
  .controller('MainController', MainController);
