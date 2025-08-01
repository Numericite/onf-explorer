import { Badge, Box, Button, Center, Heading, Tag } from "@chakra-ui/react";
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
			<Box mt={12}>
				<Center flexDir="column" p={6} bgColor="gray.100" borderRadius="md">
					<Heading size="3xl" textAlign="center" fontWeight={700} mx={4}>
						Bienvenue sur l’Exploratoire photographique des paysages forestiers
					</Heading>
					<Badge colorPalette="black" mt={3}>
						Version béta
					</Badge>
					<Button mt={6}>Découvrir la forêt !</Button>
				</Center>
			</Box>
		</>
	);
}
