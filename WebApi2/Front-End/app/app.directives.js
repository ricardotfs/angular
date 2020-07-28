
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
angular.module('AngularAuthApp').directive('gridgvp',  function () {
    try {
        return {
            restrict: "AE",
            templateUrl: "app/templates/grid.html",
            replace: true,
            scope: {
                
            },
            link: function (scope, element, dados, uiGridConstants, uiGridGroupingConstants, localStorageService) {

                scope.texto = scope.texto;

                scope.gridOptions1 = {
                    paginationPageSizes: [25, 50, 75],
                    paginationPageSize: 25,
                    columnDefs: [
                        { name: 'name' },
                        { name: 'gender' },
                        { name: 'company' }
                    ]
                };
                scope.gridOptions2 = {
                    enablePaginationControls: false,
                    paginationPageSize: 25,
                    columnDefs: [
                        { name: 'name' },
                        { name: 'gender' },
                        { name: 'company' }
                    ]
                };

                scope.gridOptions2.onRegisterApi = function (gridApi) {
                    scope.gridApi2 = gridApi;
                }

                var array = [
                    {
                        name: "Ethel Price",
                        gender: "female",
                        company: "Enersol"
                    }];
                scope.gridOptions1.data = array;
                scope.gridOptions2.data = array;

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