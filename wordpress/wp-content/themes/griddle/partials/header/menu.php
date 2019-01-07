<button id="site-menu-open" class="site-menu-toggle button"><?php esc_html_e(
		'Menu',
		'griddle'
	); ?></button>

<div id="primary-menu" class="site-menu__inner">
	<button id="site-menu-close" class="site-menu-toggle menu-toggle--close button"><?php esc_html_e('Close Menu','griddle'); ?></button>
	<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
</div>
