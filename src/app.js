(function() {
  'use strict';

  var app = angular.module('app', [
    'ui.router'
  ]);

  app.config([ '$stateProvider', '$urlRouterProvider'], function($stateProvider, $urlRouterProvider) {

    // Default route
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'src/home/controllers/home.html',
        controller: function($scope) {
          $scope.items = {'a', 'b', 'c'};
        }
      })
  });

})();
