"use client";

import { useEffect, useState } from "react";
import { Note } from "@/types/note";
import { loadNotes, saveNotes } from "@/lib/storage";

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);

  useEffect(() => {
    setNotes(loadNotes());

    const sync = () => setNotes(loadNotes());
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const persist = (updated: Note[]) => {
    setNotes(updated);
    saveNotes(updated);
  };

  const createNote = () => {
    const note: Note = {
      id: Date.now().toString(),
      title: "Untitled Note",
      content: "",
      versions: []
    };
    persist([note, ...notes]);
    setActiveNote(note);
  };

  const updateNote = (note: Note) => {
    const updated = notes.map(n =>
      n.id === note.id
        ? {
            ...note,
            versions: [
              { content: note.content, timestamp: Date.now() },
              ...note.versions
            ]
          }
        : n
    );
    persist(updated);
  };

  const deleteNote = (id: string) =>
    persist(notes.filter(n => n.id !== id));

  return {
    notes,
    activeNote,
    createNote,
    updateNote,
    deleteNote,
    setActiveNote
  };
}
