import { Note } from "@/types/note";

const KEY = "collab_notes";

export const loadNotes = (): Note[] =>
  JSON.parse(localStorage.getItem(KEY) || "[]");

export const saveNotes = (notes: Note[]) =>
  localStorage.setItem(KEY, JSON.stringify(notes));
