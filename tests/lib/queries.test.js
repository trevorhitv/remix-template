import { describe, it, expect, beforeEach } from "bun:test";
import { createId } from "@paralleldrive/cuid2";
import { clearDb } from "../testUtils.server";
import { db } from "../../app/db.server";
import { readAllNotes } from "../../app/lib/queries.server";

describe("lib/queries", () => {
    beforeEach(() => {
        clearDb();
    });

    describe("readAllNotes", () => {
        it("should return an empty list", () => {
            const notes = readAllNotes();
            expect(notes).toHaveLength(0);
        });

        it("should return all notes", () => {
            db.prepare("INSERT INTO notes (id, title, body) VALUES (?, ?, ?)").run(
                createId(),
                "Hello",
                "World",
            );
            db.prepare("INSERT INTO notes (id, title, body) VALUES (?, ?, ?)").run(
                createId(),
                "Hello",
                "Austin",
            );
            const notes = readAllNotes();
            expect(notes).toHaveLength(2);
            expect(notes[0].title).toEqual("Hello");
            expect(notes[0].body).toEqual("World");
        });
    });
});
