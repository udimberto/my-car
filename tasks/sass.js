'use strict';

const gulp  = require('gulp'),
      paths = require('./paths'),
      sass  = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      prefixer = require('gulp-autoprefixer'),
      nano  = require('gulp-cssnano'),
      DEST  = './app/assets';


/**
 * Sass compiler
 */
gulp.task('sass', () => {
    return gulp.src(paths.sass)
        .pipe(sass({
            options: {
                sassDir: './app/assets/sass',
            }
        })
        .on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(prefixer())
        .pipe(nano({ safe: true }))
        .pipe(gulp.dest(DEST));
});

