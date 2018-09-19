"use strict";

const
    gulp = require('gulp'),
    scss = require('gulp-sass'),
    del = require('del'),
    sourcemaps = require('gulp-sourcemaps'),
    bs = require('browser-sync').create(),
    gulpIf = require('gulp-if'),
    minCss = require('gulp-cssmin'),
    ap = require('gulp-autoprefixer'),
    htmlMin = require('gulp-minify-html'),
    rename = require('gulp-rename');

const production = process.env.NODE_ENV === 'production';

gulp.task('html', () => {
    return gulp.src('frontend/index.html')
        .pipe(gulpIf(production, htmlMin()))
        .pipe(gulp.dest('public'))
});

gulp.task('styles', () => {
    return gulp.src('frontend/styles/styles.scss')
        .pipe(gulpIf(!production, sourcemaps.init()))
        .pipe(scss())
        .pipe(ap({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulpIf(production, minCss()))
        .pipe(gulpIf(!production, sourcemaps.write()))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/css'));
});

gulp.task('images', () => {
    return gulp.src('frontend/img/**.*')
        .pipe(gulp.dest('public/img'));
});

gulp.task('fonts', () => {
    return gulp.src('frontend/fonts/**.*')
        .pipe(gulp.dest('public/fonts'));
});

gulp.task('clean', () => {
    return del('public');
});

gulp.task('serve', () => {
    bs.init({
        server: 'public'
    });
    bs.watch('public/**/*.*').on('change', bs.reload)
});

gulp.task('watch', () => {
    gulp.watch('frontend/styles/**.*', gulp.series('styles'));
    gulp.watch('frontend/img/**.*', gulp.series('images'));
    gulp.watch('frontend/index.html', gulp.series('html'));
});

gulp.task('build',gulp.series('clean',gulp.parallel('html','styles','images','fonts')));

gulp.task('develop',
    gulp.series(
        'build',
        gulp.parallel('watch', 'serve'))
);
