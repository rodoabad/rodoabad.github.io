(function() {
  'use strict';

  angular
    .module('app', ['ui.router', 'oc.lazyLoad'])
    .config(function($stateProvider, $urlRouterProvider) {

    // Default route
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'src/home/home.html',
        // Resolve the following before instantiating a view.
        // https://github.com/angular-ui/ui-router/wiki
        resolve: {
          // 'controllers' name is meaningless. It could be anything you want.
          controllers: ['$ocLazyLoad', function($lazy) {
            return $lazy.load({
              name: 'HomeController',
              files: [
                'src/home/HomeController.js'
              ]
            });
          }]
        }
      });
  });

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

})();
