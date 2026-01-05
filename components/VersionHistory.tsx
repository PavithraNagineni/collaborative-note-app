import { Note } from "@/types/note";
import { Button } from "@nextui-org/react";

export default function VersionHistory({
  note,
  onRestore
}: {
  note: Note;
  onRestore: (n: Note) => void;
}) {
  return (
    <div className="versions">
      <h4>Version History</h4>
      {note.versions.map((v, i) => (
        <Button
          key={i}
          size="sm"
          onPress={() =>
            onRestore({ ...note, content: v.content })
          }
        >
          {new Date(v.timestamp).toLocaleTimeString()}
        </Button>
      ))}
    </div>
  );
}
