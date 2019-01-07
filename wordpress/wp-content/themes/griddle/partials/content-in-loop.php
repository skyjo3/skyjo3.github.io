<?php
/**
 * Template part for displaying results in search pages
 *
 * @link    https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Griddle
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="entry-header">
		<?php griddle_the_category_list(); ?>
		<?php the_post_thumbnail( griddle_get_dynamic_thumbnail_size() ) ?>
	</div>

	<div class="entry-summary">
		<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>

		<div class="entry-excerpt">
			<?php the_excerpt(); ?>
		</div>

		<footer class="entry-footer">
			<?php griddle_posted_on(); ?>
			<a href="<?php the_permalink() ?>" class="read-more"><?php esc_html_e( 'Read More', 'griddle' ); ?></a>
		</footer><!-- .entry-footer -->

	</div><!-- .entry-summary -->


</article><!-- #post-<?php the_ID(); ?> -->
