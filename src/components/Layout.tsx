import { Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<Box as="main" minH="calc(100vh - 88px)">
				<Container maxW="container.xl">{children}</Container>
			</Box>
		</>
	);
}
