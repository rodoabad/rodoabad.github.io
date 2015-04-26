(function() {
  'use strict';

  function HomeController($rootScope, $scope) {
    $scope.helloWorld = 'Hello world!';
  }

  angular.module('app')
    .controller('HomeController', [
      '$rootScope', '$scope', HomeController
    ]);
})();
