angular.module('AngularAuthApp').controller('telefoneController',
    ['$scope', '$location', '$injector', '$ocLazyLoad',
        function ($scope, $location, $injector, $ocLazyLoad) {
            $scope.nome = 'Ricardo Oliveira';
            $scope.email = 'Ricardo@gvp.com';
            $scope.senha = '123456';
            $scope.formulario = [];
            $scope.tipoModulo = 4;

            $ocLazyLoad.load('/app/modules/telefone/service/telefoneService.js').then(function () {
                var service = $injector.get('telefoneService');

                service.getFormulario($scope.tipoModulo).then(function (result) {                   
                    $scope.formulario = result.data.campos;
                })

                $scope.salvar = function () {
                    var data = $scope.formulario;

                    service.salvar(data).then(function (result) {
                        var mes = result;
                        $location.path("/home");
                    })
                };
   

            })


        }]);