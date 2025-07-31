import type { CollectionConfig } from "payload";
import { getLikeFromStreak } from "../hooks";

export const Streaks: CollectionConfig = {
	slug: "streaks",
	labels: {
		singular: "Série photographique",
		plural: "Séries photographiques",
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
			name: "geometry",
			type: "text",
			label: "Géométrie",
			required: true,
		},
		{
			name: "stepInMilliseconds",
			type: "number",
			label: "Intervalle entre les photos (en millisecondes)",
			required: true,
			defaultValue: 86400000, // 24 heures par défaut
		},
		{
			name: "tags",
			type: "relationship",
			label: "Étiquettes associées",
			relationTo: "tags",
			hasMany: true,
		},
		{
			name: "forest",
			type: "relationship",
			label: "Forêt associée",
			relationTo: "forests",
			required: true,
		},
		{
			name: "relatedSnapshots",
			type: "join",
			collection: "snapshots",
			on: "streak",
			label: "Photos associées",
			admin: {
				position: "sidebar",
				defaultColumns: ["name", "image"],
				allowCreate: false,
			},
		},
		{
			name: "likeCount",
			type: "number",
			admin: { readOnly: true, position: "sidebar" },
			label: "Nombre de likes",
			hooks: {
				beforeChange: [
					({ siblingData }) => {
						// ensures data is not stored in DB
						delete siblingData["likeCount"];
					},
				],
				afterRead: [getLikeFromStreak],
			},
		},
		{
			name: "relatedComments",
			type: "join",
			collection: "comments",
			on: "streak",
			label: "Commentaires associés",
			admin: {
				position: "sidebar",
				defaultColumns: ["content", "user"],
				allowCreate: false,
			},
		},
	],
};
