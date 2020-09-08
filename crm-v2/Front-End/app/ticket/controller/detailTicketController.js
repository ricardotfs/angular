angular.module('AngularAuthApp').controller('detailTicketController',
    ['$scope', '$location', '$injector', '$ocLazyLoad',
        function ($scope, $location, $injector, $ocLazyLoad) {
            $scope.numero = 10;
            $scope.tipoModulo = 6;
            $scope.home = function () {
                $location.path("/");
            }

            $ocLazyLoad.load('/app/ticket/service/detailTicketService.js').then(function () {

                var service = $injector.get('detailTicketService');

                service.getFormulario($scope.tipoModulo).then(function (result) {
                    $scope.formulario = result.data.campos;
                    $scope.texto = "asdfasdfsadfsda";
                        
                })

                $scope.salvar = function () {
                    service.salvar($scope.formulario).then(function (result) {

                        $scope.mes = result;
                        alert("Salvo com sucesso");
                        $location.path("/home");
                    })
                };

                //service.getDepto().then(function (result) {
                //    $scope.dllDepto = result.data.data;
                //})

            })
        }]);