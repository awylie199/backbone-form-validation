'use strict';

// Gulp-Mocha ES6
require('babel-core/register');

// Utility
let gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    source = require('vinyl-source-stream'),
    argv = require('yargs').argv,
    rename = require('gulp-rename'),
    buffer = require('vinyl-buffer');

// JS
let browserify = require('browserify'),
    esLint = require('gulp-eslint'),
    uglify = require('gulp-uglify');

let config = require('./config.json');

// JS
gulp.task('esLint', function() {

    return gulp.src([
            `${config.source.scripts}**/*.js`,
            `${config.tests.js}**/*.js`,
            `!${config.tests.js}tmp/client-tests-build.js`,
            `${config.source.backstop}**/*.js`
        ])
        .pipe(esLint())
        .pipe(esLint.format())
        .pipe(esLint.failAfterError());

});

gulp.task('js', ['esLint'], function() {

    return browserify(`${config.source.scripts}main.js`)
        .transform('babelify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulpIf(argv.production, uglify()))
        .pipe(gulpIf(argv.production, rename({
            suffix: '.min'
        })))
        .pipe(gulp.dest(config.destination.scripts));

});

// Commands
gulp.task('default', [
    'js'
]);
