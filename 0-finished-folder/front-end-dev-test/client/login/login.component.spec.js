'use strict';

describe('login', function() {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(module('login'));

  // Test the controller
  describe('LoginController', function() {
    var ctrl;

    beforeEach(inject(function($componentController) {

      ctrl = $componentController('login');
    }));

    it('should be able to login', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.userName).toEqual("");

    });

  });

});
