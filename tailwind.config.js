/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			display: ['Ruslan Display', 'cursive'],
		},
		extend: {
			colors: {
				'pri-black': '#292929',
			},
		},
	},
	plugins: [],
};
