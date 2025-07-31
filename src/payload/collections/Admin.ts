import type { CollectionConfig } from "payload";

export const Admins: CollectionConfig = {
	slug: "admins",
	auth: true,
	labels: {
		singular: "Administrateur",
		plural: "Administrateurs",
	},
	admin: {
		useAsTitle: "email",
	},
	fields: [
		{
			name: "email",
			type: "email",
			required: true,
		},
	],
};
