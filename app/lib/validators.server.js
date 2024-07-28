import { z } from "zod";

export function validateNoteForm(formData) {
  const data = Object.fromEntries(formData);

  const titleError = "Title must not be empty";
  const bodyError = "Body must not be empty";

  const noteSchema = z.object({
    title: z
      .string({ required_error: titleError })
      .min(1, { message: titleError }),
    body: z
      .string({ required_error: bodyError })
      .min(1, { message: bodyError }),
  });

  return noteSchema.safeParse(data);
}
