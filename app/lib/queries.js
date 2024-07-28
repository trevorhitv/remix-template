import { db } from "../db";
import { notes } from "../db/schema"

export function readAllNotes() {
  return db.select().from(notes).all();
}
