import { Heading } from "@chakra-ui/react";
import Head from "next/head";

import { api } from "~/utils/api";

export default function Home() {
	return (
		<>
			<Head>
				<title>ONF Explorer</title>
				<meta
					name="description"
					content="ONF - L'exploratoire photographique des paysages forestiers"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Heading>Page d'accueil de l'ONF Explorer</Heading>
			</main>
		</>
	);
}
