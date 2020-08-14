angular.module('AngularAuthApp').controller('admTicketController',
    ['$scope', '$location', '$injector', '$ocLazyLoad',
        function ($scope, $location, $injector, $ocLazyLoad) {

            //$scope.types = [{ value: 0, text: "String" }, { value: 1, text: "Int" }];
            $scope.tipoModulo = 6;

            $ocLazyLoad.load('/app/adm/ticket/service/admTicketService.js').then(function () {

                var service = $injector.get('admTicketService');

                service.getFields($scope.tipoModulo).then(function (result) {
                    $scope.choices = result;
                   // $scope.choices.push({ id: '', nome: '', tipo: '' });
                });
               
                //$scope.addNewChoice = function () {
                //    var newItemNo = $scope.choices.length + 1;
                //    $scope.choices.push({ id: '', nome: '', tipo: '' });
                //};

                //$scope.removeNewChoice = function () {
                //    var newItemNo = $scope.choices.length - 1;
                //    if (newItemNo !== 0) {
                //        $scope.choices.pop();
                //    }
                //};

                //$scope.showAddChoice = function (choice) {
                //    return choice.id === $scope.choices[$scope.choices.length - 1].id;
                //};

                $scope.salvar = function () {

                    var a = 0;
                }
            });
        }])