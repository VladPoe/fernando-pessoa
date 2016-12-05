var gulp = require('gulp'),
    config = require('../config.json');

gulp.task('audio', function(){

    return gulp.src(config.src + '/audio/**/*')
        .pipe(gulp.dest(config.dest + '/audio'));
});
