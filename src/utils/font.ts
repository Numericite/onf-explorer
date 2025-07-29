import { Fira_Sans_Condensed } from "next/font/google";
import localFont from "next/font/local";

export const firaSansCondensed = Fira_Sans_Condensed({
	variable: "--font-fira-sans-condensed",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const marianne = localFont({
	variable: "--font-marianne",
	display: "swap",
	src: [
		{
			path: "../../public/fonts/Marianne/Marianne-Thin.woff2",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../public/fonts/Marianne/Marianne-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/Marianne/Marianne-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/Marianne/Marianne-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/Marianne/Marianne-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/Marianne/Marianne-ExtraBold.woff2",
			weight: "800",
			style: "normal",
		},
	],
});
