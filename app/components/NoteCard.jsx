export default function NoteCard({ note }) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div data-testid="note-title" className="px-4 py-5 sm:px-6">{note.title}</div>
      <div className="px-4 py-5 sm:p-6">{note.body}</div>
    </div>
  );
}
