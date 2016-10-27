'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const minify = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const config = require('../config.js');

gulp.task('styles', function () {
    gulp.src(config.sass.src)
        .pipe(sourcemaps.init())
        .pipe(sass(config.sass.settings))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.sass.dest));

    gulp.src(config.css.src)
        .pipe(sourcemaps.init())
        .pipe(concat(config.css.fileName))
        .pipe(minify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.css.dest))
});