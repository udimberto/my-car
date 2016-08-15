'use strict';

const gulp    = require('gulp'),
      paths   = require('./paths'),
      htmlmin = require('gulp-htmlmin'),
      ngtemplate = require('gulp-ng-template'),
      DEST    = './app/scripts/';


/**
 * Compile HTML templates with $templateCache task
 */
gulp.task('ng-template', () => {
    return gulp.src(paths.html)
        .pipe(htmlmin({
            collapseWhitespace       : true,
            conservativeCollapse     : true,
            collapseBooleanAttributes: true,
            removeCommentsFromCDATA  : true,
            removeOptionalTags       : true
        }))
        .pipe(ngtemplate({
            moduleName: 'my-car',
            standalone: false,
            prefix    : 'app/templates/',
            filePath  : 'views.js'
        }))
        .pipe(gulp.dest(DEST));
});
