const gulp = require('gulp');
const	connect = require('gulp-connect');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

gulp.task('views', () => {
	return gulp.src('src/pug/*.pug')
	.pipe(pug({}))
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
});

gulp.task('sass', () => {
	return gulp.src('src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('js', () => {
	return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});

gulp.task('fonts', () => {
	return gulp.src('src/assets/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
    .pipe(connect.reload());
});

gulp.task('favicon', () => {
	return gulp.src('src/assets/favicon.ico')
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
});

gulp.task('images', () => {
	return gulp.src('src/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload());
});

gulp.task('connect', () => {
	connect.server({
		root: 'dist',
		livereload: true
	});
});

gulp.task('watch', () => {
	gulp.watch(['./src/js/**/*.js'], ['js']);
	gulp.watch(['./src/pug/**/*.pug'], ['views']);
	gulp.watch(['./src/sass/**/*.sass'], ['sass']);
	gulp.watch(['./src/assets/fonts/*'], ['fonts']);
	gulp.watch(['./src/assets/images/*'], ['images']);
});

gulp.task('default', ['views', 'sass', 'js', 'fonts', 'images', 'favicon']);
gulp.task('dev', ['views', 'sass', 'js', 'fonts', 'images', 'favicon', 'connect', 'watch']);
