import { Database } from "bun:sqlite";

export const db = new Database(process.env.DATABASE_PATH, { strict: true });

// To improve performane enable WAL mode
db.exec("PRAGMA journal_mode = WAL;");
