import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/config/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://ai-short-db_owner:q1FnOHmVPN4T@ep-aged-pine-a1n1r8x1.ap-southeast-1.aws.neon.tech/ai-short-video-generator?sslmode=require",
  },
});
