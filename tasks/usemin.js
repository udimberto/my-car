'use strict';

const gulp     = require('gulp'),
      paths    = require('./paths'),
      usemin   = require('gulp-usemin'),
      uglify   = require('gulp-uglify'),
      annotate = require('gulp-ng-annotate'),
      nano     = require('gulp-cssnano');


/**
 * Minify js and css files
 */
gulp.task('usemin', ['ng-template'], () => {
    return gulp.src('./app/*.html')
        .pipe(usemin({
            css: [nano({ safe: true })],
            cssShowcase: [nano({ safe: true })],
            js: [annotate, uglify],
        }))
        .pipe(gulp.dest(paths.dist));
});

