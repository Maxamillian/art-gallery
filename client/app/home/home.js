angular.module('gallery.home', [])
.controller('HomeController', function($scope) {
  $scope.images = [
    {
      url: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
      message: 'Kute Kitten'
    }
  ];
});