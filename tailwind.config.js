/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#5932EA",
				"primary-dark": "#4623E9",
				"primary-thin": "#EAABF0",
				"stone-black": "#333333",
				muted: "#B5B7C0",
				success: "#008767",
				"success-dark": "#00AC4F",
				danger: "#DF0404",
				pink: "#D0004B",
			},
		},
	},
	plugins: [],
};
