
angular.module('AngularAuthApp').run(
    ['$rootScope', '$location', 'authService', 'ngAuthSettings', '$http', '$injector', '$ocLazyLoad',
        function ($rootScope, $location, authService, ngAuthSettings, $http, $injector, $ocLazyLoad) {

            var serviceBase = ngAuthSettings.apiServiceBaseUri;

            $rootScope.getInfo = function () {
                $http.get(serviceBase + 'api/usuario/getInfo').then(function (response) {
                    $rootScope.info = response.data;
                });
            };

            $rootScope.createNotify = function (texto) {
                var img = '../midia/noti.jpg';
                var text = texto;
                var notification = new Notification('Header', { body: text, icon: img, requireInteraction: true });

                setTimeout(notification.close.bind(notification), 4000);

                //const options = {
                //    body: 'This notification has data attached to it that is printed ' +
                //        'to the console when it\'s clicked.',
                //    tag: 'data-notification',
                //    data: {
                //        time: new Date(Date.now()).toString(),
                //        message: 'Hello, World!'
                //    }
                //};
                //var notification = new Notification('Header', options);
            };
        }
    ]
);
