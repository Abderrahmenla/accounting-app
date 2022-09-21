<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'corporate' );

/** Database username */
define( 'DB_USER', 'corporateadmin' );

/** Database password */
define( 'DB_PASSWORD', 'Jaloroso1996@' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.M6=,)N0h%yk+T~=kWGJ3.eK In%0nLEI&zA,BIZ${cVP254BR^mE?k.Zu-_rUQ-' );
define( 'SECURE_AUTH_KEY',  '0m[Qw2U| fvj`LcU_~2@+e(b%1 a_p,*PO&{ H3v1dP^anV0KHWT-6iFKx`zab:0' );
define( 'LOGGED_IN_KEY',    'Q3s2f>g|;#a+X)X&OD4vNym?.0kSQnWKPW|rTFj%hVxUciGjy6|dY{M*m*DL{P5S' );
define( 'NONCE_KEY',        ':}kc%Xgri=4d*I(1LT,$7w{~waiL>~?ls+(4AAB1S)ryyuiR*tY9&Ar.dcL([yP<' );
define( 'AUTH_SALT',        '<*x |{lJw&WZ1Eml:D]ESUB}fo;({?%]R8qUfv]|pcc,L0Y`sd@hGS+JeA,N|64Q' );
define( 'SECURE_AUTH_SALT', 'x{lRRY.n_h_xHYA(05F0=?q-,~y25xOL.pM5VfowvRI%cT9d_lTdAoskY90_(iVS' );
define( 'LOGGED_IN_SALT',   'TKRg<c8w28xwo/Uh<.9&~ Au%i7wF5Ed`G],Ff_M:sX^E2<A*3SDkaLT]o<C~T.N' );
define( 'NONCE_SALT',       'Mss#z<o`|ySp1b[.`|{YZ/1}E@/woL%AI,h(iK6_jOY%|cAu;L>-S<XrW#LO6taE' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
