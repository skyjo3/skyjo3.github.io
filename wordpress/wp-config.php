<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'aychenne_perspective');

/** MySQL database username */
define('DB_USER', 'aychenne_skyjo3');

/** MySQL database password */
define('DB_PASSWORD', 'ayay617');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ' 0dDY5KUyW$4<;MSbY|5_DpZH1R@#7fiLkHpNazkiLk6_LY4(X>oJ;W;)nM#SbR+');
define('SECURE_AUTH_KEY',  '}y^jW(uL~Q,JE$C/h Pz/Z9|eK-N=e5f=9UYn/q&SOir54[Yzs-4pF0bm1u^N/~c');
define('LOGGED_IN_KEY',    '&(C~w?q>Wf[-TX~U?ls*7ibZ9v4_uGAeQGv$4GSa9rv{4BE<P_ZhXrL%,.CXbJrf');
define('NONCE_KEY',        'xvMTMD,@=dVBT9dy9Pvl>h&rP9#]j7<Er%&PS9+bRb`#  3,IXIx&fN!MaEfIw`4');
define('AUTH_SALT',        'C%:a[SoZ!M*qr9_e4PIzB/7qDCY>N7HG-e*a664uLZilrF5<j 4&p`T^.-nPC!RW');
define('SECURE_AUTH_SALT', 'm<5R#L<j}Vr/QH$#{*91.eAX?w@9Dk0e;y8s.2J<Kug+(/s0kT;^(%P0VLDx3/@!');
define('LOGGED_IN_SALT',   '.Q$qfr9ePQhpI+Oih]batJ~lw(PVNx,7e6slL7[}0-o7zD67z/nY&!mJ6#~/@}-Q');
define('NONCE_SALT',       '[2&@KK2XGWJV0y}5K-3Y%_ (m)Gt{4D[;~2OGDC+3>z79so?CVW@>g2>JsM)|.8=');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
