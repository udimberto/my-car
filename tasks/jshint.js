'use strict';

const gulp    = require('gulp'),
      paths   = require('./paths'),
      jshint  = require('gulp-jshint'),
      stylish = require('jshint-stylish'),
      SRC     = [paths.js.src, paths.js.tasks, '!./app/scripts/views.js'];


/**
 * JSHint task
 */
gulp.task('js-hint', () => {
    return gulp.src(SRC)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

