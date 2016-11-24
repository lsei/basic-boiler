var gulp           = require('gulp');
var sass           = require('gulp-sass');
var gutil          = require('gulp-util');
var concat         = require('gulp-concat');
var uglify         = require('gulp-uglify');
var sourcemaps     = require('gulp-sourcemaps');
var livereload     = require('gulp-livereload');
var autoprefixer   = require('gulp-autoprefixer');

var webpack   = require('webpack');
var WebpackDevServer   = require('webpack-dev-server');
var webpackConfig = require("./webpack.config.js");


var paths = {
  scripts: ['assets/js/**/*'],
  styles: ['assets/style/main.scss'],
  stylesWatch: ['assets/styles/**/*'],
  
};

gulp.task('styles', function() {

  return gulp.src(paths.styles)
  	  .pipe(sourcemaps.init())
  		.pipe(concat('styles.min.css'))
  		.pipe(sass().on('error', sass.logError))
  		.pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('dist/css'))

});

gulp.task('watch', function() {

	gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.stylesWatch, ['styles']);

});

gulp.task('webpack', function(callback) {

  var myDevConfig = Object.create(webpackConfig);
  myDevConfig.devtool = "sourcemap";
  myDevConfig.debug = true;

  var devCompiler = webpack(myDevConfig);

  devCompiler.run(function(err, stats) {

    if(err) throw new gutil.PluginError("webpack:build-dev", err);

    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));

    callback();
  });

});


gulp.task("webpack-dev-server", function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "eval";
  myConfig.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    publicPath: "/" + myConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});

gulp.task('default', ['styles']);

function errorHandler (error) {

  console.log(error.toString());
  this.emit('end');

}

