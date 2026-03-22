import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  createdAt: string;
}

export function useNotes() {
  const { user } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const migrateAndFetch = async () => {
      try {
        // Migrate legacy local storage notes securely
        const local = localStorage.getItem("loveapp-notes");
        if (local) {
          const localNotes = JSON.parse(local) as Note[];
          if (localNotes.length > 0) {
            const formatted = localNotes.map((n) => ({
              userId: user.id,
              title: n.title,
              content: n.content,
              color: n.color,
              createdAt: new Date(n.createdAt).toISOString(),
            }));
            
            // Insert and permanently save cloud versions
            await supabase.from("Note").insert(formatted);
          }
          localStorage.removeItem("loveapp-notes");
        }

        // Fetch authoritative notes list from Supabase
        const { data, error } = await supabase
          .from("Note")
          .select("*")
          .eq("userId", user.id)
          .order("createdAt", { ascending: false });

        if (error) throw error;
        setNotes(data || []);
      } catch (err) {
        console.error(err);
        toast.error("Failed to sync notes.");
      } finally {
        setIsLoading(false);
      }
    };

    migrateAndFetch();
  }, [user]);

  const addNote = async (note: Omit<Note, "id" | "createdAt">) => {
    if (!user) return;

    // Optimistic UI
    const optimisticNote: Note = {
      ...note,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setNotes((prev) => [optimisticNote, ...prev]);

    const { data, error } = await supabase
      .from("Note")
      .insert({ ...note, userId: user.id })
      .select()
      .single();

    if (error) {
      toast.error("Failed to save note to cloud. 💕");
      setNotes((prev) => prev.filter((n) => n.id !== optimisticNote.id));
    } else if (data) {
      setNotes((prev) => prev.map((n) => (n.id === optimisticNote.id ? data : n)));
    }
  };

  const updateNote = async (id: string, updates: Partial<Note>) => {
    if (!user) return;

    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, ...updates } : n)));

    const { error } = await supabase
      .from("Note")
      .update(updates)
      .eq("id", id)
      .eq("userId", user.id);

    if (error) {
      toast.error("Failed to update note in cloud.");
    }
  };

  const deleteNote = async (id: string) => {
    if (!user) return;

    setNotes((prev) => prev.filter((n) => n.id !== id));

    const { error } = await supabase
      .from("Note")
      .delete()
      .eq("id", id)
      .eq("userId", user.id);

    if (error) {
      toast.error("Failed to delete note.");
    }
  };

  return { notes, isLoading, addNote, updateNote, deleteNote };
}
