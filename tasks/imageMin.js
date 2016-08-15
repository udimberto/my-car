'use strict';

const gulp     = require('gulp'),
      paths    = require('./paths'),
      imagemin = require('gulp-imagemin');


/**
 * Image minification task
 */
gulp.task('image-min', () => {
    return gulp.src(paths.images, { base: './app/' })
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest(paths.dist));
});

