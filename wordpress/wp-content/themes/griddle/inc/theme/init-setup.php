<?php
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function griddle_setup() {

	/**
	 * Make theme available for translation.
	 * @link https://codex.wordpress.org/Function_Reference/load_theme_textdomain
	 */
	load_theme_textdomain( 'griddle', get_template_directory() . '/assets/languages' );


	/**
	 * Add image sizes
	 */
	$ratio        = 16 / 9;
	$large_width  = $GLOBALS['content_width'];
	$large_height = $large_width / $ratio;
	$small_width  = $large_width / 3;
	$small_height = $small_width / $ratio;

	add_image_size( 'griddle-blog-large', $large_width, $large_height, true );
	add_image_size( 'griddle-blog-small', $small_width, $small_height, true );


	/**
	 * Register menu areas
	 */
	register_nav_menus(
		array(
			'primary' => esc_html__( 'Primary', 'griddle' ),
		)
	);

}


/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function griddle_register_sidebars() {

	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'griddle' ),
			'id'            => 'sidebar',
			'description'   => esc_html__( 'Add widgets here.', 'griddle' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}


/**
 * Add theme support for various features
 *
 * `add_theme_support`: https://developer.wordpress.org/reference/functions/add_theme_support/
 *
 * Supports added:
 * `post-thumbnails`:       https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
 * `title-tag`:             https://codex.wordpress.org/Title_Tag
 * `automatic-feed-links`:  https://codex.wordpress.org/Automatic_Feed_Links
 * `html5`:                 https://codex.wordpress.org/Theme_Markup
 * `custom-logo`:           https://developer.wordpress.org/themes/functionality/custom-logo/
 */
function griddle_add_theme_supports() {

	// Add theme support for Custom Logo
	add_theme_support(
		'custom-logo',
		array(
			'width'      => 250,
			'height'     => 250,
			'flex-width' => false,
		)
	);

	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		)
	);


}


/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * @global int $content_width
 */
function griddle_content_width() {

	$GLOBALS['content_width'] = apply_filters( 'griddle_content_width', 1200 );
}


/**
 *
 * Setup hooks:
 *
 */
add_action( 'after_setup_theme', 'griddle_content_width', 0 ); // Priority 0 to make it available to lower priority callbacks.
add_action( 'after_setup_theme', 'griddle_setup' );
add_action( 'after_setup_theme', 'griddle_add_theme_supports' );
add_action( 'widgets_init', 'griddle_register_sidebars' );
