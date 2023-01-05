/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			display: ['Ruslan Display', 'cursive'],
			heading: ['STIX Two Text', 'serif'],
		},
		extend: {
			colors: {
				'pri-black': '#292929',
				'sec-black': '#333333',
			},
		},
	},
	plugins: [],
};
