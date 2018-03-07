'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('dashboard').
  component('dashboard', {
    templateUrl: './dashboard/dashboard.template.html',
    controller: ['$routeParams',
      function DashboardController($routeParams) {
        var self = this;
        self.userName = $routeParams.userName
      }
    ]
  });
