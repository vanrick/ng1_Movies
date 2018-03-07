var app = angular.module('app', []);

app.run(function($http) {
  $http.get('/api/sample').then(function(res) {
    console.log('Sample data from API: ', res.data);
  });

  $http.post('/api/test', {test: 'Body parsing works.'});

  d3.select('body').append('span').text('D3.js is wired up');
});


