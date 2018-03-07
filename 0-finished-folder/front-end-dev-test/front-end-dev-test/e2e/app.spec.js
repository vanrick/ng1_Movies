describe('Front End Dev Test', function() {
  it('should greet the candidate', function() {
    browser.get('http://localhost:3000');
    expect(element(by.css('h1')).getText()).toEqual('Hello Front End Dev');
    expect(element(by.css('span')).getText()).toEqual('D3.js is wired up');
  });
});