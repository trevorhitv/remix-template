import { createId } from "@paralleldrive/cuid2";
import { db } from "../db.server";

export function createNote(title, body) {
  const id = createId();

  const insertNote = db.prepare(
    "INSERT INTO notes (id, title, body) VALUES ($id, $title, $body)",
  );

  insertNote.run({ id, title, body });
}
