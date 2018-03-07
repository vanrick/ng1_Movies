describe('App', function() {
  var httpBackend;

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject(function($httpBackend) {
    httpBackend = $httpBackend;
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should demonstrate how to interact with the backend API', function() {
    httpBackend.expectGET('/api/sample').respond([]);
    httpBackend.expectPOST('/api/test').respond();
    httpBackend.flush();
  });
});
