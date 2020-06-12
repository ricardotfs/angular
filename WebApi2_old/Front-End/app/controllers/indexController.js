
angular.module('AngularAuthApp').controller(
    'indexController', ['$scope', '$injector', '$rootScope',
        function ($scope, $injector, $rootScope) {
            $rootScope.getInfo();
            $scope.logOut = function () { 
                var authService = $injector.get('authService');
                authService.logOut();
            };
        }
    ]
);
