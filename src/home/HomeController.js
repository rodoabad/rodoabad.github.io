(function () {

  'use strict';

  function HomeController ( $scope ) {
    $scope.helloWorld = 'Hello world!';
  }

  angular.module ( 'app' )
    .controller ( 'HomeController', [
    '$scope', HomeController
  ] );
}) ();
