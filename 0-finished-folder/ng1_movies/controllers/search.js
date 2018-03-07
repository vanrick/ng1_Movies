app.controller('SearchController', function($scope, $http, $route, $routeParams, SearchFactory) {
  $scope.view = {}
  $scope.searchInput
  $scope.view.data1
  $scope.view.searchy = function(x){
    SearchFactory.search1(x).then(function(data){
      // console.log('SearchController ',data.data.Search);
      $scope.view.data1 = [];
      var arr = data.data.Search;
      arr.forEach(function(entry){

        if (entry.Poster == 'N/A') {
          entry.Poster = 'http://www.freeiconspng.com/uploads/popcorn-png-19.png'
        }
        $scope.view.data1.push(entry)
        // console.log('na ', entry.Poster);
      })
      // $scope.view.data1.push(arr)
      // console.log($scope.view.data1);
    })
    $scope.searchInput = ''
  }
// http://www.freeiconspng.com/uploads/popcorn-png-19.png

})
