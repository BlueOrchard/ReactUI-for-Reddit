var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('sass', function() {
    gulp.src('./dev/assets/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['sass', 'react-build'], function() {
    gulp.watch('./dev/assets/*.scss', ['sass']);
    gulp.watch('./dev/app.jsx', ['react-build']);
});

gulp.task('react-build', function () {
    return browserify({entries: './dev/app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/'));
});