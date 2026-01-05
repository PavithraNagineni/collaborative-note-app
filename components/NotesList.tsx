import { Button, Card } from "@nextui-org/react";
import { Note } from "@/types/note";

export default function NotesList({
  notes,
  onCreate,
  onSelect,
  onDelete
}: any) {
  return (
    <div className="sidebar">
      <Button onPress={onCreate}>New Note</Button>
      {notes.map((n: Note) => (
        <Card key={n.id} onClick={() => onSelect(n)}>
          <div className="note-item">
            <span>{n.title}</span>
            <Button size="sm" onPress={() => onDelete(n.id)}>
              Delete
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
