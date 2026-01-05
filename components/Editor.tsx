"use client";

import dynamic from "next/dynamic";
import { Note } from "@/types/note";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function Editor({
  note,
  onChange
}: {
  note: Note;
  onChange: (n: Note) => void;
}) {
  return (
    <div className="editor">
      <input
        value={note.title}
        onChange={e => onChange({ ...note, title: e.target.value })}
      />
      <ReactQuill
        value={note.content}
        onChange={content => onChange({ ...note, content })}
      />
    </div>
  );
}
