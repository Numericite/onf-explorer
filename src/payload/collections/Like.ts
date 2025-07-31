import type { CollectionConfig } from "payload";

export const Likes: CollectionConfig = {
	slug: "likes",
	labels: {
		singular: "Like",
		plural: "Likes",
	},
	fields: [
		{
			name: "snapshot",
			type: "relationship",
			label: "Photo associée",
			relationTo: "snapshots",
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
