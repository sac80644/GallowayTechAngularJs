  'use strict';

//1) work is being done here:

// Register `photoAlbum` component, along with its associated controller and template
// angular.
//   module('photoAlbum').
//   component('photoAlbum', {
//     templateUrl: 'photo-album/photo-album.template.html',
//     controller: ['$http', '$routeParams',
//       function photoAlbumController($http, $routeParams) {
//         var self = this;

//         self.setImage = function setImage(imageUrl) {
//           self.mainImageUrl = imageUrl;
//         };

//         //uncomment and use for local test and development
//         // $http.get('photos/Album_' + $routeParams.AlbumID + '.json').then(function(response) {
//         $http.get('http://gallowaytech.com/gallowaytechwebapi/api/album/' + $routeParams.AlbumID).then(function(response) {
//             self.photos = response.data;
//             self.setImage(self.photos[0].URL);
//         });
//       }
//     ]
//   });
  

//2) Inject a Photo resource factory that does the work
angular.
  module('photoAlbum').
  component('photoAlbum', {
    templateUrl: 'photo-album/photo-album.template.html',
    controller: ['$routeParams', 'Album',
      function PhotoAlbumController($routeParams, Album) {
        var self = this;
        self.photos = Album.get({albumId: $routeParams.AlbumID}, function(photos) {
          self.setImage(self.photos[0].URL);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
  