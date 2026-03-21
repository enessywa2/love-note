import { useState, useEffect } from "react";
import { Plus, X, Heart } from "lucide-react";

interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  createdAt: string;
}

const cardColors = [
  "bg-rose",
  "bg-lavender",
  "bg-peach",
  "bg-baby-blue",
  "bg-cream",
];

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("loveapp-notes");
    if (stored) setNotes(JSON.parse(stored));
  }, []);

  const saveNotes = (updated: Note[]) => {
    setNotes(updated);
    localStorage.setItem("loveapp-notes", JSON.stringify(updated));
  };

  const addNote = () => {
    if (!title.trim() && !content.trim()) return;
    const newNote: Note = {
      id: Date.now().toString(),
      title: title.trim() || "Untitled 💕",
      content: content.trim(),
      color: cardColors[Math.floor(Math.random() * cardColors.length)],
      createdAt: new Date().toISOString(),
    };
    saveNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
    setShowAdd(false);
  };

  const deleteNote = (id: string) => {
    saveNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="page-container">
      <div className="flex items-center justify-between mb-6 animate-fade-up">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">
            Love Notes <span className="inline-block">📝</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Things to remember about her</p>
        </div>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-glow transition-all duration-200 active:scale-90"
        >
          <Plus size={20} />
        </button>
      </div>

      {/* Add Note Form */}
      {showAdd && (
        <div className="mb-6 bg-card rounded-2xl p-5 border border-border/50 shadow-soft animate-scale-in">
          <input
            type="text"
            placeholder="Title (e.g. Her favorite flowers 🌷)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent text-sm font-bold text-foreground placeholder:text-muted-foreground/50 outline-none mb-3"
          />
          <textarea
            placeholder="Write your note here…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 resize-none outline-none min-h-[80px] leading-relaxed mb-3"
          />
          <div className="flex gap-2">
            <button
              onClick={addNote}
              className="flex-1 bg-primary text-primary-foreground rounded-xl py-2.5 text-sm font-bold transition-all duration-200 active:scale-95"
            >
              Save Note 💕
            </button>
            <button
              onClick={() => setShowAdd(false)}
              className="px-4 bg-muted text-muted-foreground rounded-xl py-2.5 text-sm font-bold transition-all duration-200 active:scale-95"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Notes Grid */}
      {notes.length > 0 ? (
        <div className="columns-2 gap-3 space-y-3">
          {notes.map((note, i) => (
            <div
              key={note.id}
              className={`${note.color} rounded-2xl p-4 break-inside-avoid border border-border/20 shadow-soft animate-fade-up transition-all duration-200 active:scale-[0.98]`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-sm font-bold text-foreground flex-1">{note.title}</h3>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="p-1 rounded-lg text-foreground/30 hover:text-destructive transition-colors active:scale-90"
                >
                  <X size={14} />
                </button>
              </div>
              {note.content && (
                <p className="text-xs text-foreground/70 leading-relaxed">{note.content}</p>
              )}
              <p className="text-[10px] text-foreground/30 mt-3 font-medium">
                {new Date(note.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 animate-fade-up">
          <Heart size={40} className="mx-auto text-primary/30 mb-4" />
          <p className="text-muted-foreground text-sm">No notes yet — start collecting memories! 💕</p>
        </div>
      )}
    </div>
  );
}
