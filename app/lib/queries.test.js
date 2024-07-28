import { describe, it, expect, beforeEach } from 'bun:test';
import { createId } from "@paralleldrive/cuid2";
import { db } from '../db.server';
import { readAllNotes } from './queries.server';

describe('lib/queries', () => {
    beforeEach(() => {
        db.exec('DELETE FROM notes');
    });

    describe('readAllNotes', () => {
        it('should return all notes', () => {
            const notes = readAllNotes();
            expect(notes).toHaveLength(0);
        });

        it('should return all notes', () => {
            db.prepare('INSERT INTO notes (id, title, body) VALUES (?, ?, ?)').run(createId(), 'Hello', 'World');
            db.prepare('INSERT INTO notes (id, title, body) VALUES (?, ?, ?)').run(createId(), 'Hello', 'Austin');
            const notes = readAllNotes();
            expect(notes).toHaveLength(2);
            expect(notes[0].title).toEqual('Hello');
            expect(notes[0].body).toEqual('World');
        });
    });


});