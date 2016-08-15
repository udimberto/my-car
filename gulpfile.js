'use strict';

const gulp   = require('gulp'),
      reqDir = require('require-dir');

// Require gulp tasks
const dir = reqDir('./tasks');


/**
 * Default task
 */
gulp.task('default', [
    'ng-template',
    'serve',
    'js-hint',
    'sass'
], () => {
    gulp.watch([dir.paths.js.src], ['js-hint']);
    gulp.watch(dir.paths.html, ['ng-template']);
    gulp.watch(dir.paths.sassAll, ['sass']);
});


/**
 * Test task
 */
gulp.task('test', [
    'js-hint',
    'code-style'
]);


/**
 * Build task
 */
gulp.task('build', [
    'ng-template',
    'sass',
    'copy',
    'image-min',
    'svg-min',
    'usemin'
]);
