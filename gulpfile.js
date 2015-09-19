'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    /* html */
    jade = require('gulp-jade'),
    /* css */
    stylus  = require('gulp-stylus'),
    minifycss = require('gulp-minify-css'),
    /* js */
    coffee = require('gulp-coffee'),
    vendor = require('gulp-concat-vendor'),
    minifyjs = require('gulp-uglify'),
    es = require('event-stream'),
    /* server */
    livereload  = require('gulp-livereload'),
    server = livereload(),
    nodemon = require('gulp-nodemon')

/* build */
var build = {
  htmls: ['build/public/**/*.jade', '!build/public/app/directives/*.jade'],
  directives: ['build/public/app/directives/*.jade'],
  styles: ['build/public/**/*.styl'],
  javascript: ['build/public/**/*.coffee'],
  server: ['build/server/**/*.coffee']
}

gulp.task('htmls', function() {
  gulp.src(build.htmls)
  .pipe(jade({
      pretty: true
    }))
  .pipe(gulp.dest('public/'));
});

gulp.task('directives', function() {
  gulp.src(build.directives)
  .pipe(jade({
      pretty: true
    }))
  .pipe(gulp.dest('public/views/directives/'));
});

gulp.task('styles', function(){
  var stylusStream = gulp.src(build.styles)
    .pipe(stylus());

  return es.merge(stylusStream, gulp.src('build/public/assets/css/*.css'))
    .pipe(concat('styles.css'))
    .pipe(minifycss({keepBreaks:true}))
    .pipe(gulp.dest('public/assets/css/'));
});

gulp.task('vendor', function() {  
  gulp.src(['public/vendor/*'])
    .pipe(vendor('vendor.js'))
    /*.pipe(minifyjs())*/
    .pipe(gulp.dest('public/assets/js/'))
});

gulp.task('javascript', function() {
  gulp.src(build.javascript)
    .pipe(coffee({bare: true}))
    .pipe(concat('app.js'))
    /*.pipe(minifyjs())*/
    .pipe(gulp.dest('public/assets/js'));
});

gulp.task('server', function() {
  gulp.src(build.server)
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('server/'));
});

gulp.task('assets', ['htmls', 'directives', 'styles', 'vendor', 'javascript', 'server']);

/* server */
var paths = {
  client: [
    'public/**/*.html',
    'public/**/*.js',
    'public/**/*.css'
  ],
  server: {
    index: 'server.js'
  }
};

var nodemonConfig = {
  script: paths.server.index,
  ignore: [],
  env: {}
};

gulp.task('nodemon', ['livereload'], function() {
  return nodemon(nodemonConfig);
});

/* livereload */
gulp.task('livereload', function() {
  gulp.watch(build.htmls, ['htmls']);
  gulp.watch(build.directives, ['directives']);
  gulp.watch(build.styles, ['styles']);
  gulp.watch(build.javascript, ['javascript']);
  gulp.watch(build.server, ['server']);
  gulp.watch(paths.client, function(e) {
    server.changed(e.path);
  });
});

gulp.task('default', ['assets', 'nodemon', 'livereload']);