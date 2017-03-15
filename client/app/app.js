angular.module('gallery', [
  'gallery.home',
  'gallery.post',
  'gallery.services',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeController'
    })
    .when('/post', {
      templateUrl: 'app/post/post.html',
      controller: 'PostController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});