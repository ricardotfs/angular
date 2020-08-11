'use strict';
angular.module('AngularAuthApp').factory('admTicketService', ['$http', 'ngAuthSettings',
    function ($http, ngAuthSettings) {

        var serviceBase = ngAuthSettings.apiServiceBaseUri;
        var objFactory = {};

        objFactory.getFields = function (tipoModulo) {
            return $http.get(serviceBase + 'api/adm/getFields?tipoModulo=' + tipoModulo).then(function (response) {
                return response.data.data.campos;
            })
        }
        return objFactory;
    }]);
