<?php get_header(); ?>

	<main id="primary" class="site-content" role="main">

		<?php
		if ( have_posts() ) :

			/* Start the Loop */
			while ( have_posts() ) : the_post();

				get_template_part( 'partials/content', 'in-loop' );

			endwhile;

			get_template_part( 'partials/pagination' );

		else :

			get_template_part( 'partials/content', 'none' );

		endif; ?>

	</main><!-- #primary -->

<?php
get_sidebar();
get_footer();
