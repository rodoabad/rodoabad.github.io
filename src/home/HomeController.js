(function () {

  'use strict';

  function HomeController () {

    angular.extend(this, {
      helloWorld: 'Hello world!'
    });
  }

  angular.module ( 'app' )
    .controller ( 'HomeController', [
    HomeController
  ] );
}) ();
