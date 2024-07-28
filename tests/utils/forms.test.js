import { describe, it, expect } from "bun:test";
import { z } from "zod";
import { pullErrorFromZodParsing } from "../../app/utils/forms";

describe("utils/forms", () => {
  describe("test the pullErrorFromZodParsing util", () => {
    const titleError = "Title must not be empty";
    const bodyError = "Body must not be empty";

    const testSchema = z.object({
      title: z
        .string({ required_error: titleError })
        .min(1, { message: titleError }),
      body: z
        .string({ required_error: bodyError })
        .min(1, { message: bodyError }),
    });

    it("should return an error for missing title", () => {
      const formInput = { body: "World" };

      const note = testSchema.safeParse(formInput);
      expect(note.success).toBe(false);

      const errors = pullErrorFromZodParsing(note.error);
      expect(errors.title).toEqual("Title must not be empty");
    });

    it("should return an error for body too short", () => {
      const formInput = { title: "Hello", body: "" };

      const note = testSchema.safeParse(formInput);
      expect(note.success).toBe(false);

      const errors = pullErrorFromZodParsing(note.error);
      expect(errors.body).toEqual("Body must not be empty");
    });
  });
});
