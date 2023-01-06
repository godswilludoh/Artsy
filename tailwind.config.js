/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			display: ['Ruslan Display', 'cursive'],
			heading: ['STIX Two Text', 'serif'],
			exhibition: ['Bellefair', 'serif'],
			exhibition2: ['Poppins', 'sans-serif'],
		},
		extend: {
			colors: {
				'pri-black': '#292929',
				'sec-black': '#333333',
				'pri-white': '#FFFFFF',
			},
			backgroundImage: {
				'exhibition-Img': "url('../public/images/exhibition.png')",
				'exhibition-gradient':
					'linear-gradient(99.99deg, #4693ED -26.21%, #79C2D2 22.16%, rgba(192, 86, 9, 0.49) 111.62%)',
			},
		},
	},
	plugins: [],
};
