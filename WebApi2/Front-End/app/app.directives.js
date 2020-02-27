
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
        restrict: "AE",
        scope: { editable: "=" },
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            scope.$watch("editable", function () {
                //var a = valor;
                
                if ($(elem[0])[0].type == 'date') {
                    $(elem[0])[0].value = new Date($(elem[0])[0].value);
                    //$(elem[0]).editable({
                    //    validate: function (value) {
                    //        if ($.trim(value) == "") return "This field is required";
                    //    }
                    //});
                }
                //var bb = $(elem[0])[0].value;

                //setTimeout(function () {
                //    var aa = $(elem[0])[0].value
                //},100)  
                //if ($(elem[0]).html() != "") {
                //    $(elem[0]).attr({ "data-title": "Altere o texto que vai aparecer aqui." });
                //    $(elem[0]).attr({ "data-placement": "bottom" });

                //    $(elem[0]).editable({
                //        validate: function (value) {
                //            if ($.trim(value) == "") return "This field is required";
                //        }
                //    });
                //}
            });
        }
    };
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
