import type { CollectionConfig } from "payload";

export const Snapshots: CollectionConfig = {
	slug: "snapshots",
	labels: {
		singular: "Photo",
		plural: "Photos",
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
			type: "text",
			label: "Description",
			required: true,
		},
		{
			name: "image",
			type: "upload",
			label: "Image",
			required: true,
			relationTo: "media",
		},
		{
			name: "streak",
			type: "relationship",
			label: "Série associée",
			relationTo: "streaks",
			required: true,
		},
		{
			name: "relatedLikes",
			type: "join",
			label: "J'aime associés",
			collection: "likes",
			on: "snapshot",
			admin: {
				position: "sidebar",
				defaultColumns: ["user"],
				allowCreate: false,
			},
		},
	],
};
