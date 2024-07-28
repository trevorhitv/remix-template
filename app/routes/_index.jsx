import { json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { z } from "zod";
import { createId } from "@paralleldrive/cuid2";
import { pullErrorFromZodParsing } from "../utils/forms";
import { db } from "../db.server";
import { readAllNotes } from "../lib/queries";

export function meta() {
  return [
    { title: "Remix Bun Template" },
    { name: "description", content: "Use Remix with Bun and Fly.io" },
  ];
}

export async function loader() {
  const notes = readAllNotes();

  return json({ notes });
}

export async function action({ request }) {
  const formData = Object.fromEntries(await request.formData());

  const note = checkNoteFormData(formData);

  if (!note.success) {
    const errors = pullErrorFromZodParsing(note.error);
    return json({ data: {}, errors });
  }

  createNote(note.data.title, note.data.body);

  return json({ data: { id }, errors: {} });
}

export default function Index() {
  const loaderData = useLoaderData();
  const actionData = useActionData();

  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Bun and Remix Template</h1>
      <p>Cliche Notes Example</p>

      <Form method="post">
        <label htmlFor="title">Title</label>
        <input className="border" name="title" type="text" />
        <br />
        <label htmlFor="body">Body</label>
        <input className="border" name="body" type="text" />
        <br />
        <button type="submit">Submit</button>
      </Form>

      {actionData?.errors?.title ? (
        <p className="text-red-500">{actionData.errors.title}</p>
      ) : null}

      {actionData?.errors?.body ? (
        <p className="text-red-500">{actionData.errors.body}</p>
      ) : null}

      {loaderData.notes.length !== 0 && (
        <div>
          <h2 className="text-2xl">Notes</h2>
          <ul>
            {loaderData.notes.map((note) => (
              <li key={note.id}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
