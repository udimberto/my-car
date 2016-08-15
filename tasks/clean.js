'use strict';

const gulp = require('gulp'),
      del  = require('del'),
      SRC  = './dist/**';


/**
 * Delete dist folder
 */
gulp.task('clean:dist', () => {
    return del.sync(SRC, { force: true });
});
