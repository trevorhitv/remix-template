import { json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { pullErrorFromZodParsing } from "../utils/forms";
import { readAllNotes } from "../lib/queries.server";
import { checkNoteFormData } from "../lib/validators.server";
import { createNote } from "../lib/mutations.server";

import NoteCard from "../components/NoteCard";

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
  return json({ success: true }, 200);
}

export default function Index() {
  const loaderData = useLoaderData();
  const actionData = useActionData();

  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Bun and Remix Template</h1>

      <Form className="flex flex-auto space-x-4 mt-8 " method="post">
        <div className="grid">
          <div className="sm:col-span-4">
            <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
              Title
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">http://</span>
                <input
                  id="website"
                  name="website"
                  type="text"
                  placeholder="www.example.com"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
              Body
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
          </div>
          <br />
          <button className="border-4 p-2 hover:bg-gray-400" type="submit">
            Submit
          </button>
        </div>

      </Form>

      {actionData?.errors?.title ? (
        <p className="text-red-500">{actionData.errors.title}</p>
      ) : null}

      {actionData?.errors?.body ? (
        <p className="text-red-500">{actionData.errors.body}</p>
      ) : null}

      {loaderData.notes.length !== 0 && (
        <div>
          <h2 className="text-4xl text-center mb-8">Notes</h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {loaderData.notes.map((note) => (
              <NoteCard note={note} key={note.id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
