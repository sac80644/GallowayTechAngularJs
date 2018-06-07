
//using resource instead of http  
angular.
module('core.photo').
factory('Photo', ['$resource',
  function($resource) {
    return $resource('http://gallowaytech.com/gallowaytechwebapi/api/photos/:photoId', {}, {
      query: {
        method: 'GET',
        params: {photoId: 'Thumb'},  //Get a list of thumbmails
        isArray: true
      }
    });
  }
]);

angular.
module('core.album').
factory('Album', ['$resource',
  function($resource) {
    return $resource('http://gallowaytech.com/gallowaytechwebapi/api/album/:albumId', {}, 
    {
      query: {
        method: 'GET',
        params: {albumId: 1},  //Param set to 1, returns first album
        isArray: true
      },
      get: {
        method: 'GET',
        params: {albumId: '@albumId'},  //Pass the param
        isArray: true
      }
    });
  }
]);
