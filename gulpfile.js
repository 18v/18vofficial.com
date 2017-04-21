const gulp = require('gulp');
const	connect = require('gulp-connect');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('views', () => {
	return gulp.src('src/pug/*.pug')
  .pipe(pug({}))
  .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
	return gulp.src('src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', () => {
	return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', () => {
	return gulp.src('src/assets/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', () => {
	return gulp.src('src/assets/images/*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('connect', () => {
	connect.server();
});

gulp.task('default', ['views', 'sass', 'js', 'fonts', 'images']);
