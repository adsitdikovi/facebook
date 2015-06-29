var gulp = require('gulp'),
	newer = require('gulp-newer'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	pkg = require('./package.json');
	
	

	
var
source = 'source/',
dest = 'build/',
images = {
	in: source + 'images/*.*',
	out: dest + 'images/'
};

var
devBuild = ((process.env.Node_Env || 'development')
	.trim().toLowerCase() != 'production'),

gulp.task('clean', function(){

	del([

		dest + '*'

		]);
});

gulp.task('images', function () {
    return gulp.src(images.in)
   		.pipe(newer(images.out))
        .pipe(imagemin())
        .pipe(gulp.dest(images.out));

        
});





gulp.task('default', ['images'], function(){

gulp.watch(images.in, ['images']);

});
