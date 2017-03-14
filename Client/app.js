angular.module('gallery', [
  'gallery.home',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'client/home/home.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});