angular.module('AngularAuthApp').controller('telefoneController',
    ['$scope', '$location', '$injector', '$ocLazyLoad',
        function ($scope, $location, $injector, $ocLazyLoad) {
            $scope.nome = 'Ricardo Oliveira';
            $scope.email = 'Ricardo@gvp.com';
            $scope.senha = '123456';
           // $scope.formulario = []
           

            $ocLazyLoad.load('/app/modules/telefone/service/telefoneService.js').then(function () {
                var service = $injector.get('telefoneService');

                service.getFormulario().then(function (result) {
                    
                    $scope.formulario = result;
                })

                $scope.salvar = function () {
                    var data = { nome: $scope.nome, email: $scope.email, senha: $scope.senha };
                    service.salvar(data).then(function (result) {
                        var mes = result;
                        $location.path("/home");
                    })
                };
   

            })


        }]);