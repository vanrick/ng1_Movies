app.controller('SearchController', function($scope, $http, $route, $routeParams, SearchFactory) {
  $scope.view = {}
  $scope.view.searchy = SearchFactory.search

  console.log($scope.view.searchy);
})
