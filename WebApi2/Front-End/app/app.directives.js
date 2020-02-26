
angular.module('AngularAuthApp').directive('menucliente', function ($interval) {
    return {
        restrict: "AE",
        templateUrl: "app/templates/cliente.busca.html",
        replace: true,
        scope: {
            nomepessoa: "=",
            sobrenome: "=",
        },
        link: function (scope, element, dados) {
            scope.nomepessoa = dados.nomepessoa;
            scope.sobrenome = dados.sobrenome;
        }
    };
});

angular.module('AngularAuthApp').directive('formulariogvp', function () {
    try {
        return {
            restrict: "AE",
            templateUrl: "app/templates/formulario.html",
            replace: true,
            scope: {
                formulario: "="
            },
            link: function (scope, element, dados) {
                scope.formulario = scope.formulario;
            }
        };
    } catch (e) {
        console.log(e);
    }
    
});
