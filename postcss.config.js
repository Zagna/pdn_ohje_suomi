module.exports = {
	plugins: {
		'@fullhuman/postcss-purgecss': {
			content: ['./layouts/**/*.html'],
			safelist: [
					'dl', 'dt', 'dd', 'ol', 'ul', 'li',
					'table', 'thead', 'th', 'tbody', 'td', 'tr',
					'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span'
				],
		},
	},
};