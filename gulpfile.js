'use strict';

// Reguire the following

var gulp = require('gulp'),
    jshint = require('gulp-jshint');

// Lint *.js files
gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
});

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['lint']);
});

gulp.task('default', ['lint', 'watch']);
