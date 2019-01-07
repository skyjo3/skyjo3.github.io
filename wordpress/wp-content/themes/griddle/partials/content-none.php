<?php
/**
 * Template part for displaying a message that posts cannot be found
 *
 * @link    https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Griddle
 */

?>

<section class="no-results not-found">

	<header class="page-header">
		<h1 class="page-title"><?php esc_html_e( 'Nothing Found', 'griddle' ); ?></h1>
	</header><!-- .page-header -->

	<div class="page-content">
		<?php
		if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

			<p><?php
				printf(
					wp_kses(
					/* translators: 1: link to WP admin new post page. */
						__( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'griddle' ),
						array(
							'a' => array(
								'href' => array(),
							),
						)
					),
					esc_url( admin_url( 'post-new.php' ) )
				);
				?></p>
		<?php else : ?>
			<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for.', 'griddle' ); ?></p>
			<p><a class="button" href="<?php echo esc_url( home_url('/') ) ?>"><?php esc_html_e('Back Home','griddle'); ?></a></p>
		<?php endif; ?>
	</div><!-- .page-content -->

</section><!-- .no-results -->

