// Controlador 
let app = angular.module("MyApp",[]);
app.controller('desarrolloController', ['$scope', function($scope) {
    // Variables 
    $scope.laDistanciaRecorrida = 0;
    $scope.tarifaFija = 250;
    $scope.tarifaKilometro = 30;
    $scope.tarifaExcesoKilometro = 20;
    $scope.elDescuento = 0.1; // 10%
    $scope.importeDelDescuento = 500;

    // Función 
    $scope.calculoPago = function() {
      if ($scope.laDistanciaRecorrida <= 300) {
        //Tarifa fija
        $scope.pago = $scope.tarifaFija;
      } else if ($scope.laDistanciaRecorrida <= 1000) {
        //Tarifa fija más el exceso de kilómetros
        $scope.pago = $scope.tarifaFija + ($scope.laDistanciaRecorrida - 300) * $scope.tarifaKilometro;
      } else {
        //Tarifa fija más los kilómetros recorridos entre 300 hasta 1000
        $scope.pago = $scope.tarifaFija + (700 * $scope.tarifaKilometro) + ($scope.laDistanciaRecorrida - 1000) * $scope.tarifaExcesoKilometro;
      }
      // Descuento del 10%
      if ($scope.pago > $scope.importeDelDescuento) {
        $scope.pago -= $scope.pago * $scope.elDescuento;
      }
    }
  }]);