import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
	slug: "users",
	auth: true,
	labels: {
		singular: "Utilisateur",
		plural: "Utilisateurs",
	},
	admin: {
		useAsTitle: "email",
	},
	fields: [
		{
			name: "firstName",
			label: "Prénom",
			type: "text",
			required: true,
		},
		{
			name: "lastName",
			label: "Nom",
			type: "text",
			required: true,
		},
	],
};
