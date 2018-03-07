var app = angular.module('filters', [])

app.controller('filtering', function($scope){
  $scope.greet = 'hiMyNameIsRiz'
})

app.filter('kebab', function () {
  return function (input) {
    return input.replace(/([a-z])([A‌-Z])/g, '$1 $2');
  };
});
