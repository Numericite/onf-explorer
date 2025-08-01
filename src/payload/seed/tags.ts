import type { Payload } from "payload";

type TagCategories = {
	name: string;
	tags: { name: string; children?: { name: string }[] }[];
};

const tagCategories: TagCategories[] = [
	{
		name: "Peuplements",
		tags: [
			{
				name: "Peuplements purs conifères",
				children: [
					{ name: "Pin maritime" },
					{ name: "Pin d'Alep" },
					{ name: "Cèdre" },
					{ name: "Epicéa commun" },
				],
			},
			{
				name: "Peuplements purs feuillus",
				children: [
					{ name: "Chêne pubescent" },
					{ name: "Chêne vert" },
					{ name: "Chêne sessile" },
					{ name: "Hêtre" },
				],
			},
			{ name: "Peuplements en mélange" },
		],
	},
	{
		name: "Espèce dominante dans le peuplement",
		tags: [
			{ name: "Chêne pédonculé" },
			{ name: "Chêne rouvre" },
			{ name: "Chêne pubescent" },
			{ name: "Chêne vert" },
			{ name: "Chêne sessile" },
			{ name: "Hêtre" },
			{ name: "Châtaignier" },
			{ name: "Autres feuillus" },
			{ name: "Pin maritime" },
			{ name: "Pin sylvestre" },
			{ name: "Pin d'Alep" },
			{ name: "Pin noir" },
			{ name: "Cèdre" },
			{ name: "Sapin pectiné" },
			{ name: "Epicéa commun" },
			{ name: "Autres conifères" },
		],
	},
	{
		name: "Réglementation",
		tags: [
			{ name: "Natura 2000" },
			{ name: "Site classé" },
			{ name: "Site inscrit" },
			{ name: "Monument historique classé" },
			{ name: "Zone de présomption de prescription archéologique" },
			{ name: "Parc national" },
			{ name: "Réserve biologique" },
			{ name: "Parc naturel régional" },
			{ name: "ZNIEFF" },
			{ name: "Label Forêt d'Exception" },
			{ name: "Label Grand Site de France" },
		],
	},
	{
		name: "Gestion forestière",
		tags: [
			{
				name: "Actions sylvicoles",
				children: [
					{ name: "Coupes de régénération" },
					{ name: "Coupes d’amélioration" },
					{ name: "Coupes en futaie irrégulière" },
					{ name: "Coupes à câble" },
					{ name: "Coupes sécuritaires" },
					{ name: "Travaux de régénération" },
					{ name: "Travaux en futaie irrégulière" },
					{ name: "Plantations" },
					{ name: "Cloisonnements sylvicoles" },
					{ name: "Libre évolution" },
				],
			},
			{
				name: "Actions Biodiversité",
				children: [
					{ name: "Ilot de vieillissement" },
					{ name: "Ilot de sénescence" },
					{ name: "Restauration écologique" },
				],
			},
			{
				name: "Actions Paysage",
				children: [
					{ name: "Maintien de cône de vue - panorama emblématique" },
					{ name: "Fermeture du paysage" },
					{ name: "Application de recommandations paysagères" },
					{ name: "Arbres remarquables" },
				],
			},
			{
				name: "Equilibre forêt gibier",
				children: [{ name: "Dégâts" }, { name: "Enclos-exclos" }],
			},
			{ name: "Pastoralisme" },
		],
	},
	{
		name: "Changement climatique et risques",
		tags: [
			{ name: "Risques en Montagne" },
			{
				name: "Risques Littoraux",
				children: [
					{ name: "Erosion marine" },
					{ name: "Génie écologique dunaire" },
					{ name: "Travaux – Aménagements et équipements littoraux" },
				],
			},
			{
				name: "Défense des forêts contre l’Incendie",
				children: [
					{ name: "Débroussaillement" },
					{ name: "Obligations Légales de débroussaillement" },
					{ name: "Travaux post-incendie" },
				],
			},
			{
				name: "Santé des forêts",
				children: [
					{ name: "Scolyte de l'épicéa" },
					{ name: "Tempête" },
					{ name: "Incendie de forêt" },
					{ name: "Sécheresse" },
				],
			},
		],
	},
	{
		name: "Changement climatique et risques naturels",
		tags: [
			{ name: "Avalanche" },
			{ name: "Mouvements (Chute de bloc ; glissement de terrain)" },
			{ name: "Torrentiel" },
			{ name: "Travaux" },
		],
	},
	{
		name: "Infrastructures et Itinéraires en forêt",
		tags: [
			{ name: "Route forestière" },
			{ name: "Piste forestière" },
			{ name: "Piste cyclable" },
			{ name: "Sentier pédestre" },
		],
	},
];

export async function seedTags(payload: Payload) {
	for (const tagCategory of tagCategories) {
		const createdTagCategory = await payload.create({
			collection: "tag-categories",
			data: {
				name: tagCategory.name,
			},
		});

		if (tagCategory.tags && tagCategory.tags.length > 0) {
			for (const tag of tagCategory.tags) {
				const createdTag = await payload.create({
					collection: "tags",
					data: {
						name: tag.name,
						tagCategory: createdTagCategory.id,
					},
				});

				if (tag.children && tag.children.length > 0) {
					for (const child of tag.children) {
						await payload.create({
							collection: "tags",
							data: {
								name: child.name,
								tagCategory: createdTagCategory.id,
								parentId: createdTag.id,
							},
						});
					}
				}
			}
		}
	}
}
