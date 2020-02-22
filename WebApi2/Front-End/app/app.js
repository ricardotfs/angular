﻿var serviceBase = 'http://localhost:5554/';
var version = '0.0.0.1'
var app = angular.module('AngularAuthApp', ['ui.router', 'oc.lazyLoad', 'LocalStorageModule']);

app.constant('ngAuthSettings', { apiServiceBaseUri: serviceBase });

app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.hashPrefix('');

    var noCache = version;

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
                    return $ocLazyLoad.load(`app/controllers/homeController.js?v=${noCache}`);
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
                    return $ocLazyLoad.load(`app/controllers/loginController.js?v=${noCache}`);
                }]
            }
        })
        .state('ticket', {
            url: "/ticket", // root route
            views: {
                "lazyLoadView": {
                    controller: 'ticketController',
                    templateUrl: 'app/modules/ticket/view/ticket.html'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load(`app/modules/ticket/controller/ticketController.js?v=${noCache}`);
                }]
            }
        })
        .state('telefone', {
            url: "/telefone", // root route
            views: {
                "lazyLoadView": {
                    controller: 'telefoneController',
                    templateUrl: 'app/modules/telefone/view/telefone.html'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load(`app/modules/telefone/controller/telefoneController.js?v=${noCache}`);
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
