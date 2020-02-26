angular.module('AngularAuthApp').controller('ticketController',
    ['$scope', '$location', '$injector', '$ocLazyLoad',
        function ($scope, $location, $injector, $ocLazyLoad) {
            $scope.numero = 10;
            $scope.home = function () {
                $location.path("/");
            }

            $ocLazyLoad.load('/app/modules/ticket/service/ticketService.js').then(function () {

                var service = $injector.get('ticketService');
                service.getFormulario().then(function (result) {
                    $scope.formulario = result.data.campos;
                })

                service.getDepto().then(function (result) {
                    $scope.dllDepto = result.data.data;
                })

            })
        }]);