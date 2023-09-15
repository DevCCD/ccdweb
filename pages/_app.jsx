import "../src/styles/globals.css";
import "../src/styles/progress.css";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

import Router from "next/router";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }) {
	const lightTheme = createTheme({
		type: "light",
		theme: {
			colors: {
				primary: "#890524",
				primaryShadow: "$primary",
				primaryLight: "#fecaca",
				primaryLightHover: "#fbb7b7",
				primaryLightActive: "#fca5a5",
				error: "#890524",
				red50: "#fef2f2",
				red100: "#fee2e2",
				red200: "#fecaca",
				red300: "#fca5a5",
				red400: "#f87171",
				red500: "#ef4444",
				red600: "#FC3F32",
				red700: "#890524",
			},
		},
	});

	const darkTheme = createTheme({
		type: "dark",
		theme: {
			colors: {
				primary: "#890524",
				primaryShadow: "$primary",
				primaryLight: "#fecaca",
				primaryLightHover: "#fbb7b7",
				primaryLightActive: "#fca5a5",
				error: "#890524",
				red50: "#fef2f2",
				red100: "#fee2e2",
				red200: "#fecaca",
				red300: "#fca5a5",
				red400: "#f87171",
				red500: "#ef4444",
				red600: "#FC3F32",
				red700: "#890524",
				background: "#0b0b0b",
			},
		},
	});

	Router.events.on("routeChangeStart", () => {
		NProgress.start();
	});

	Router.events.on("routeChangeComplete", () => {
		NProgress.done();
	});

	return (
		<ThemeProvider
			defaultTheme={"light"}
			attribute='class'
			value={{
				light: lightTheme,
				dark: darkTheme,
			}}
		>
			<NextUIProvider>
				<Component {...pageProps} />
			</NextUIProvider>
		</ThemeProvider>
	);
}

export default MyApp;
