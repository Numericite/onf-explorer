import { firaSansCondensed, marianne } from "@/utils/font";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html
			lang="fr"
			className={`${firaSansCondensed.variable} ${marianne.variable}`}
			suppressHydrationWarning
		>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
