import { useState, useEffect } from "react";
import { RecurringEvent, RECURRING_EVENTS } from "@/data/constants";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export function useRecurringEvents() {
  const [events, setEvents] = useState<RecurringEvent[]>([]);
  const { token } = useAuth();
  const API_URL = "http://localhost:5001/api/events";

  useEffect(() => {
    if (!token) {
      setEvents(RECURRING_EVENTS);
      return;
    }

    const fetchEvents = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        }
      } catch (err) {
        console.error("Failed to fetch events", err);
      }
    };

    fetchEvents();
  }, [token]);

  const addEvent = async (newEvent: RecurringEvent) => {
    if (!token) {
      setEvents([...events, newEvent]);
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        const savedEvent = await response.json();
        setEvents([...events, savedEvent]);
        toast.success("Event added! ✨");
      }
    } catch (err) {
      console.error("Failed to add event:", err);
      toast.error("Failed to save event");
    }
  };

  const removeEvent = async (idOrTitle: string | number) => {
    if (!token) {
      setEvents(events.filter((e) => e.title !== idOrTitle));
      return;
    }

    const eventToRemove = events.find(e => (e as any).id === idOrTitle || e.title === idOrTitle);

    if (!eventToRemove || !(eventToRemove as any).id) {
       setEvents(events.filter((e) => e.title !== idOrTitle));
       return;
    }

    try {
      const response = await fetch(`${API_URL}/${(eventToRemove as any).id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        setEvents(events.filter((e) => (e as any).id !== (eventToRemove as any).id));
        toast.success("Event removed");
      }
    } catch (err) {
      console.error("Failed to delete event:", err);
      toast.error("Failed to delete event");
    }
  };

  return { events, addEvent, removeEvent };
}
