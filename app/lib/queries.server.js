import { db } from "../db.server";

export function readAllNotes() {
  return db.prepare("SELECT * FROM notes").all();
}
