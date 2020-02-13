angular.module('AngularAuthApp').controller('loginController', ['$injector', '$scope', '$location', 
    function ($injector, $scope, $location) {
    
    $scope.login = function () {
        var data = { userName: "admin", password: "admin" };

        var authService = $injector.get('authService');
        
        authService.login(data).then(function (response) {
            alert("Bem vindo " + response.data.NomeUsuario);
            $location.path('/');
        }, function (err) {
            alert(err.data.error_description);
        });
    };

}]);
