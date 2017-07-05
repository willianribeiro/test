'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var templateCache = require('gulp-angular-templatecache');
var runSequence = require('run-sequence');
var del = require('del');
var htmlreplace = require('gulp-html-replace');


// File's paths.
var paths = {
  mainSCSS: 'src/sass/main.scss',
  allSCSS: 'src/**/*.scss',
  allJavaScript: 'src/**/*.js',
  allTemplates: 'src/**/*.html',
}


// Compile SASS files.
// Docs: https://github.com/dlmanning/gulp-sass#basic-usage
gulp.task('sass', function() {
  return gulp.src(paths.mainSCSS)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/sass'));
});


// Lint JavaScript files.
// Docs: https://github.com/adametry/gulp-eslint#usage
gulp.task('eslint', function() {
  return gulp.src(paths.allJavaScript)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


gulp.task('build', function() {
  return runSequence(
    'build:javascript',
    'build:templates',
    'build:concat',
    'build:vendors',
    'build:css',
    'build:index',
    'build:clean'
  );
});


// Concat and uglify all JavaScript in 2 files: app.js and app.min.js.
// Docs: https://github.com/contra/gulp-concat#usage
gulp.task('build:javascript', function() {
  return gulp.src(paths.allJavaScript)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build'));
});


// Put all HTML templates in a single JavaScript file.
// Docs: https://github.com/miickel/gulp-angular-templatecache#example
gulp.task('build:templates', function() {
  return gulp.src(paths.allTemplates)
    .pipe(templateCache('templates.js', {
      module: 'app',
      root: '/src'
    }))
    .pipe(gulp.dest('build'));
});


// Concat generated temp files ("app.js" and "templates.js") in a single "bundle.js".
// Docs:
// https://github.com/contra/gulp-concat#usage
// https://github.com/hparra/gulp-rename#usage
// https://github.com/terinjokes/gulp-uglify#usage
gulp.task('build:concat', function() {
  return gulp.src(['build/app.js', 'build/templates.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('build'))
    .pipe(rename('bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build'))
});


gulp.task('build:vendors', function() {
  return gulp.src('node_modules/angular/angular.min.js')
    .pipe(rename('vendors.min.js'))
    .pipe(gulp.dest('build'));
});


gulp.task('build:css', function() {
  return gulp.src(paths.mainSCSS)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('build'))
});


gulp.task('build:index', function() {
  return gulp.src('index.html')
    .pipe(htmlreplace({
        'css': 'styles.min.css',
        'js': ['vendors.min.js', 'bundle.min.js']
    }))
    .pipe(gulp.dest('build'));
});


gulp.task('build:clean', function() {
  return del(['build/app.js', 'build/templates.js']);
});


// Run "sass", "eslint" and "webserver" tasks and watch for changes in .scss and .js files.
// Docs: https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglob-opts-cb
gulp.task('watch', ['sass', 'eslint','webserver'], function() {
  gulp.watch(paths.allSCSS, ['sass']);
  gulp.watch(paths.allJavaScript, ['eslint']);
});


// Serve application locally.
// Docs: https://github.com/schickling/gulp-webserver#usage
gulp.task('webserver', function() {
  return gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true,
    }));
});
