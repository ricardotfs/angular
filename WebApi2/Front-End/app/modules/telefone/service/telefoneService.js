﻿angular.module('AngularAuthApp').factory('telefoneService', ['$http', 'ngAuthSettings',
    function ($http, ngAuthSettings) {

        var serviceBase = ngAuthSettings.apiServiceBaseUri;
        var objFactory = {};

        objFactory.salvar = function (data) {
            return $http.post(serviceBase + 'api/telefone/post', data).then(function (response) {
                return response;
            })
        }
        return objFactory;
    }]);