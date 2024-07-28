import { createId } from "@paralleldrive/cuid2";
import { db } from "./index";
import * as schema from "./schema";

await db.insert(schema.notes).values([
    { id: createId(), title: "Hello", body: "World" },
    { id: createId(), title: "Goodbye", body: "Moon" },
]);