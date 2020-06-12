'use strict';
app.factory('authInterceptorService', ['$q', '$injector', '$location', 'localStorageService',
    function ($q, $injector, $location, localStorageService) {

    var authInterceptorServiceFactory = {};

    var _request = function (config) {

        config.headers = config.headers || {};
        var authData = localStorageService.get('authorizationData');
        var authService = $injector.get('authService');

        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData.token;
        }
        else {
            if ($location.url() !== "/login") {
                authService.logOut();
            }
        }
        return config;
    };

    var _responseError = function (rejection) {
        var authService = $injector.get('authService');
        var authData = localStorageService.get('authorizationData');

        if (!authData) {
            authService.logOut();
        }

        return $q.reject(rejection);
    };

    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;

    return authInterceptorServiceFactory;
}]);