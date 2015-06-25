module.exports = function ( config ) {

  'use strict';

  config.set ( {

    basePath: '../',

    frameworks: [
      'chai',
      'mocha'
    ],

    files: [

      // Library Test
      'lib/angular/angular.js',
      'lib/angular/angular-mocks.js',
      'lib/angular-ui-router/angular-ui-router.js',
      'lib/ocLazyLoad/ocLazyLoad.js',

      'src/**/*{.spec.js,.js,}'
    ],

    reporters: [ 'mocha' ],

    port: 9876,
    colors: true,

    logLevel: config.LOG_INFO,

    browsers: [ 'PhantomJS' ]

  } );
};