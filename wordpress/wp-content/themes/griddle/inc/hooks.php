<?php

function griddle_is_blog_archive() {

	return (
		'post' == get_post_type()
		&&
		( is_home() || is_author() || is_category() || is_tag() || is_date() )
	);
}

function griddle_has_sidebar() {

	return (
		is_active_sidebar( 'sidebar' )
		&& ! is_singular()
	);

}


/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 *
 * @return array
 */
// Quite likely you'll want to uncomment this:
function griddle_body_classes( $classes ) {

	if ( griddle_has_sidebar() ) {
		$classes[] = 'has-sidebar';
	}

	if ( griddle_is_blog_archive() ) {
		$classes[] = 'full-width';
		$classes[] = 'layout--grid';
	}

	if ( is_singular() ) {
		$classes[] = 'singular';
	}

	return $classes;
}

add_filter( 'body_class', 'griddle_body_classes' );


/**
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
function griddle_pingback_header() {

	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}

add_action( 'wp_head', 'griddle_pingback_header' );


/**
 * Customize ellipsis at end of excerpts.
 */
function griddle_excerpt_more( $more ) {

	if( is_admin() ) {
		return $more;
	}

	return "...";
}

add_filter( 'excerpt_more', 'griddle_excerpt_more' );


/* Change Excerpt length */
function griddle_adjust_excerpt_length( $length ) {
	if( is_admin() ) {
		return $length;
	}
	return 21;
}

add_filter( 'excerpt_length', 'griddle_adjust_excerpt_length' );