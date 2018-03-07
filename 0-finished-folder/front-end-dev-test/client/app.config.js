'use strict';

angular.
  module('app').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/login', {
          template: '<login></login>'
        }).
        when('/dashboard/:userName', {
          template: '<dashboard></dashboard>'
        }).
        otherwise('/login');
    }
  ]);
