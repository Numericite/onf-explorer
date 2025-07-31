import type { CollectionConfig } from "payload";

export const Tags: CollectionConfig = {
	slug: "tags",
	labels: {
		singular: "Étiquette",
		plural: "Étiquettes",
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
			name: "description",
			type: "textarea",
			label: "Description",
		},
		{
			name: "tagCategory",
			type: "relationship",
			relationTo: "tag-categories",
			label: "Catégorie d'étiquette",
			required: true,
		},
		{
			name: "relatedStreaks",
			type: "join",
			collection: "streaks",
			on: "tags",
			label: "Séries associées",
		},
	],
};
