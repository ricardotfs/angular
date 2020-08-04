angular.module('AngularAuthApp').controller('detailTicketController',
    ['$scope', '$location', '$injector', '$ocLazyLoad',
        function ($scope, $location, $injector, $ocLazyLoad) {


            $scope.home = function () {
                $location.path("/");
            }

        }])