"use client";

import NotesList from "@/components/NotesList";
import Editor from "@/components/Editor";
import VersionHistory from "@/components/VersionHistory";
import { useNotes } from "@/hooks/useNotes";

export default function Home() {
  const {
    notes,
    activeNote,
    createNote,
    updateNote,
    deleteNote,
    setActiveNote
  } = useNotes();

  return (
    <div className="app">
      <NotesList
        notes={notes}
        onCreate={createNote}
        onSelect={setActiveNote}
        onDelete={deleteNote}
      />

      {activeNote && (
        <>
          <Editor note={activeNote} onChange={updateNote} />
          <VersionHistory note={activeNote} onRestore={updateNote} />
        </>
      )}
    </div>
  );
}
