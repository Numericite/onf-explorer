import {
	Box,
	Button,
	CloseButton,
	Container,
	Drawer,
	Flex,
	Heading,
	Portal,
	Icon,
	Text,
} from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
	return (
		<Container>
			<Flex alignItems="center" justifyContent="space-between" py={6}>
				<ChakraLink
					color="black"
					_hover={{ textDecoration: "none" }}
					_focus={{ outline: "none" }}
					asChild
				>
					<NextLink href="/" passHref>
						<Flex alignItems="center" gap={3}>
							<Box bgColor="#2F322F" borderRadius="lg" p={4} />
							<Heading color="black" fontWeight={700}>
								L'Exploratoire
							</Heading>
						</Flex>
					</NextLink>
				</ChakraLink>
				<Drawer.Root>
					<Drawer.Trigger asChild>
						<Button variant="plain" lineHeight="shorter">
							<HiBars3 /> Menu
						</Button>
					</Drawer.Trigger>
					<Portal>
						<Drawer.Backdrop />
						<Drawer.Positioner>
							<Drawer.Content>
								<Drawer.Header>
									<Drawer.Title>Menu</Drawer.Title>
								</Drawer.Header>
								<Drawer.Body>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</p>
								</Drawer.Body>
								<Drawer.CloseTrigger asChild>
									<CloseButton size="sm" />
								</Drawer.CloseTrigger>
							</Drawer.Content>
						</Drawer.Positioner>
					</Portal>
				</Drawer.Root>
			</Flex>
		</Container>
	);
};

export default Navbar;
