﻿
'use strict';
angular.module('AngularAuthApp').factory('ticketService', ['$http', 'ngAuthSettings',
    function ($http, ngAuthSettings) {

        var serviceBase = ngAuthSettings.apiServiceBaseUri;
        var objFactory = {};

        objFactory.getDepto = function () {
            return $http.get(serviceBase + 'api/ticket/get').then(function (response) {
                return response;
            })
        }
        objFactory.getFormulario = function () {
            return $http.get(serviceBase + 'api/formulario/get').then(function (response) {
                return response.data;
            })
        }
        return objFactory;
    }]);