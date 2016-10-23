var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-clean-css');
var config = require('../config.js');

gulp.task('styles', function () {
    gulp.src(config.sass.src)
        .pipe(sass(config.sass.settings))
        .pipe(gulp.dest(config.sass.dest));

    gulp.src(config.css.src)
        .pipe(concat(config.css.fileName))
        .pipe(minify())
        .pipe(gulp.dest(config.css.dest))
});