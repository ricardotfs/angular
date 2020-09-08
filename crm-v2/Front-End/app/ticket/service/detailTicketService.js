'use strict';
angular.module('AngularAuthApp').factory('detailTicketService', ['$http', 'ngAuthSettings',
    function ($http, ngAuthSettings) {

        var serviceBase = ngAuthSettings.apiServiceBaseUri;
        var objFactory = {};

        //objFactory.getDepto = function () {
        //    return $http.get(serviceBase + 'api/ticket/get').then(function (response) {
        //        return response;
        //    })
        //}
        objFactory.salvar = function (data) {
            var promise = $http.post(serviceBase + 'api/formulario/salvar', data, { headers: { 'Content-Type': 'application/json' } });
            return promise;
        };
        objFactory.getFormulario = function (tipoModulo) {
            return $http.get(serviceBase + 'api/formulario/get?tipoModulo=' + tipoModulo).then(function (response) {
                return response.data;
            })
        }
        return objFactory;
    }]);