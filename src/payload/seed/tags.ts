import type { Payload } from "payload";

export const tagCategories = [
	{
		name: "Essences",
		tags: [
			{ name: "Chêne pédonculé (Quercus robur)" },
			{ name: "Chêne sessile (Quercus petraea)" },
			{ name: "Hêtre (Fagus sylvatica)" },
		],
	},
	{
		name: "Activités forestières",
		tags: [
			{ name: "Coupe de regénération" },
			{ name: "Coupe sanitaire" },
			{ name: "Plantation" },
		],
	},
	{
		name: "Aléas et risques",
		tags: [
			{ name: "Incendie" },
			{ name: "Tempête" },
			{ name: "Réchauffement climatique" },
		],
	},
	{
		name: "Milieu",
		tags: [{ name: "Montagne" }, { name: "Dune" }, { name: "Garrigue" }],
	},
	{
		name: "Faune et flore",
		tags: [
			{ name: "Pastoralisme (troupeaux)" },
			{ name: "Chasse" },
			{ name: "Espèce en danger" },
		],
	},
] as const;

export async function seedTags(payload: Payload) {
	for (const tagCategory of tagCategories) {
		const createdTagCategory = await payload.create({
			collection: "tag-categories",
			data: {
				...tagCategory,
			},
		});

		if (tagCategory.tags && tagCategory.tags.length > 0) {
			for (const tag of tagCategory.tags) {
				await payload.create({
					collection: "tags",
					data: {
						name: tag.name,
						tagCategory: createdTagCategory.id,
					},
				});
			}
		}
	}
}
