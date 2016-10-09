/**
 * Created by ahineya on 8/25/16.
 */
var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config').clean;

gulp.task('clean', function() {
    return gulp.src(config.dest, {read: false})
        .pipe(clean());
});
