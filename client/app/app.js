angular.module('gallery', [
  'gallery.home',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});