import { z } from "zod";

export function checkNoteFormData(formData) {
  const noteSchema = z.object({
    title: z.string().min(1, { message: "Title must not be empty" }),
    body: z.string().min(1, { message: "Body must not be empty" }),
  });

  return noteSchema.safeParse(formData);
}
