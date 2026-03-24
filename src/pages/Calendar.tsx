import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, ChevronDown, Trash2, Heart } from "lucide-react";
import { APP_CONFIG } from "@/data/constants";
import { useEvents } from "@/hooks/use-recurring-events";
import { AddEventDialog } from "@/components/AddRecurringEventDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { events, addEvent, removeEvent } = useEvents();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  // Generate a list of years for the dropdown (e.g., 5 years before and 10 years after)
  const years = Array.from({ length: 20 }, (_, i) => today.getFullYear() - 5 + i);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const setYear = (newYear: number) => setCurrentDate(new Date(newYear, month, 1));

  const getDateStr = (day: number) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const getEventsForDay = (day: number) => {
    const m = month + 1;
    const d = day;

    return events.filter(
      (e) => e.month === m && e.day === d && (e.year === null || e.year === undefined || e.year === year)
    );
  };

  const isToday = (day: number) =>
    today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;

  // For the selected day view, combine recurring and any one-time events (if we had them)
  const selectedEvents = selectedDate
    ? getEventsForDay(parseInt(selectedDate.split("-")[2]))
    : [];

  return (
    <div className="page-container">
      <div className="mb-6 animate-fade-up">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-foreground">
              Love Calendar <span className="inline-block">📅</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-1">Keep track of special moments</p>
          </div>
          <AddEventDialog onAdd={addEvent} />
        </div>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
        <button onClick={prevMonth} className="p-2 rounded-xl bg-card border border-border/50 transition-all duration-200 active:scale-90">
          <ChevronLeft size={18} className="text-foreground" />
        </button>
        
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold text-foreground">
            {currentDate.toLocaleDateString("en-US", { month: "long" })}
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
                {year} <ChevronDown size={12} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="max-h-[200px] overflow-y-auto">
              {years.map((y) => (
                <DropdownMenuItem key={y} onSelect={() => setYear(y)}>
                  {y} {y === today.getFullYear() && "•"}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <button onClick={nextMonth} className="p-2 rounded-xl bg-card border border-border/50 transition-all duration-200 active:scale-90">
          <ChevronRight size={18} className="text-foreground" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="glass-card rounded-2xl p-4 mb-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map((d) => (
            <div key={d} className="text-center text-[10px] font-bold text-muted-foreground py-1">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, i) => {
            if (day === null) return <div key={`empty-${i}`} />;
            const dateStr = getDateStr(day);
            const dayEvents = getEventsForDay(day);
            const hasEvent = dayEvents.length > 0;
            const hasPlan = dayEvents.some(e => e.hasPlan);
            const selected = selectedDate === dateStr;
            const todayClass = isToday(day);

            return (
              <button
                key={day}
                onClick={() => setSelectedDate(selected ? null : dateStr)}
                className={`relative aspect-square flex flex-col items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 ${
                  selected
                    ? "bg-primary text-primary-foreground shadow-glow scale-105 z-10"
                    : todayClass
                    ? "bg-primary/10 text-primary border-2 border-primary/20"
                    : hasPlan
                    ? "bg-amber-100/50 text-amber-700 border-2 border-amber-300 animate-pulse-subtle shadow-sm"
                    : hasEvent
                    ? "border border-primary/30 bg-primary/[0.02] text-foreground"
                    : "text-foreground hover:bg-muted/50"
                }`}
              >
                {day}
                {hasEvent && (
                  <div className={`absolute bottom-1 w-1.5 h-1.5 rounded-full ${selected ? "bg-primary-foreground" : hasPlan ? "bg-amber-500" : "bg-primary shadow-[0_0_8px_rgba(236,112,146,0.4)]"}`} />
                )}
                {hasPlan && !selected && (
                  <div className="absolute -top-1 -right-1 bg-amber-500 text-white rounded-full p-0.5 shadow-sm">
                    <Heart size={8} fill="currentColor" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Day Events */}
      {selectedDate && (
        <div className="animate-scale-in">
          <div className="flex items-center justify-between mb-3">
            <h3 className="section-title mb-0">
              {new Date(selectedDate + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            </h3>
          </div>
          {selectedEvents.length > 0 ? (
            <div className="space-y-3">
              {selectedEvents.map((e) => (
                <div key={e.id} className="glass-card rounded-2xl p-4 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{e.emoji}</span>
                    <span className="text-sm font-bold text-foreground">{e.title}</span>
                  </div>
                  <button 
                    onClick={() => removeEvent(e.id!)}
                    className="p-2 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <div className="pt-2">
                <AddEventDialog 
                  onAdd={addEvent}
                  defaultMonth={month + 1}
                  defaultDay={parseInt(selectedDate.split("-")[2])}
                  defaultYear={year}
                  trigger={
                    <button className="w-full py-3 rounded-2xl border-2 border-dashed border-primary/20 text-primary/60 text-xs font-bold hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
                      <Plus size={14} /> Add another event
                    </button>
                  }
                />
              </div>
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-6 text-center">
              <p className="text-muted-foreground text-sm mb-4">Nothing planned for this day yet!</p>
              <AddEventDialog 
                onAdd={addEvent}
                defaultMonth={month + 1}
                defaultDay={parseInt(selectedDate.split("-")[2])}
                defaultYear={year}
                trigger={
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-sm font-bold shadow-glow transition-all active:scale-95">
                    <Plus size={16} />
                    Plan a special moment
                  </button>
                }
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
