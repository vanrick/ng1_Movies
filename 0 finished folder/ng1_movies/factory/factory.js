app.factory('SearchFactory', function ($routeParams, $http) {
  return {
    search: function(){
		$scope.view.data1 = [];
		$scope.view.data2 = [];
		$http.get(`http://www.omdbapi.com/?s=${$scope.searchInput}`).then(function(data){
			var arr = data.data.Search;
			for (var i = 0; i < arr.length; i++) {
				if(i % 2 === 0){
					$scope.view.data1.push(arr[i])
				} else {
					$scope.view.data2.push(arr[i])
				}
			}
		})
	}
  }
});
