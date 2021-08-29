const { src, watch, dest, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))


function buildSass() {
	return src('scss/*.scss')
	.pipe(sass())
	.pipe(dest('css'))
} 

function watchSass() {
	 watch(['scss/*.scss'], buildSass)
}

exports.default = series(buildSass, watchSass)