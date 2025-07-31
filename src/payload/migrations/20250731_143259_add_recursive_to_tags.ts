import { type MigrateUpArgs, type MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "tags" ADD COLUMN "parent_id_id" integer;
  ALTER TABLE "tags" ADD CONSTRAINT "tags_parent_id_id_tags_id_fk" FOREIGN KEY ("parent_id_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "tags_parent_id_idx" ON "tags" USING btree ("parent_id_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "tags" DROP CONSTRAINT "tags_parent_id_id_tags_id_fk";
  
  DROP INDEX "tags_parent_id_idx";
  ALTER TABLE "tags" DROP COLUMN "parent_id_id";`)
}
