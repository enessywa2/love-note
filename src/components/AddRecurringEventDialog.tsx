import { useState, useEffect } from "react";
import { Plus, Heart, Calendar as CalendarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LoveEvent } from "@/data/constants";

interface AddEventDialogProps {
  onAdd: (event: LoveEvent) => void;
  defaultMonth?: number;
  defaultDay?: number;
  defaultYear?: number;
  trigger?: React.ReactNode;
}

const emojis = ["💍", "🎂", "💝", "✨", "🌸", "💍", "🎁", "🥂", "💏", "🌹"];

export function AddEventDialog({ onAdd, defaultMonth, defaultDay, defaultYear, trigger }: AddEventDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [month, setMonth] = useState(defaultMonth?.toString() || "");
  const [day, setDay] = useState(defaultDay?.toString() || "");
  const [year, setYear] = useState(defaultYear?.toString() || new Date().getFullYear().toString());
  const [isRecurring, setIsRecurring] = useState(!defaultYear);
  const [hasPlan, setHasPlan] = useState(false);
  const [emoji, setEmoji] = useState(emojis[0]);

  // Update values if defaults change (e.g. when clicking different days)
  useEffect(() => {
    if (defaultMonth) setMonth(defaultMonth.toString());
    if (defaultDay) setDay(defaultDay.toString());
    if (defaultYear) {
      setYear(defaultYear.toString());
      setIsRecurring(false);
    } else {
      setIsRecurring(true);
    }
    setHasPlan(false);
  }, [defaultMonth, defaultDay, defaultYear]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !month || !day) return;

    onAdd({
      title,
      month: parseInt(month),
      day: parseInt(day),
      year: isRecurring ? null : parseInt(year),
      emoji,
      hasPlan,
    });

    // Reset and close
    setTitle("");
    setMonth(defaultMonth?.toString() || "");
    setDay(defaultDay?.toString() || "");
    setYear(defaultYear?.toString() || new Date().getFullYear().toString());
    setIsRecurring(!defaultYear);
    setHasPlan(false);
    setEmoji(emojis[0]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ? trigger : (
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold transition-all active:scale-95">
            <Plus size={14} />
            Add something sweet
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            Add Special Date <Heart className="text-primary fill-primary" size={20} />
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Event Title</Label>
            <Input
              id="title"
              placeholder="e.g. Our Anniversary"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-xl"
              required
            />
          </div>

          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-2xl border border-border/50">
            <div className="space-y-0.5">
              <Label className="text-sm font-bold">Repeat Yearly</Label>
              <p className="text-[10px] text-muted-foreground">Every year on this date</p>
            </div>
            <Switch checked={isRecurring} onCheckedChange={setIsRecurring} />
          </div>

          <div className="flex items-center justify-between p-3 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="space-y-0.5">
              <Label className="text-sm font-bold text-primary">Special Plan ✨</Label>
              <p className="text-[10px] text-primary/60">I've already got something planned!</p>
            </div>
            <Switch checked={hasPlan} onCheckedChange={setHasPlan} />
          </div>

          <div className={`grid ${isRecurring ? 'grid-cols-2' : 'grid-cols-3'} gap-3 transition-all duration-300`}>
            {!isRecurring && (
              <div className="space-y-2 animate-scale-in">
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="rounded-xl"
                  required
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="month">Month</Label>
              <Select value={month} onValueChange={setMonth} required>
                <SelectTrigger id="month" className="rounded-xl">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => (
                    <SelectItem key={i + 1} value={(i + 1).toString()}>
                      {new Date(0, i).toLocaleString('en-US', { month: 'short' })}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="day">Day</Label>
              <Input
                id="day"
                type="number"
                min="1"
                max="31"
                placeholder="Day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="rounded-xl"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Pick an Emoji</Label>
            <div className="flex flex-wrap gap-2 pt-1">
              {emojis.map((e) => (
                <button
                  key={e}
                  type="button"
                  onClick={() => setEmoji(e)}
                  className={`w-10 h-10 flex items-center justify-center text-xl rounded-xl transition-all ${
                    emoji === e ? "bg-primary text-white shadow-glow scale-110" : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>
          <DialogFooter className="pt-4">
            <Button type="submit" className="w-full rounded-2xl font-bold py-6 bg-primary shadow-glow">
              Save Special Moment ✨
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
