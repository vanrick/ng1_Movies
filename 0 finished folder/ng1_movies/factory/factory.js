app.factory('SearchFactory', function ($routeParams, $http) {

  return {

    search1: function(x){

		return $http.get(`http://www.omdbapi.com/?s=${x}`).then(function(data){

      return data
		})

	}
  }
});
