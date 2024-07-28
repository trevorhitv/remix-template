import { describe, it, expect, beforeEach } from "bun:test";
import { clearDb } from "../testUtils";
import { createNote } from "../../app/lib/mutations";
import { readAllNotes } from "../../app/lib/queries";

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
            createNote("Hello", "World");
            createNote("Hello", "Austin");
            const notes = readAllNotes();
            expect(notes).toHaveLength(2);
            expect(notes[0].title).toEqual("Hello");
            expect(notes[0].body).toEqual("World");
        });
    });
});
