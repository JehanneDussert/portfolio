/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				anonymous: ["Anonymous Pro", "sans-serif"],
				inconsolata: ["Inconsolata", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
				teras: ["Teras", "Lilita One", "sans-serif"],
				squada: ["Squada One", "sans-serif"],
			},
		},
	},
	plugins: [],
};
