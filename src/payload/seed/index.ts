import "dotenv/config";

import config from "@payload-config";
import { getPayload } from "payload";

import { seedTags } from "./tags";

const seedData = async () => {
	try {
		const payload = await getPayload({
			config,
		});

		await payload.create({
			collection: "admins",
			data: {
				email: "admin@test.loc",
				password: "admin123",
			},
		});

		await payload.create({
			collection: "users",
			data: {
				email: "user@test.loc",
				firstName: "User",
				lastName: "Test",
				password: "user123",
			},
		});

		await seedTags(payload);
	} catch (e) {
		console.error(e);
	} finally {
		process.exit();
	}
};

await seedData();
