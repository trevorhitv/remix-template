import { createId } from "@paralleldrive/cuid2";
import { db } from "../db";

export function createNote(title, body) {
  const id = createId();

  db.insert(users).values({ id, title, body }).run();
}
