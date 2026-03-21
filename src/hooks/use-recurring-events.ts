import { useState, useEffect } from "react";
import { RecurringEvent, RECURRING_EVENTS } from "@/data/constants";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

export function useRecurringEvents() {
  const [events, setEvents] = useState<RecurringEvent[]>([]);
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
        if (data) setEvents(data as unknown as RecurringEvent[]);
      } catch (err) {
        console.error("Failed to fetch events", err);
      }
    };

    fetchEvents();
  }, [token, user]);

  const addEvent = async (newEvent: RecurringEvent) => {
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
        setEvents([...events, data as unknown as RecurringEvent]);
        toast.success("Event added! ✨");
      }
    } catch (err) {
      console.error("Failed to add event:", err);
      toast.error("Failed to save event");
    }
  };

  const removeEvent = async (idOrTitle: string | number) => {
    if (!token || !user) {
      setEvents(events.filter((e) => e.title !== idOrTitle));
      return;
    }

    const eventToRemove = events.find(e => (e as any).id === idOrTitle || e.title === idOrTitle);

    if (!eventToRemove || !(eventToRemove as any).id) {
       setEvents(events.filter((e) => e.title !== idOrTitle));
       return;
    }

    try {
      const { error } = await supabase
        .from('Event')
        .delete()
        .eq('id', (eventToRemove as any).id);

      if (error) throw error;
      
      setEvents(events.filter((e) => (e as any).id !== (eventToRemove as any).id));
      toast.success("Event removed");
    } catch (err) {
      console.error("Failed to delete event:", err);
      toast.error("Failed to delete event");
    }
  };

  return { events, addEvent, removeEvent };
}
