'use strict';

var gulp = require('gulp');
var webpack = require('webpack-stream');
var _ = require('lodash');

// ソースの更新を検知してwebpackを実行する
gulp.task('default', ['watch:client', 'watch:server'], function() {
});

// webpackを実行する
gulp.task('update', ['update:client', 'update:server'], function() {
});

gulp.task('update:client', function() {
  return gulp.src('app/client.js')
    .pipe(webpack(require('./webpack-client.config.js')))
    .pipe(gulp.dest('public/js/'))
});

gulp.task('update:server', function() {
  return gulp.src('app/server.js')
    .pipe(webpack(require('./webpack-server.config.js')))
    .pipe(gulp.dest('dist/'))
});

gulp.task('watch:client', function() {
  return gulp.src('app/client.js')
    .pipe(webpack(_.merge(require('./webpack-client.config.js'), {watch: true})))
    .pipe(gulp.dest('public/js/'))
});

gulp.task('watch:server', function() {
  return gulp.src('app/server.js')
    .pipe(webpack(_.merge(require('./webpack-server.config.js'), {watch: true})))
    .pipe(gulp.dest('dist/'))
});

