var gulp = require('gulp');
var config = require('../config').html;

gulp.task('html:prod', ['clean'], function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});


gulp.task('html', function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});
