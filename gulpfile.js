//引入Gulp模块
var gulp = require('gulp');
// 引入依赖模块
var sass = require('gulp-sass');
var rename = require('gulp-rename');
// 编译Sass
gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});
// 默认任务
gulp.task('default', function(){
    gulp.run('sass');
    // 监听文件变化
    gulp.watch(['./scss/*.scss'], function(){
        gulp.run('sass', 'scripts');
    });
});