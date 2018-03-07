module.exports = function(config) {
  config.set({
    port: 9876,
    autoWatch: true,
    singleRun: false,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    reporters: ['progress'],
    frameworks: ['jasmine'],
    files: [
      './node_modules/d3/build/d3.js',
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './client/**/*.js',
      './server/**/*.spec.js'
    ]
  });
};
