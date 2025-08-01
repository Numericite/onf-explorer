import {
	createSystem,
	defaultConfig,
	defineConfig,
	defineRecipe,
} from "@chakra-ui/react";

const buttonRecipe = defineRecipe({
	base: {
		borderRadius: "2xl",
	},
});

const config = defineConfig({
	theme: {
		tokens: {
			fonts: {
				heading: { value: "var(--font-fira-sans-condensed)" },
				body: { value: "var(--font-marianne)" },
			},
		},
		semanticTokens: {
			colors: {
				black: {
					solid: { value: "{colors.black}" },
					contrast: { value: "{colors.white}" },
					fg: { value: "{colors.white}" },
					muted: { value: "{colors.black}" },
					subtle: { value: "{colors.black}" },
					emphasized: { value: "{colors.black}" },
					focusRing: { value: "{colors.black}" },
				},
			},
		},
		recipes: {
			button: buttonRecipe,
		},
	},
});

export const appChakraSystem = createSystem(defaultConfig, config);
