'use strict';

// Define the module
var testApp = angular.module('testApp', ['core.photo', 'core.album']);

// Define the controller on the `testApp` module
testApp.controller('TestController', function TestController($scope) {

  $scope.PageTitle = 'Static Content Test Controller';

  $scope.photos = 
  [
      {
          "PhotoID": 1,
          "Caption": "I Didn't Do It",
          "Name": "I Didn't Do It.jpg"
      },
      {
          "PhotoID": 2,
          "Caption": "Running",
          "Name": "Running.jpg"
      },
      {
          "PhotoID": 3,
          "Caption": "Handout",
          "Name": "Handout.jpg"
      },
      {
          "PhotoID": 4,
          "Caption": "My Couch",
          "Name": "My Couch.jpg"
      }
  ];
});

testApp.controller('HttpTestController', ['$scope', '$http', function HttpTestController($scope, $http) {

    $scope.PageTitle = 'Http Test Controller';

    $http.get('photos.json').then(function(response) {
        $scope.photos = response.data;
    });

}]);


testApp.controller('PhotoController', ['$scope', 'Photo',
      function PhotoListController($scope, Photo) {

        $scope.PageTitle = 'Photo Test Controller';

        $scope.photos = Photo.query();
        
      }]);

testApp.controller('AlbumController', ['$scope', 'Album',
      function PhotoListController($scope, Album) {

        $scope.PageTitle = 'Album Test Controller';
        
        //use query without passing parameters
        // $scope.photos = Album.query();
        $scope.photos = Album.get({albumId: 2});
        
      }]);
