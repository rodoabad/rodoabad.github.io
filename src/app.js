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
        templateUrl: 'src/home/home.html'
      });
  });

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

})();
