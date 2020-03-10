
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
angular.module('AngularAuthApp').directive('editable', function () {
    return {
        link: function (scope, elem, attrs, ctrl) {
            //$.fn.datepicker.defaults.format = "dd/mm/yyyy";
            $('.datepicker').datepicker({
                format: 'dd/mm/yyyy',
                autoclose: true,
                todayHighlight: true
            });

        }
    }
});
angular.module('AngularAuthApp').directive('tooltip', function () {
    return {
        link: function (scope, elem, attrs, ctrl) {
            if (attrs.tooltip != "") {
                $(elem[0]).attr({ "title": attrs.tooltip }); $(elem[0]).attr({ "data-html": true });
                $(elem[0]).tooltip();
            }
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
angular.module('addressFormatter', []).filter('address', function () {
    return function (input) {
        return input.street + ', ' + input.city + ', ' + input.state + ', ' + input.zip;
    };
});
angular.module('AngularAuthApp').filter('teste4', function () {


    return function (input) {

        var numStr = /^-?(\d+\.?\d*)$|(\d*\.?\d+)$/;
        if (input == 'Nome') {
            return input + ' Testando filters';
        }

        return input;
    };
});