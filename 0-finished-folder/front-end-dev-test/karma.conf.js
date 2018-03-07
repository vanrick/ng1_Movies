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
      './node_modules/angular-route/angular-route.js',
      './client/**/*.module.js',
      './client/*!(.module|.spec).js',
      './client/login/login.module.spec.js',
      './client/login/login.component.js',
      './client/login/login.component.spec.js',
      './server/**/*.spec.js'
    ]
  });
};
