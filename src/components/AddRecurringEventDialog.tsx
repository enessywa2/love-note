import { useState } from "react";
import { Plus, Heart } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RecurringEvent } from "@/data/constants";

interface AddRecurringEventDialogProps {
  onAdd: (event: RecurringEvent) => void;
}

const emojis = ["💍", "🎂", "💝", "✨", "🌸", "💍", "🎁", "🥂", "💏", "🌹"];

export function AddRecurringEventDialog({ onAdd }: AddRecurringEventDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [emoji, setEmoji] = useState(emojis[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !month || !day) return;

    onAdd({
      title,
      month: parseInt(month),
      day: parseInt(day),
      emoji,
    });

    // Reset and close
    setTitle("");
    setMonth("");
    setDay("");
    setEmoji(emojis[0]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold transition-all active:scale-95">
          <Plus size={14} />
          Add something sweet
        </button>
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="month">Month</Label>
              <Select value={month} onValueChange={setMonth} required>
                <SelectTrigger id="month" className="rounded-xl">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => (
                    <SelectItem key={i + 1} value={(i + 1).toString()}>
                      {new Date(0, i).toLocaleString('en-US', { month: 'long' })}
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
                placeholder="e.g. 15"
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
            <Button type="submit" className="w-full rounded-2xl font-bold py-6">
              Save Special Moment
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
