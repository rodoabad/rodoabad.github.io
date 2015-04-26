(function() {
  'use strict';

  // Reguire the following

  var gulp = require('gulp'),
      jshint = require('gulp-jshint'),
      connect = require('gulp-connect');

  var dirs = {
    js: [
      'gulpfile.js',
      'src/**/*.js'
    ]
  };

  // Lint *.js files
  gulp.task('lint', function() {
    return gulp.src(dirs.js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
  });

  // Start preview server
  gulp.task('preview-server', function() {
    connect.server({
      livereload: true
    });
  });

  // Watch files for changes
  gulp.task('watch', function() {
    gulp.watch(dirs.js, ['lint']);
  });

  gulp.task('default', ['lint', 'watch']);

})();
