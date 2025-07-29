import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
	theme: {
		tokens: {
			fonts: {
				heading: { value: "var(--font-fira-sans-condensed)" },
				body: { value: "var(--font-marianne)" },
			},
		},
	},
});

export const appChakraSystem = createSystem(defaultConfig, config);
