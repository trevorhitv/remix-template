import { describe, it, expect, beforeEach } from "bun:test";
import { clearDb } from "../testUtils";
import { db } from "../../app/db";
import { notes } from "../../app/db/schema";
import { createNote } from "../../app/lib/mutations";

describe("lib/queries", () => {
    beforeEach(() => {
        clearDb();
    });

    describe("create new notes", () => {
        it("should create a new note - happy path", () => {
            const newNote = {
                title: "Hello",
                body: "World",
            };

            createNote(newNote.title, newNote.body);
            const note = db.select().from(notes).get();

            expect(note.title).toEqual(newNote.title);
        });

        it("should create a new note - sad path", () => {
            const newNote = {
                body: "",
            };

            expect(() => {
                createNote(newNote.title, newNote.body);
            }).toThrowError();
        });
    });
});
