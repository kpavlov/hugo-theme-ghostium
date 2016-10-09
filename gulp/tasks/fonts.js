var gulp = require('gulp');
var config = require('../config').fonts;

//
gulp.task('fonts:prod', ['clean'], function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});


gulp.task('fonts', function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});
