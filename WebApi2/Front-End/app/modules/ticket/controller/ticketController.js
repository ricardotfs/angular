angular.module('AngularAuthApp').controller('ticketController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.numero = 10; 
        $scope.home = function () {
            $location.path("/");
        }
}]);