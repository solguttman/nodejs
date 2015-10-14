//Gulp stuff
var gulp = require('gulp');
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');

// Default task
gulp.task('default',['sass']);

//Build Sass
gulp.task('sass',function(){
	gulp
		.src('./stylesheets/main.scss')
		.pipe(sass())
		.pipe(prefixer())
		.pipe(gulp.dest('./public'));
});