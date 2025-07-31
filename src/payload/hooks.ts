import type { FieldHook } from "payload";
import type { Streak } from "./payload-types";

type TGetLikeFromStreak = FieldHook<Streak, number, Partial<Streak>>;

export const getLikeFromStreak: TGetLikeFromStreak = async (args) => {
	const {
		value, // Typed as `string` as shown above
		data, // Typed as a Partial of your ExampleDocumentType
		siblingData, // Typed as a Partial of SiblingDataType
		originalDoc, // Typed as ExampleDocumentType
		operation,
		req,
	} = args;

	if (!data || !data.relatedSnapshots) return 0;

	const snapshotIds =
		data.relatedSnapshots?.docs?.map((s) =>
			typeof s === "number" ? s : s.id,
		) || [];

	let count = 0;

	if (snapshotIds.length > 0) {
		// Count likes for all those snapshots
		const likesResult = await req.payload.count({
			collection: "likes",
			where: { snapshot: { in: snapshotIds } },
			depth: 0,
		});
		count = likesResult.totalDocs;
	}

	return count;
};
