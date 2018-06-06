'use strict';

// Register `photoList` component, along with its associated controller and template
angular.
  module('photoList').
  component('photoList', {
    templateUrl: 'photo-list/photo-list.template.html',
    controller: ['$http', function PhotoListController($http) {
      var self = this;
      self.orderProp = 'Age';

      //uncomment and use for local test and development
      // $http.get('photos/photos.json').then(function(response) {
      $http.get('http://gallowaytech.com/gallowaytechwebapi/api/Photos/Thumb').then(function(response) {
        self.photos = response.data;
      });
    }]
  });
