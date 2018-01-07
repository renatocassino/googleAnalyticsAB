var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var fs = require('fs');

var functionError = function(err) {
  if(err) console.log('ERROR: ' + err);
};

gulp.task('default', function (cb) {
  pump(
    [
      gulp.src('./index.js'),
      uglify(),
      gulp.dest('dist'),
    ],
    cb
  );
});
