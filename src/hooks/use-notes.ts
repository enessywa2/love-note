import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export interface Note {
  id: string;
  userId?: string;
  title: string;
  content: string;
  color: string;
  createdAt: string;
  synced?: boolean;
  dirty?: boolean;
}

const LOCAL_NOTES_KEY = "loveapp-notes-v2";

function loadLocalNotes() {
  try {
    const stored = localStorage.getItem(LOCAL_NOTES_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? (parsed as Note[]) : [];
  } catch (error) {
    console.error("Failed to load local notes", error);
    return [];
  }
}

function saveLocalNotes(notes: Note[]) {
  try {
    localStorage.setItem(LOCAL_NOTES_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error("Failed to save notes locally", error);
  }
}

function mergeRemoteNotes(localNotes: Note[], remoteNotes: Note[]) {
  const localById = new Map(localNotes.map((note) => [note.id, note]));

  const merged: Note[] = [
    ...localNotes.filter((note) => note.id.startsWith("local-") || note.dirty),
    ...remoteNotes
      .filter((remote) => {
        const local = localById.get(remote.id);
        return !local || !local.dirty;
      })
      .map((remote) => ({ ...remote, synced: true, dirty: false })),
  ];

  return merged.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function useNotes() {
  const { user } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const syncInProgressRef = useRef(false);

  useEffect(() => {
    if (!user) return;

    const localNotes = loadLocalNotes();
    if (localNotes.length > 0) {
      setNotes(localNotes);
      setIsLoading(false);
    }

    const migrateAndFetch = async () => {
      try {
        const legacy = localStorage.getItem("loveapp-notes");
        if (legacy) {
          const legacyNotes = JSON.parse(legacy) as Note[];
          if (legacyNotes.length > 0) {
            const formatted = legacyNotes.map((n) => ({
              userId: user.id,
              title: n.title,
              content: n.content,
              color: n.color,
              createdAt: new Date(n.createdAt).toISOString(),
            }));
            await supabase.from("Note").insert(formatted);
          }
          localStorage.removeItem("loveapp-notes");
        }

        const { data, error } = await supabase
          .from("Note")
          .select("*")
          .eq("userId", user.id)
          .order("createdAt", { ascending: false });

        if (error) throw error;

        const merged = mergeRemoteNotes(localNotes, data || []);
        setNotes(merged);
        saveLocalNotes(merged);
      } catch (err) {
        console.error(err);
        toast.error("Failed to sync notes.");
      } finally {
        setIsLoading(false);
      }
    };

    migrateAndFetch();
  }, [user]);

  useEffect(() => {
    if (!user || syncInProgressRef.current) return;

    const pendingNotes = notes.filter((note) => note.id.startsWith("local-") || note.dirty);
    if (pendingNotes.length === 0) return;

    syncInProgressRef.current = true;

    const syncPendingNotes = async () => {
      for (const pending of pendingNotes) {
        if (pending.id.startsWith("local-")) {
          try {
            const { data, error } = await supabase
              .from("Note")
              .insert({
                userId: user.id,
                title: pending.title,
                content: pending.content,
                color: pending.color,
                createdAt: pending.createdAt,
              })
              .select()
              .single();

            if (error) {
              console.error("Failed to sync pending note", pending.id, error);
              continue;
            }

            if (data) {
              setNotes((prev) => {
                const next = prev.map((note) =>
                  note.id === pending.id ? { ...data, synced: true, dirty: false } : note
                );
                saveLocalNotes(next);
                return next;
              });
            }
          } catch (error) {
            console.error("Failed to sync pending note", pending.id, error);
          }
        } else {
          try {
            const { error } = await supabase
              .from("Note")
              .update({
                title: pending.title,
                content: pending.content,
                color: pending.color,
              })
              .eq("id", pending.id)
              .eq("userId", user.id);

            if (error) {
              console.error("Failed to sync updated note", pending.id, error);
              continue;
            }

            setNotes((prev) => {
              const next = prev.map((note) =>
                note.id === pending.id ? { ...note, synced: true, dirty: false } : note
              );
              saveLocalNotes(next);
              return next;
            });
          } catch (error) {
            console.error("Failed to sync updated note", pending.id, error);
          }
        }
      }

      syncInProgressRef.current = false;
    };

    syncPendingNotes();
  }, [user, notes]);

  const addNote = async (note: Omit<Note, "id" | "createdAt" | "userId" | "synced" | "dirty">) => {
    if (!user) return;

    const optimisticNote: Note = {
      ...note,
      id: `local-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      createdAt: new Date().toISOString(),
      synced: false,
      dirty: false,
    };

    setNotes((prev) => {
      const next = [optimisticNote, ...prev];
      saveLocalNotes(next);
      return next;
    });

    const syncNote = async () => {
      const { data, error } = await supabase
        .from("Note")
        .insert({ ...note, userId: user.id })
        .select()
        .single();

      if (error) {
        console.error("Failed to save note to cloud", error);
        toast.error("Failed to save note to cloud. 💕");
        return;
      }

      if (data) {
        setNotes((prev) => {
          const next = prev.map((n) =>
            n.id === optimisticNote.id ? { ...data, synced: true, dirty: false } : n
          );
          saveLocalNotes(next);
          return next;
        });
      }
    };

    syncNote();
  };

  const updateNote = async (id: string, updates: Partial<Note>) => {
    if (!user) return;

    setNotes((prev) => {
      const next = prev.map((n) =>
        n.id === id ? { ...n, ...updates, dirty: true, synced: false } : n
      );
      saveLocalNotes(next);
      return next;
    });

    if (id.startsWith("local-")) {
      return;
    }

    const syncUpdate = async () => {
      const { error } = await supabase
        .from("Note")
        .update(updates)
        .eq("id", id)
        .eq("userId", user.id);

      if (error) {
        console.error("Failed to update note in cloud", error);
        toast.error("Failed to update note in cloud.");
        return;
      }

      setNotes((prev) => {
        const next = prev.map((n) =>
          n.id === id ? { ...n, ...updates, dirty: false, synced: true } : n
        );
        saveLocalNotes(next);
        return next;
      });
    };

    syncUpdate();
  };

  const deleteNote = async (id: string) => {
    if (!user) return;

    const removedNote = notes.find((note) => note.id === id);

    setNotes((prev) => {
      const next = prev.filter((n) => n.id !== id);
      saveLocalNotes(next);
      return next;
    });

    if (id.startsWith("local-")) {
      return;
    }

    const syncDelete = async () => {
      const { error } = await supabase
        .from("Note")
        .delete()
        .eq("id", id)
        .eq("userId", user.id);

      if (error) {
        console.error("Failed to delete note in cloud", error);
        toast.error("Failed to delete note.");
        if (removedNote) {
          setNotes((prev) => {
            const next = [removedNote, ...prev];
            saveLocalNotes(next);
            return next;
          });
        }
      }
    };

    syncDelete();
  };

  return { notes, isLoading, addNote, updateNote, deleteNote };
}
