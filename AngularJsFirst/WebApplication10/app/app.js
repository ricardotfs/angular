var serviceBase = 'https://api.dialugo.com/';
//  var serviceBase = 'http://localhost:23701/';

var version = '1.0.20.2.2.7';

var app = angular.module('DialugoApp', ['ngRoute','ngSanitize', 'ui.select', 'ui.router', 'oc.lazyLoad', 'LocalStorageModule', 'tableSort', 'nya.bootstrap.select', 'cp.ngConfirm', 'ui.bootstrap', 'pubnub.angular.service',
    'ngTouch', 'ui.grid', 'ui.grid.saveState', 'ui.grid.cellNav', 'ui.grid.autoResize', 'ui.grid.edit', 'ui.grid.resizeColumns', 'ui.grid.pinning', 'ui.grid.selection', 'ui.grid.moveColumns', 'ui.grid.exporter', 'ui.grid.importer', 'ui.grid.grouping', 'ui.grid.pagination']);

app.constant('ngAuthSettings', { apiServiceBaseUri: serviceBase });
app.constant('ngAuthSettings', { apiServiceVersion: version });


app.controller('demoController', function ($scope) {
    $scope.Message = "Hello To AngularJS QuickStart";
    $scope.show = true;
});
