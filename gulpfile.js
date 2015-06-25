(function () {

  'use strict';

  // Require the following
  var gulp = require ( 'gulp' ),
    jshint = require ( 'gulp-jshint' ),
    connect = require ( 'gulp-connect' );

  // Paths
  var dirs = {
    js: [
      'gulpfile.js',
      'src/**/*.js',
      'tests/**/*.js'
    ],
    html: [
      'index.html',
      'src/**/*.html'
    ]
  };

  // Start preview server
  gulp.task ( 'preview-server', function () {
    connect.server ( {
      livereload: true
    } );
  } );

  // Lint *.js files
  gulp.task ( 'lint', function () {
    return gulp.src ( dirs.js )
      .pipe ( jshint () )
      .pipe ( jshint.reporter ( 'jshint-stylish' ) )
      .pipe ( jshint.reporter ( 'fail' ) )
      .pipe ( connect.reload () );
  } );

  // Enable live reload on *.html files
  gulp.task ( 'html', function () {
    return gulp.src ( dirs.html )
      .pipe ( connect.reload () );
  } );

  // Watch files for changes
  gulp.task ( 'watch', function () {
    gulp.watch ( dirs.js, [ 'lint' ] );
    gulp.watch ( [ dirs.js, dirs.html ], [ 'html' ] );
  } );

  gulp.task ( 'local', [ 'preview-server', 'lint', 'html', 'watch' ] );
  gulp.task ( 'github', [ 'lint', 'html' ] );

  gulp.task ( 'default', [ 'local' ] );

}) ();
