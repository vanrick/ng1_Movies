var app = angular.module("omdb", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchController'
      })
      .otherwise({     redirectTo: '/login'});
      $locationProvider.html5Mode(true)
});
