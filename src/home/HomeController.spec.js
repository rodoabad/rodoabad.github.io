describe ( 'HomeController', function () {

  'use strict';

  var $rootScope,
    $scope,
    ctrl;

  beforeEach ( function () {

    module ( 'app' );

    inject ( [
      '$controller',
      '$injector',

      function ( $c, $i ) {

        $rootScope = $i.get ( '$rootScope' );

        $scope = $rootScope.$new ();

        ctrl = $c ( 'HomeController', {
          $rootScope: $rootScope,
          $scope: $scope
        } );
      }

    ] );

  } );

  it ( 'should have a HomeController controller', function () {
    ctrl.should.not.equal ( undefined );
  } );

  it ( 'should say hello world', function () {
    ctrl.helloWorld.should.equal ( 'Hello world!' );
  } );

} );