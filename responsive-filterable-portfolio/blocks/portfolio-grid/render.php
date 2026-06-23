<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
if ( function_exists( 'rfp_print_responsive_portfolio_plus_lightbox_func' ) ) {
	echo rfp_print_responsive_portfolio_plus_lightbox_func( array() ); // phpcs:ignore
} else {
	echo '<!-- Responsive Portfolio: render function unavailable -->';
}
