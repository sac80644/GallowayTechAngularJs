  'use strict';

// Register `photoDetail` component, along with its associated controller and template
angular.
  module('photoDetail').
  component('photoDetail', {
    templateUrl: 'photo-detail/photo-detail.template.html',
    controller: ['$http', '$routeParams',
      function photoDetailController($http, $routeParams) {
        var self = this;

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        $http.get('photos/Album_' + $routeParams.photoId + '.json').then(function(response) {
            self.photos = response.data;
            self.setImage(self.photos[0].URL);
        });
      }
    ]
  });
  