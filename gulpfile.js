'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');
var eslint = require('gulp-eslint');


// File's paths
var paths = {
  mainSCSS: 'src/sass/main.scss',
  allSCSS: 'src/**/*.scss',
  allJavaScript: 'src/**/*.js',
}


// Compile SASS files.
// Docs: https://github.com/dlmanning/gulp-sass#basic-usage
gulp.task('sass', function() {
  return gulp.src(paths.mainSCSS)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/sass'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./src/sass'))
});


// Lint JavaScript files.
// docs: https://github.com/adametry/gulp-eslint#usage
gulp.task('eslint', function() {
  return gulp.src(paths.allJavaScript)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});


// Run sass and webserver tasks and watch for changes in .scss files.
// Docs: https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglob-opts-cb
gulp.task('watch', ['sass', 'eslint','webserver'], function() {
  gulp.watch(paths.allSCSS, ['sass']);
  gulp.watch(paths.allJavaScript, ['eslint']);
});


// Serve application locally
// Docs: https://github.com/schickling/gulp-webserver#usage
gulp.task('webserver', function() {
  return gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true,
    }));
});
