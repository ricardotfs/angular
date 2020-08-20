angular.module('AngularAuthApp').controller('admTicketController',
    ['$scope', '$location', '$injector', '$ocLazyLoad',
        function ($scope, $location, $injector, $ocLazyLoad) {
            $scope.tipoModulo = 6;

            $ocLazyLoad.load('/app/adm/service/admService.js').then(function () {

                var service = $injector.get('admTicketService');

                service.getFields($scope.tipoModulo).then(function (result) {
                    $scope.choices = result;
                    $scope.choices.push({
                        id: "",
                        nome: "",
                        itens:[],
                        tipo: "",
                        toolTip: "",
                        valor: ""
                    });
                });
               
                $scope.salvar = function () {

                    var a = 0;
                }
            });
        }])