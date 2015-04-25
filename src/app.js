(function() {
  'use strict';

  angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

    // Default route
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'src/home/controllers/home.html'
      });
  });

  //angular.bootstrap(document, ['app']);

})();
