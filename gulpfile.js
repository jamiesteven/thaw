'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var nib = require('nib');

// Worker functions ----------------------------------------------------------------------------------------

// javascript -- Concatenate, uglify and compress JavaScript libraries and app scripts
gulp.task('javascript', function() {
    gulp.src([
        'app/*.js',
        'app/controllers/*.js',
    ])
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});

// jade -- Compile views into HTML files
gulp.task('jade', function() {
    // Compile views
    gulp.src('app/index.jade')
        .pipe(jade())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./public'));

    gulp.src('app/views/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./public/html'));
});

// stylus -- Concatenate, compile and compress stylus to single css file
gulp.task('stylus', function () {
    gulp.src('app/style/*.styl')
        .pipe(concat('app.styl'))
        .pipe(stylus({
            compress: true,
            'include css': true,
            use: nib()
        }))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('./public/css'));
});

// watch -- watch for changes, re-compile or restart server
gulp.task('watch', function() {
    // Watch JavaScript files
    gulp.watch(['app/*.js', 'app/controllers/*.js'], ['javascript']);

    // Watch Jade files
    gulp.watch(['app/*.jade', 'app/views/*.jade'], ['jade']);

    // Watch Stylus files
    gulp.watch('app/style/*.styl', ['stylus']);
});

// Runner functions ----------------------------------------------------------------------------------------

// default -- run Lint, JavaScript and Stylus processes
gulp.task('default', ['compile', 'watch']);

// compile -- run JavaScript and Stylus processes
gulp.task('compile', ['javascript', 'jade', 'stylus']);
