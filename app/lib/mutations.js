import { createId } from "@paralleldrive/cuid2";
import { db } from "../db";
import { notes } from "../db/schema";

export function createNote(title, body) {
  const id = createId();

  db.insert(notes).values({ id, title, body }).run();
}
