"use client";

import { appChakraSystem } from "@/utils/chakra-system";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
	return (
		<ChakraProvider value={appChakraSystem}>
			<ColorModeProvider defaultTheme="light" {...props} />
		</ChakraProvider>
	);
}
