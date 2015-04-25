(function() {
  'use strict';

  var app = angular.module('app', [
    'ui.router'
  ]);

  app.config(function($stateProvider, $urlRouterProvider) {

    // Default route
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home',{
        url: '/home',
        views: {
          'appView': {
            templateUrl: 'src/home/controllers/home.html'
          }
        }
      })
  });

})();
