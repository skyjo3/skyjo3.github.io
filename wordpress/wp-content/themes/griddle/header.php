<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>


<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'griddle' ); ?></a>

<header id="header" class="site-header" role="banner">

	<div class="site-header__inner layout-inner">
		<?php get_template_part( 'partials/header/branding' ) ?>

		<?php if ( has_nav_menu( 'primary' ) ): ?>
			<nav id="site-menu" class="site-menu" role="navigation">
				<?php get_template_part( 'partials/header/menu' ) ?>
			</nav><!-- #site-menu -->
		<?php endif; ?>
	</div>

</header><!-- #header -->

<div id="page" class="site layout-inner">