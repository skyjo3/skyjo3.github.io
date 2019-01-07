import gulp          from 'gulp'
import stylus        from 'gulp-stylus'
import autoprefixer  from 'gulp-autoprefixer'
import sourcemaps    from 'gulp-sourcemaps'
import minify        from 'gulp-clean-css'
import handle_errors from '../gulp/util/handle_errors'
import rename        from 'gulp-rename'

// Post CSS & Gridlover
import postcss from 'gulp-postcss'
import postcss_rhythm from 'postcss-gridlover'
let postcss_plugins = [
	postcss_rhythm(),
]


// Minify options
const cssmin_opts = {
	rebase             : false,
	keepSpecialComments: 0,
	advanced           : false,
	aggressiveMerging  : false,
}

export default () => {

	let task = gulp.src( `${global.config.style.source}/*.styl` )
				   .pipe( handle_errors() )

	if ( ! global.config.production ) {
		task.pipe( sourcemaps.init() )
	}
	// Build Stylus
	task = task
		.pipe( stylus() )
		.pipe( postcss( postcss_plugins ) )
		.pipe( autoprefixer() )

	// Minify CSS in production
	if ( global.config.production ) {
		task = task
			.pipe( rename( function ( path ) {
				path.basename += '-unminified'
			} ) )
			.pipe( gulp.dest( global.config.build ) )
			.pipe( rename( function ( path ) {
				path.basename = path.basename.replace( '-unminified', '' )
			} ) )
			.pipe( gulp.dest( global.config.build) )
			.pipe( minify() )

	}

	// Write sourcemaps in development
	if ( !global.config.production ) {
		task = task.pipe( sourcemaps.write() )
	}

	return task.pipe( gulp.dest( global.config.build ) )

}