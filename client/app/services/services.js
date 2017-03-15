angular.module('gallery.services', [])

.factory('Images', function($http) {
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/posts/'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var addOne = function(post) {
    console.log('now trying post...', post);
    return $http({
      method: 'POST',
      url: '/api/posts/',
      data: JSON.stringify(post)
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
});