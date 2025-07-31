import type { CollectionConfig } from "payload";

export const Forests: CollectionConfig = {
	slug: "forests",
	labels: {
		singular: "Forêt",
		plural: "Forêts",
	},
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			type: "text",
			label: "Nom",
			required: true,
		},
		{
			name: "relatedStreaks",
			type: "join",
			collection: "streaks",
			on: "forest",
			label: "Séries photographiques associées",
			admin: {
				position: "sidebar",
				defaultColumns: ["name"],
				allowCreate: false,
			},
		},
	],
};
