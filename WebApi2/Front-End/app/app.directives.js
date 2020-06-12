
angular.module('AngularAuthApp').directive('menucliente', function ($interval) {
    return {
        restrict: "AE",
        templateUrl: "app/templates/cliente.busca.html",
        replace: true,
        scope: {
            nomepessoa: "="
        },
        link: function (scope, element, dados) {
            scope.nomepessoa = dados.nomepessoa;
        }
    };
});
