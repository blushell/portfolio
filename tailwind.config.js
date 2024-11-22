export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
			colors: {
				terminal: {
					bg: '#44475a',
					icon: '#FF79C6',
					max: '#48CA38',
					min: '#F4C025',
					close: '#F36259',
					/* max: '#50FA7B',
					min: '#F1FA8C',
					close: '#FF5555', */
				},
				dracula: {
					bg: '#282a36',
					text: '#f8f8f2',
					current: '#44475a',
					comment: '#6272a4',
					purple: '#bd93f9',
					pink: '#ff79c6',
					strings: '#f1fa8c',
					vars: '#50fa7b',
					funcs: '#8be9fd',
					consts: '#ffb86c',
					errors: '#ff5555',
					warnings: '#f1fa8c',
				},
			},
			fontFamily: {
				mono: ['Fira Code', 'Monaco', 'Consolas', 'monospace'],
			},
		},
	},
};
