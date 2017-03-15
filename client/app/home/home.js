angular.module('gallery.home', [])

.controller('HomeController', function($scope, Images) {
  // $scope.images = [
  //   {
  //     url: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
  //     message: 'Kute Kitten',
  //     likes: 0
  //   },
  //   {
  //     url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/heart-and-brain-web-comic-awkward-yeti-nick-seluk-97__700.jpg',
  //     message: 'Musaaack',
  //     likes: 0
  //   },
  //   {
  //     url: 'http://media.moddb.com/images/groups/1/3/2392/awesome-cat.jpg',
  //     message: 'Awesome cat',
  //     likes: 0
  //   }
  // ];


  $scope.getImages = function() {
    Images.getAll()
      .then(function(images) {
        $scope.images = images;
      });
  };
  $scope.getImages();
});


