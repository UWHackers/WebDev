// Module definieren
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

// Styles task
gulp.task('styles', function () {
  gulp.src('sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('styles/'));
});

// Script task
gulp.task('scripts', function() {
  gulp.src('scripts-orig/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('scripts/'));
});

// Images task
gulp.task('images', function () {
  gulp.src('images-orig/*.{png,gif,jpg}')
    .pipe(imagemin())
    .pipe(gulp.dest('images/'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch('sass/**.scss', ['styles']);
  gulp.watch('scripts-orig/**.js', ['scripts']);
  gulp.watch('images-orig/**', ['images']);
});

// Gulp default task
gulp.task('default', ['styles', 'scripts', 'images', 'watch']);