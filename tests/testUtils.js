import { db } from "../app/db";
import { notes } from "../app/db/schema"

export function clearDb() {
  db.delete(notes).run();
}
