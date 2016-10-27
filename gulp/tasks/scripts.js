'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const config = require('../config').scripts;

function process(cfg) {
    return gulp.src(cfg.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat(cfg.fileName, {newLine: ';'}))
        .pipe(gulp.dest(config.dest))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest));
}

gulp.task('scripts', function () {
    config.files.forEach(process);
});


