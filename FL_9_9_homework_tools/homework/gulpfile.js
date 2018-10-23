const gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    inject = require('gulp-inject'),
    runSequence = require('run-sequence'),
    del = require('del'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint')

gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({style: 'expanded'}))
        .on('error', sass.logError)
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
});

gulp.task('prodSASS', function () {
    gulp.src('src/sass/*.scss')
    .pipe(sass({style: 'expanded'}))
        .on('error', sass.logError)
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
})

gulp.task('js', function() {
    gulp.src(['node_modules/moment/moment.js', 'src/js/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload())
});

gulp.task('prodJS', function () {
    gulp.src(['node_modules/moment/moment.js', 'src/js/*.js'])
    .pipe(concat('app.min.js'))
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

gulp.task('html', function() {
    gulp.src('src/app.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
  });

gulp.task('inject', function () {
    let sources = gulp.src(['dist/js/*.js','dist/css/*.css'], {read: false});

    gulp.src('dist/index.html')
    .pipe(inject(sources))
        .pipe(gulp.dest('dist'));
})

gulp.task('del', function () {
    del.sync(['dist/**', '!dist']);
})

gulp.task('watch', function() {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/**/*.css', ['sass']);
    gulp.watch('src/**/*.js', ['js']);
});

gulp.task('connect', function() {
    connect.server({
      root: 'dist',
      port: 8080,
      livereload: true
    })
});

gulp.task('default', function () {
    runSequence('build', 'connect', 'watch');
  });

gulp.task('build', function () {
runSequence('del', ['js', 'sass'], 'html', 'inject');
});

gulp.task('build-prod', function () {
    runSequence('del', ['prodJS', 'prodSASS'], 'html', 'inject');
});

gulp.task('JScheck', function() {
    gulp.src('src/js/*.js')
        .pipe(jshint())
});