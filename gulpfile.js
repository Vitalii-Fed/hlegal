const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('scss', () => {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.watch('./scss/**/*.scss', gulp.series('scss'));
gulp.task('start', gulp.series('scss'));