var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('frontstart', function() {
  
  //Copy the html5-boilerplate dist to app/ folder
  gulp.src('./node_modules/html5-boilerplate/dist/**/*.*')
  .pipe(gulp.dest('./app/'));

  


});