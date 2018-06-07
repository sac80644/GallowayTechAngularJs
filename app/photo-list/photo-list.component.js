'use strict';

//1) work is being done here:

// Register `photoList` component, along with its associated controller and template
// angular.
//   module('photoList').
//   component('photoList', {
//     templateUrl: 'photo-list/photo-list.template.html',
//     controller: ['$http', function PhotoListController($http) {
//       var self = this;
//       self.orderProp = 'Age';

//       //uncomment and use for local test and development
//       // $http.get('photos/photos.json').then(function(response) {
//       $http.get('http://gallowaytech.com/gallowaytechwebapi/api/Photos/Thumb').then(function(response) {
//         self.photos = response.data;
//       });
//     }]
//   });


//2) Inject a Photo resource factory that does the work
angular.
  module('photoList').
  component('photoList', {
    templateUrl: 'photo-list/photo-list.template.html',
    controller: ['Photo',
      function PhotoListController(Photo) {
        this.photos = Photo.query();
        this.orderProp = 'Age';
      }
    ]
  });
  