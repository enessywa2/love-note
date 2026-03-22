import { useState, useEffect } from "react";
import { LoveEvent, RECURRING_EVENTS } from "@/data/constants";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

export function useEvents() {
  const [events, setEvents] = useState<LoveEvent[]>([]);
  const { token, user } = useAuth();

  useEffect(() => {
    if (!token || !user) {
      setEvents(RECURRING_EVENTS);
      return;
    }

    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('Event')
          .select('*')
          .eq('userId', user.id);
          
        if (error) throw error;
        if (data) setEvents(data as unknown as LoveEvent[]);
      } catch (err) {
        console.error("Failed to fetch events", err);
      }
    };

    fetchEvents();
  }, [token, user]);

  const addEvent = async (newEvent: LoveEvent) => {
    if (!token || !user) {
      setEvents([...events, newEvent]);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('Event')
        .insert([{ ...newEvent, userId: user.id }])
        .select()
        .single();

      if (error) throw error;
      if (data) {
        setEvents([...events, data as unknown as LoveEvent]);
        toast.success("Event added! ✨");
      }
    } catch (err) {
      console.error("Failed to add event:", err);
      toast.error("Failed to save event");
    }
  };

  const removeEvent = async (id: string) => {
    if (!token || !user) {
      setEvents(events.filter((e) => e.id !== id));
      return;
    }

    try {
      const { error } = await supabase
        .from('Event')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setEvents(events.filter((e) => e.id !== id));
      toast.success("Event removed");
    } catch (err) {
      console.error("Failed to delete event:", err);
      toast.error("Failed to delete event");
    }
  };

  return { events, addEvent, removeEvent };
}
