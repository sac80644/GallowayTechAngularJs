'use strict';

angular.
  module('gallowayTechApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/photos', {
          template: '<photo-list></photo-list>'
        }).
        when('/photos/:AlbumID', {
          template: '<photo-album></photo-album>'
        }).
        when('/photos/test', {
          template: '/test/test.html'
        }).
        otherwise('/photos');
    }
  ]);
