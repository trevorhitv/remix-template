import { db } from "../app/db.server";

export function clearDb() {
  db.delete().from("notes").run();
}
