<?php

/*
 * This function is going to return true only once
 */
function griddle_is_first_post() {

	global $wp_query;
	global $paged;

	return ( 0 == $wp_query->current_post && 0 == $paged );
}


function griddle_get_dynamic_thumbnail_size() {

	if ( griddle_is_first_post() ) {
		return 'griddle-blog-large';
	}

	return 'griddle-blog-small';

}