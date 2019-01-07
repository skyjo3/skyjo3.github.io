<article id="post-<?php the_ID(); ?>">

	<header class="entry-header">


		<?php
		the_title( '<h1 class="entry-title">', '</h1>' );

		if ( 'post' === get_post_type() ) : ?>
			<div class="entry-meta">
				<?php griddle_posted_on(); ?>
				<?php esc_html_e( 'in', 'griddle' ); ?>
				<?php griddle_the_category_list() ?>
			</div><!-- .entry-meta -->
			<?php
		endif; ?>
	</header><!-- .entry-header -->


	<div <?php post_class(); ?>>

		<?php the_post_thumbnail() ?>

		<div class="entry-content">
			<?php
			the_content(
				sprintf(
					wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
						__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'griddle' ),
						array( 'span' => array( 'class' => array() ) )
					),
					get_the_title()
				)
			);

			wp_link_pages(
				array(
					'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'griddle' ),
					'after'  => '</div>',
				)
			);
			?>
		</div><!-- .entry-content -->

		<footer class="entry-footer">
			<?php griddle_the_tags(); ?>
		</footer><!-- .entry-footer -->

	</div>

</article>