import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const notes = sqliteTable('notes', {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    body: text("body").notNull(),
});