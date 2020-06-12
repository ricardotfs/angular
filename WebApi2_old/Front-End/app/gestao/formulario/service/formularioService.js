angular.module('AngularAuthApp').factory('formularioService', ['$http', 'ngAuthSettings',
    function ($http, ngAuthSettings) {

        var serviceBase = ngAuthSettings.apiServiceBaseUri;
        var objFactory = {};

        objFactory.getFormulario = function () {
            return $http.get(serviceBase + 'api/formulario/getItens').then(function (response) {
                return response.data;
            })
        }
        return objFactory;
    }]);