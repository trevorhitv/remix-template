import { describe, it, expect } from "bun:test";
import { validateNoteForm } from '../../app/lib/validators.server';


describe("lib/queries", () => {
    describe("validate note form", () => {
        it("should return true if the form is valid", () => {
            const formData = new FormData();
            formData.append("title", "test");
            formData.append("body", "test");
            const result = validateNoteForm(formData);
            expect(result.success).toBe(true);
        });

        it("should return false if the form is invalid", () => {
            const formData = new FormData();
            formData.append("title", "");
            formData.append("body", "");
            const result = validateNoteForm(formData);
            expect(result.success).toBe(false);
        });
    });
});