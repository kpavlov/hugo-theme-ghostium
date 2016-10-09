'use strict'

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config').scripts;

function process(cfg) {
    return gulp.src(cfg.src)
        // .pipe(sourcemaps.init())
        .pipe(concat(cfg.fileName, {newLine: ';'}))
        .pipe(gulp.dest(config.dest))
        .pipe(uglify())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest));
}

gulp.task('scripts', function () {
    config.files.forEach(process);
});


