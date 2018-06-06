'use strict';

// Define the module
var testApp = angular.module('testApp', []);

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
