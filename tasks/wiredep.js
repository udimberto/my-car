'use strict';

const gulp    = require('gulp'),
      wiredep = require('wiredep').stream,
      SRC     = './app/index.html';


/**
 * Wiredep task
 */
gulp.task('wiredep', function () {
  gulp.src(SRC)
    .pipe(wiredep());
});

