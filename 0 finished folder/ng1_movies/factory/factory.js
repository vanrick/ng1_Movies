app.factory('SearchFactory', function ($routeParams, $http) {

  return {
    // dataz1: function(){
    //   return data1
    // },
    search1: function(x){
      // var data1 = []
      // var data2 = []
		return $http.get(`http://www.omdbapi.com/?s=${x}`).then(function(data){
			// var arr = data.data.Search;
			// for (var i = 0; i < arr.length; i++) {
			// 	if(i % 2 === 0){
			// 		data1.push(arr[i])
			// 	} else {
			// 		data2.push(arr[i])
			// 	}
			// }
      return data
		})
    // console.log('fact data1 ',data1);
    // console.log('fact data2 ',data2);
	}
  }
});
