angular.module('AngularAuthApp').controller('ticketController', ['$scope', '$location', '$injector', '$ocLazyLoad',
    function ($scope, $location, $injector,$ocLazyLoad) {
        $scope.numero = 10; 
        $scope.home = function () {
            $location.path("/");
        }

        $ocLazyLoad.load('/app/modules/ticket/service/ticketService.js').then(function () {
            try {
                var service = $injector.get('authService');
                service.getDepto().then(function (result) {
                    $scope.dllDepto = result.data.data;
                })

            } catch (e) {
                console.log(e)
            }
            
        })
}]);