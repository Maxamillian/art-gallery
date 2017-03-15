angular.module('gallery.post', [])
.controller('PostController', function($scope, $location, Images) {

  $scope.post = {};
  $scope.addImage = function() {
    Images.addOne($scope.post);
      // .then(function(post) {
      //   $location.path('/home');
      // }).catch(function(err) {
      //   console.error(err);
      // });

  };
});