angular.module('AngularAuthApp').controller('telefoneController',
    ['$scope', '$location', '$injector', '$ocLazyLoad',
        function ($scope, $location, $injector, $ocLazyLoad) {
            $scope.nome = 'Ricardo Oliveira';
            $scope.email = 'Ricardo@gvp.com';
            $scope.senha = '123456';
        }]);