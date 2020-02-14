angular.module('AngularAuthApp').controller('ticketController',
    ['$scope', '$location', '$injector', '$ocLazyLoad',
    function ($scope, $location, $injector,$ocLazyLoad) {
        $scope.numero = 10; 
        $scope.home = function () {
            $location.path("/");
        }

        alert("1");

        $ocLazyLoad.load('/app/modules/ticket/service/ticketService.js').then(function () {
          
                var service = $injector.get('ticketService');
                service.getDepto().then(function (result) {
                    $scope.dllDepto = result.data.data;
                })

        
            
        })
}]);