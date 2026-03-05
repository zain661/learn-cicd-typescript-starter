import "dotenv/config";

/** @type { import("drizzle-kit").Config } */
export default {
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
    authToken: process.env.TURSO_AUTH_TOKEN || "",
  },
};