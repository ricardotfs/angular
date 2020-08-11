angular.module('AngularAuthApp').controller('admTicketController',
    ['$scope', '$location', '$injector', '$ocLazyLoad',
        function ($scope, $location, $injector, $ocLazyLoad) {

            $scope.choices = [{ id: '', name: '', type: '' }];
            $scope.types = [{ value: "0", text: "String" }, { value: "1", text: "Int" }];
            $scope.selectedId = 0;
            
            $scope.addNewChoice = function () {
                var newItemNo = $scope.choices.length + 1;
                $scope.choices.push({ id: '', name: '', type: '' });
            };

            $scope.removeNewChoice = function () {
                var newItemNo = $scope.choices.length - 1;
                if (newItemNo !== 0) {
                    $scope.choices.pop();
                }
            };

            $scope.showAddChoice = function (choice) {
                return choice.id === $scope.choices[$scope.choices.length - 1].id;
            };

        }])