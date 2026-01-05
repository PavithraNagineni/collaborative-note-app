export interface NoteVersion {
  content: string;
  timestamp: number;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  versions: NoteVersion[];
}
