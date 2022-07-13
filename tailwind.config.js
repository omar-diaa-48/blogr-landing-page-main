/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'primary-light-red': 'hsl(356, 100%, 66%)',
				'primary-very-light-red': 'hsl(355, 100%, 74%)',
				'primary-very-dark-blue': 'hsl(208, 49%, 24%)',
				'neutral-white': 'hsl(0, 0%, 100%)',
				'neutral-grayish-blue': 'hsl(240, 2%, 79%)',
				'neutral-very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
				'neutral-very-dark-black-blue': 'hsl(240, 10%, 16%)',
				'gradient-very-light-red': 'hsl(13, 100%, 72%)',
				'gradient-light-red': 'hsl(353, 100%, 62%)',
				'gradient-very-dark-gray-blue': 'hsl(237, 17%, 21%)',
				'gradient-very-dark-desaturated-blue': 'hsl(237, 23%, 32%)',
			},
			fontFamily: {
				overpass: ["Overpass"],
				ubuntu: ["Ubuntu"]
			},
			spacing: {
				'128': '32rem',
				'144': '36rem',
			}
		},
	},
	plugins: [],
}
