<?php
/**
 * Gutenberg block loader for Responsive Filterable Portfolio (free).
 * @package ResponsiveFilterablePortfolio
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

function rfp_free_register_portfolio_block() {
	if ( ! function_exists( 'register_block_type' ) ) { return; }
	register_block_type( __DIR__ . '/portfolio-grid' );
}
add_action( 'init', 'rfp_free_register_portfolio_block' );
