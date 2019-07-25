var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

var exec = require('child_process').exec;

gulp.task('init', function() {

  //Copy the html5-boilerplate dist to app/ folder
  console.log("Copying html5 boilerplate to our app/ folder...");
  gulp.src('./node_modules/html5-boilerplate/dist/**/*.*')
  .pipe(gulp.dest('./app/'));

  //then we will copy bootstrap scss core file to our own scss folder
  console.log("Copying bootstrap core scss to our app/scss/bootstrap folder...");
  return gulp.src('./node_modules/bootstrap/scss/**/*.*').pipe(gulp.dest('./app/scss/bootstrap'));

});

gulp.task('createmain', function (cb) {
  console.log("Creating main.scss file as starting point of frontend developing...");
  return exec('touch app/scss/main.scss', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
   return gulp.src('app/scss/*.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('app/css/'));
});

gulp.task('livereload', function (){
  return gulp.src('app/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function (cb) {
  gulp.watch('app/scss/**/*.scss').on('change', gulp.series('sass', 'livereload'));
  gulp.watch('app/**/*').on('change', gulp.series('livereload'));
  console.log("ejecutando watch...");
  cb();
});

gulp.task('connect', function(){
   connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('frontstart', gulp.series('init', 'createmain'));

gulp.task('happyfrontending', gulp.parallel('connect', 'watch'));


