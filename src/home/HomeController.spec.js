describe ( 'HomeController', function () {

  'use strict';

  var $rootScope,
      $scope,
      controller;

  beforeEach ( function () {

    module ( 'app' );

    inject ( [
      '$controller',
      '$injector',

      function ( $c, $i ) {

        $rootScope = $i.get ( '$rootScope' );

        $scope = $rootScope.$new ();

        controller = $c ( 'HomeController', {
          $rootScope: $rootScope,
          $scope: $scope
        } );
      }

    ] );

  } );

  it ( 'should have a HomeController controller', function () {
    controller.should.not.equal ( undefined );
  } );

  it('should say hello world', function() {
    $scope.helloWorld.should.equal('Hello world!');
  });

} );