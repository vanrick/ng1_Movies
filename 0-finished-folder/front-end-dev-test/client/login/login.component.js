'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('login').
  component('login', {
    templateUrl: './login/login.template.html',
    controller: [
      function LoginController() {
        var self = this;
        self.userName = ""
        function loginUser(x) {
          self.userName = x
        }
      }
    ]
  });
