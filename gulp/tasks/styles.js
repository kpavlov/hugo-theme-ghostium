var gulp = require('gulp');
var sass = require('gulp-sass');
var fontAwesome = require('node-font-awesome');
var config = require('../config.js').sass;

gulp.task('styles', function() {
    gulp.src(config.src)
        .pipe(sass(config.settings))
        .pipe(gulp.dest(config.dest));
});

// var gulp = require('gulp');
// var less = require('gulp-less');
// var connect = require('gulp-connect');
// var concat = require('gulp-concat');
// var config = require('../config.js').less;
// var sourcemaps = require('gulp-sourcemaps');
//
// gulp.task('styles', function() {
//   gulp.src(config.src)
//     .pipe(sourcemaps.init())
//     .pipe(less(config.settings))
//     .pipe(concat("main.css"))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(config.dest))
//     .pipe(connect.reload());
// });
//
//
// gulp.task('styles:prod', ['clean'], function() {
//     gulp.src(config.src)
//         .pipe(less(config.settings))
//         .pipe(concat("main.css"))
//         .pipe(gulp.dest(config.dest));
// });
