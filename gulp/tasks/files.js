var gulp = require('gulp');
var config = require('../config').files;

gulp.task('files', function () {
    config.forEach(function (config) {
        return gulp.src(config.src)
            .pipe(gulp.dest(config.dest));
    })
});
