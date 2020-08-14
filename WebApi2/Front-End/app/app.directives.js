﻿
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
angular.module('AngularAuthApp').directive('adm', function () {
    try {
        return {
            restrict: "AE",
            templateUrl: "app/templates/adm.html",
            replace: true,
            scope: {
                choices: "="
            },
            link: function (scope, element, dados) {

                scope.choices = scope.choices;
                scope.types = [{ value: 0, text: "String" }, { value: 1, text: "Int" }];

                scope.addNewChoice = function () {
                    var newItemNo = scope.choices.length + 1;
                    scope.choices.push({ id: '', nome: '', tipo: '' });
                };

                scope.removeNewChoice = function () {
                    var newItemNo = scope.choices.length - 1;
                    if (newItemNo !== 0) {
                        scope.choices.pop();
                    }
                };

                scope.showAddChoice = function (choice) {
                    return choice.id === scope.choices[scope.choices.length - 1].id;
                };

                //scope.salvar = function () {
                //    var a = 0;
                //}
            }
        };
    } catch (e) {
        console.log(e);
    }

});
angular.module('AngularAuthApp').directive('gridgvp', function () {
    try {
        return {
            restrict: "AE",
            templateUrl: "app/templates/grid.html",
            replace: true,
            scope: {
                
            },
            link: function (scope, element, dados) {

                scope.texto = scope.texto;

                scope.gridOptions1 = {
                    paginationPageSizes: [5, 25, 50, 75],
                    paginationPageSize: 5,
                    columnDefs: [
                        { name: 'name' },
                        { name: 'gender' },
                        { name: 'company' }
                    ]
                };

                var array = [
                    {
                        name: "1Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "2Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "4Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "5Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "6Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "7Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "8Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "9Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "0Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "11Ethel Price",
                        gender: "22female",
                        company: "Enersol"
                    }, {
                        name: "33Ethel Price",
                        gender: "female",
                        company: "44Enersol"
                    }, {
                        name: "55Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "66Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "77Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "88Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "99Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }, {
                        name: "Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }];
                scope.gridOptions1.data = array;

                //$http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
                //    .then(function (response) {
                //        $scope.gridOptions1.data = response.data;
                //        $scope.gridOptions2.data = response.data;
                //    });
            }
        };
    } catch (e) {
        console.log(e);
    }

});
angular.module('AngularAuthApp').directive('gridgvpcuston', function ($http,ngAuthSettings) {
    try {
        return {
            restrict: "AE",
            templateUrl: "app/templates/grid.html",
            replace: true,
            scope: {
                tipo: "@tipo"
            },
            link: function (scope, element, dados) {

                var serviceBase = ngAuthSettings.apiServiceBaseUri;
                var colunas = []
                var list = []
                $http.get(serviceBase + 'api/grid/getColumns?tipoModulo=6')
                    .then(function (response) {
                        colunas = response.data.data;
                    });

                scope.texto = scope.texto;

                scope.gridOptions1 = {
                    paginationPageSizes: [5, 25, 50, 75],
                    paginationPageSize: 5,
                    columnDefs: colunas,
                };

                $http.get(serviceBase + 'api/grid/data?tipoModulo=6')
                    .then(function (response) {
                        list = response.data.data;
                        scope.gridOptions1.data = list;
                    });

                scope.gridOptions1.totalItems = 5;

            }
        }
    } catch (e) {
        console.log(e);
    }

});