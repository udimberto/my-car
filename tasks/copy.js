'use strict';

const gulp  = require('gulp'),
      paths = require('./paths'),
      SRC   = [
        './app/assets/site.css',
        './app/assets/fonts/*',
        './app/bower_components/**/*.html'
      ];

/**
 * Copy main files to dist folder
 */
gulp.task('copy', ['usemin', 'clean:dist'], () => {
    const stream = gulp.src(SRC, { base: './app/' })
        .pipe(gulp.dest(paths.dist));

    return stream;
});

