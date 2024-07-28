import { db } from "../app/db.server";

export function clearDb() {
  db.exec("DELETE FROM notes");
}
