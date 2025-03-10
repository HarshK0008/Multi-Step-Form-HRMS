"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	// typography: {
	// 	fontFamily: "var(--font-roboto)",
	// },

	palette: {
		primary: {
			main: "#ffffff",
		},
		secondary: {
			main: "#000000",
		},
	},
	breakpoints: {
		values: {
			xs: 440,
			sm: 600,
			md: 800,
			lg: 1200,
			xl: 1536,
		},
	},
});

export default theme;
