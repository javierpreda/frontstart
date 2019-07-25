var gulp = require('gulp');
var file = require('gulp-file');
const shell = require('gulp-shell');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('frontstart', function() {

  //Copy the html5-boilerplate dist to app/ folder
  gulp.src('./node_modules/html5-boilerplate/dist/**/*.*')
  .pipe(gulp.dest('./app/'));

  //then we will copy bootstrap scss core file to our own scss folder
  gulp.start('copybootstrap');

});

gulp.task('copybootstrap', function() {

  //Copy the html5-boilerplate dist to app/ folder
  gulp.src('./node_modules/bootstrap/scss/**/*.*')
  .pipe(gulp.dest('./app/scss/bootstrap'));

  gulp.start('createfile');
  //then we will copy bootstrap scss core file to our own scss folder

});

gulp.task('createfile', () => {
  return gulp
    .src('./app/scss/', { read: false })
    .pipe(shell(['touch main.scss']));
})
