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
        when('/photos/:photoId', {
          template: '<photo-detail></photo-detail>'
        }).
        when('/photos/test', {
          template: '/test/test.html'
        }).
        otherwise('/photos');
    }
  ]);
