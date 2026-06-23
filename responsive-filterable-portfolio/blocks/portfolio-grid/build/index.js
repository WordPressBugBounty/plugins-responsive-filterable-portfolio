( function ( blocks, element, blockEditor, i18n ) {
	var el = element.createElement;
	var __ = i18n.__;
	var useBlockProps = blockEditor.useBlockProps;

	blocks.registerBlockType( 'i13-rfp/portfolio-grid', {
		edit: function () {
			var blockProps = useBlockProps( {
				className: 'i13-rfp-block-preview',
				style: {
					border: '1px solid #e0e0e0',
					borderRadius: '10px',
					padding: '18px 20px',
					background: '#f6f7f7',
					font: '14px/1.4 sans-serif'
				}
			} );

			return el(
				'div',
				blockProps,
				el(
					'div',
					{ style: { display: 'flex', alignItems: 'center', gap: '14px' } },
					el( 'span', {
						className: 'dashicons dashicons-format-gallery',
						style: { fontSize: '30px', width: '30px', height: '30px', color: '#2271b1' }
					} ),
					el(
						'div',
						null,
						el( 'strong', { style: { display: 'block', color: '#1e1e1e' } }, __( 'Responsive Portfolio', 'responsive-filterable-portfolio' ) ),
						el( 'span', { style: { color: '#646970', fontSize: '12px' } }, __( 'Your filterable portfolio will display here on the published page.', 'responsive-filterable-portfolio' ) )
					)
				),
				el(
					'div',
					{ style: { marginTop: '12px', fontSize: '12px', color: '#787c82', borderTop: '1px solid #eaeaea', paddingTop: '10px' } },
					__( 'Want multiple grids, Masonry & Justified layouts, and Elementor support? ', 'responsive-filterable-portfolio' ),
					el(
						'a',
						{ href: 'https://www.i13websolution.com/wordpress-responsive-media-portfolio-grid.html', target: '_blank', rel: 'noopener', style: { color: '#2271b1', fontWeight: '600' } },
						__( 'Upgrade to Pro', 'responsive-filterable-portfolio' )
					)
				)
			);
		},
		save: function () {
			return null;
		}
	} );
} )( window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.i18n );
