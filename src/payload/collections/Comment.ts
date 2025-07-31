import type { CollectionConfig } from "payload";

export const Comments: CollectionConfig = {
	slug: "comments",
	labels: {
		singular: "Commentaire",
		plural: "Commentaires",
	},
	fields: [
		{
			name: "content",
			type: "text",
			label: "Contenu",
			required: true,
		},
		{
			name: "streak",
			type: "relationship",
			label: "Série photographique associée",
			relationTo: "streaks",
			required: true,
		},
		{
			name: "user",
			type: "relationship",
			label: "Utilisateur",
			relationTo: "users",
			required: true,
		},
	],
};
