var gulp = require('gulp');
var config = require('../config').assets;

gulp.task('img:prod', ['clean'], function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});


gulp.task('assets', function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});
