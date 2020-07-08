var serviceBase = 'http://localhost:15905/';

var app = angular.module('AngularAuthApp', ['ui.router', 'oc.lazyLoad', 'LocalStorageModule']);

app.constant('ngAuthSettings', { apiServiceBaseUri: serviceBase });

app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.hashPrefix('');
    
    var noCache = Math.floor(Math.random() * 11);

    $stateProvider
      .state('index', {
          url: "/", // root route
          views: {
              "lazyLoadView": {
                  controller: 'homeController', // This view will use AppCtrl loaded below in the resolve
                  templateUrl: 'app/views/home.html'
              }
          },
          resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
              loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                  // you can lazy load files for an existing module
                  return $ocLazyLoad.load('app/controllers/homeController.js');
              }]
          }
        })
      .state('login', {
          url: "/login", // root route
          views: {
              "lazyLoadView": {
                  controller: 'loginController', // This view will use AppCtrl loaded below in the resolve
                  templateUrl: 'app/views/login.html'
              }
          },
          resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
              loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                  // you can lazy load files for an existing module
                  return $ocLazyLoad.load('app/controllers/loginController.js');
              }]
          }
      })
        .state('ticket', {
            url: "/ticket", // root route
            views: {
                "lazyLoadView": {
                    controller: 'ticketController', // This view will use AppCtrl loaded below in the resolve
                    templateUrl: 'app/ticket/view/ticket.html'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('app/ticket/controller/ticketController.js');
                }]
            }
        })
        .state('teste', {
            url: "/teladagrid", // root route
            views: {
                "lazyLoadView": {
                    controller: 'loginController', // This view will use AppCtrl loaded below in the resolve
                    templateUrl: 'app/views/grid.html'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('app/controllers/loginController.js');
                }]
            }
        });

});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

