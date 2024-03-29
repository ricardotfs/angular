﻿var serviceBase = 'http://localhost:15905/';

var app = angular.module('AngularAuthApp', ['ui.router', 'oc.lazyLoad', 'LocalStorageModule',
    'ngTouch', 'ui.grid', 'ui.grid.pagination']);

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
                  return $ocLazyLoad.load('app/controllers/homeController.js?v=' + noCache);
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
                  return $ocLazyLoad.load('app/controllers/loginController.js?v=' + noCache);
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
                    return $ocLazyLoad.load('app/ticket/controller/ticketController.js?v=' + noCache);
                }]
            }
        })
        .state('detailTicket', {
            url: "/detailTicket", // root route
            views: {
                "lazyLoadView": {
                    controller: 'detailTicketController', // This view will use AppCtrl loaded below in the resolve
                    templateUrl: 'app/ticket/view/detailTicket.html'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('app/ticket/controller/detailTicketController.js?v=' + noCache);
                }]
            }
        })
        .state('admticket', {
            url: "/admticket", // root route
            views: {
                "lazyLoadView": {
                    controller: 'admController', // This view will use AppCtrl loaded below in the resolve
                    templateUrl: 'app/adm/views/admTicket.html'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('app/adm/controller/admController.js?v=' + noCache);
                }]
            }
        })
        .state('admtelefone', {
            url: "/admtelefone", // root route
            views: {
                "lazyLoadView": {
                    controller: 'admController', // This view will use AppCtrl loaded below in the resolve
                    templateUrl: 'app/adm/views/admTelefone.html'
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('app/adm/controller/admController.js?v=' + noCache);
                }]
            }
        })

});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

