var gulp = require('gulp');
var config = require('../config').watch;

gulp.task('build', ['scripts', 'styles', 'html', 'img', 'fonts', 'assets', 'files']);
