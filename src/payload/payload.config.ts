import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { fr } from "@payloadcms/translations/languages/fr";
import { en } from "@payloadcms/translations/languages/en";

import { Media } from "./collections/Media";
import { Admins } from "./collections/Admin";
import { Users } from "./collections/User";
import { Tags } from "./collections/Tag";
import { TagCategories } from "./collections/TagCategories";
import { Streaks } from "./collections/Streak";
import { Snapshots } from "./collections/Snapshot";
import { Likes } from "./collections/Like";
import { Comments } from "./collections/Comment";
import { Forests } from "./collections/Forest";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		importMap: {
			baseDir: path.resolve(dirname),
		},
		user: "admins",
	},
	editor: lexicalEditor(),
	collections: [
		Admins,
		Users,
		Snapshots,
		Streaks,
		Likes,
		Comments,
		Forests,
		Tags,
		TagCategories,
		Media,
	],
	secret: process.env.PAYLOAD_SECRET || "",
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI || "",
		},
		migrationDir: path.resolve(dirname, "./migrations"),
		generateSchemaOutputFile: path.resolve(
			dirname,
			"./payload-generated-schema.ts",
		),
	}),
	i18n: {
		fallbackLanguage: "fr",
		supportedLanguages: { fr, en },
	},
	sharp,
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
});
