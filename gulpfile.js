const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const del = require('del');
const autoprefixer = require('autoprefixewr');
const postcss = require('gulp-postcss');

gulp.task('scss', () => {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename({
        suffix: '.min',
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task("clean", () => {
    return del('css')
})

gulp.watch('./scss/**/*.scss', gulp.series('scss'));
gulp.task('start', gulp.series('clean', 'scss'));