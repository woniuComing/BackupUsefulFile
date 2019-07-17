var gulp = require('gulp'),
    cleancss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

//压缩css
gulp.task('cleancss', function() {
    return gulp.src(['ts_css/base.css'])
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleancss())
        .pipe(gulp.dest('./ts_pro_css'));
});
//压缩js
gulp.task("minifyjs", function() {
    return gulp.src(['./ts_js/base.js', './ts_js/index.js', './ts_js/popup.js', './ts_js/selflaunch.js', './ts_js/rubbish.js', './ts_js/cpu.js', './ts_js/momery.js', './ts_js/boottime.js', './ts_js/main.js'])
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('ts_pro_js'));
});
//默认命令
gulp.task('default', function() {
    gulp.start('cleancss', 'minifyjs')
})