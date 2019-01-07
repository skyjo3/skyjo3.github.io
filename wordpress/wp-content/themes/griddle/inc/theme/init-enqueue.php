<?php


/**
 * Enqueue scripts and styles.
 */
function griddle_scripts() {

	$version = wp_get_theme()->get( 'Version' );

	/**
	 * === Style ===
	 */

	// Enqueue Google Fonts:
	$google_fonts = array( 'Open Sans:300,400,400i,700,700i', 'Montserrat:400,500,600,700' );
	wp_enqueue_style( 'griddle-fonts', griddle_fonts_url( $google_fonts ) );

	// Theme Styles
	wp_enqueue_style( 'griddle-style', get_template_directory_uri() . '/build/theme-style.css', $version );


	/**
	 * === Script ===
	 */
	// Main theme javascript file
	wp_enqueue_script( 'griddle-script', get_template_directory_uri() . '/build/theme-script.js', array( 'jquery' ), $version, true );


	wp_enqueue_script(
		'griddle-skip-link-focus-fix',
		get_template_directory_uri() . '/build/skip-link-focus-fix.js',
		array(),
		'20151215',
		true
	);

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

}

add_action( 'wp_enqueue_scripts', 'griddle_scripts' );