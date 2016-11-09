var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload');

gulp.task('style', function () {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(livereload())
})

gulp.task('watch', function () {
    gulp.watch('less/*.less', ['style'])
})

gulp.task('default', function () {
    gulp.start('style', 'watch');
})