'use strict';

const gulp   = require('gulp'),
      paths  = require('./paths'),
      svgmin = require('gulp-svgmin');


/**
 * Image minification task
 */
gulp.task('svg-min', () => {
    return gulp.src(paths.svg, { base: './app/' })
        .pipe(svgmin())
        .pipe(gulp.dest(paths.dist));
});

