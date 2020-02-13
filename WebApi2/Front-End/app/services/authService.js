'use strict';
app.factory('authService',
    ['$http', '$q', 'localStorageService', 'ngAuthSettings', '$location',
        function ($http, $q, localStorageService, ngAuthSettings, $location) {

            var authServiceFactory = {};
            var serviceBase = ngAuthSettings.apiServiceBaseUri;

            authServiceFactory.login = function (loginData) {
                var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

                var deferred = $q.defer();

                $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {

                    localStorageService.set('authorizationData', {
                        token: response.data.access_token,
                        NomeUsuario: response.data.NomeUsuario,
                        useRefreshTokens: false
                    });

                    deferred.resolve(response);
                }, function (response) {
                    _logOut();
                    deferred.reject(response);
                });

                return deferred.promise;

            };

            authServiceFactory.logOut = function () {
                localStorageService.remove('authorizationData');
                $location.path("/login");
                $scope.$apply();
            };

            authServiceFactory.getDepto = function () {
                return $http.get(serviceBase + 'api/ticket/get').then(function (response) {
                    return response;
                })
            }
            return authServiceFactory;
        }
    ]
);