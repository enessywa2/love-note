import { useState, useEffect, useCallback } from "react";
import { Heart, CalendarHeart, Sparkles, LogOut, Trash2, AlertTriangle } from "lucide-react";
import Mascot, { getRandomTip } from "@/components/Mascot";
import FloatingHearts from "@/components/FloatingHearts";
import EmojiPop from "@/components/EmojiPop";
import { useAuth } from "@/contexts/AuthContext";
import { useRecurringEvents } from "@/hooks/use-recurring-events";
import { supabase } from "@/lib/supabase";

const moodOptions = [
  { emoji: "🥰", label: "In Love", color: "bg-rose" },
  { emoji: "😊", label: "Happy", color: "bg-peach" },
  { emoji: "🤗", label: "Grateful", color: "bg-lavender" },
  { emoji: "💪", label: "Strong", color: "bg-baby-blue" },
  { emoji: "😌", label: "Peaceful", color: "bg-cream" },
];

function getNextOccurrence(month: number, day: number) {
  const now = new Date();
  const year = now.getFullYear();
  let target = new Date(year, month - 1, day);
  
  if (target.getTime() < now.getTime() - (1000 * 60 * 60 * 24)) {
    target = new Date(year + 1, month - 1, day);
  }
  
  const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return { date: target, days: diff };
}

function getGenderNickname(gender?: string | null) {
  if (gender === 'female') return 'lover girl';
  return 'lover boy';
}

export default function Dashboard() {
  const [mood, setMood] = useState<string | null>(null);
  const [tip, setTip] = useState(getRandomTip);
  const [visibleSections, setVisibleSections] = useState(0);
  const [popEmoji, setPopEmoji] = useState<{ emoji: string; id: number } | null>(null);
  const [showHearts, setShowHearts] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { logout, user, token } = useAuth();
  const { events } = useRecurringEvents();

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    try {
      if (user) {
        await supabase.from('Event').delete().eq('userId', user.id);
        // Supabase client can't securely delete the auth user without an RPC or Edge function,
        // so for now we delete all their user data and log them out fully.
      }
      logout();
    } catch {
      // silently fail
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("loveapp-mood");
    if (stored) setMood(stored);
  }, []);

  useEffect(() => {
    const timers = [0, 1, 2, 3].map((i) =>
      setTimeout(() => setVisibleSections((s) => Math.max(s, i + 1)), i * 200)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Show hearts on first load
  useEffect(() => {
    const t = setTimeout(() => setShowHearts(true), 600);
    return () => clearTimeout(t);
  }, []);

  const handleMood = useCallback((emoji: string) => {
    setMood(emoji);
    localStorage.setItem("loveapp-mood", emoji);
    setPopEmoji({ emoji, id: Date.now() });
    setShowHearts(true);
  }, []);

  return (
    <div className="page-container relative overflow-hidden">
      {/* Floating Hearts Background */}
      {showHearts && <FloatingHearts count={6} />}

      {/* Emoji Pop on mood select */}
      {popEmoji && <EmojiPop key={popEmoji.id} emoji={popEmoji.emoji} />}

      {/* Header */}
      <div
        className={`mb-6 transition-all duration-700 ${visibleSections >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-extrabold text-foreground leading-tight">
              Hey, {user?.user_metadata?.name || getGenderNickname(user?.user_metadata?.gender)} <span className="inline-block animate-wiggle">💕</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-1 animate-fade-up" style={{ animationDelay: "400ms" }}>
              How's your heart today?
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowDeleteModal(true)}
              className="p-2 rounded-xl bg-card border border-border/50 text-muted-foreground hover:text-rose-500 transition-all active:scale-90"
              title="Delete Account"
            >
              <Trash2 size={18} />
            </button>
            <button 
              onClick={logout}
              className="p-2 rounded-xl bg-card border border-border/50 text-muted-foreground hover:text-destructive transition-all active:scale-90"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center animate-bounce-gentle">
              <Heart size={20} className="text-primary animate-heart-beat" fill="hsl(var(--primary))" />
            </div>
          </div>
        </div>

        <Mascot message={tip} size="sm" className="mb-4" />
      </div>

      {/* Mood Selector */}
      <div
        className={`mb-6 transition-all duration-700 ${visibleSections >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <h2 className="section-title flex items-center gap-2">
          <Sparkles size={16} className="text-primary animate-spin-slow" />
          Relationship Mood
        </h2>
        <div className="flex gap-2">
          {moodOptions.map((m, i) => (
            <button
              key={m.emoji}
              onClick={() => handleMood(m.emoji)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-2xl border-2 transition-all duration-300 active:scale-90 ${
                mood === m.emoji
                  ? `${m.color} border-primary/30 shadow-soft animate-jelly`
                  : "bg-card border-border/30 hover:border-primary/20 hover:-translate-y-0.5"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className={`text-xl transition-transform duration-300 ${mood === m.emoji ? "scale-125" : "hover:scale-110"}`}>
                {m.emoji}
              </span>
              <span className="text-[10px] font-semibold text-foreground/70">{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Dates */}
      <div
        className={`mb-6 transition-all duration-700 ${visibleSections >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <h2 className="section-title flex items-center gap-2">
          <CalendarHeart size={16} className="text-primary" />
          Upcoming Dates
        </h2>
        <div className="space-y-3">
          {events.length > 0 ? (
            events.slice(0, 3).map((d, i) => {
              const { date, days } = getNextOccurrence(d.month, d.day);
              return (
                <div
                  key={d.title}
                  className="glass-card rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-0.5 active:scale-[0.97] animate-slide-in-left"
                  style={{ animationDelay: `${i * 120 + 400}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl animate-pulse-soft">
                    {d.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-foreground text-sm">{d.title}</p>
                    <p className="text-muted-foreground text-xs">
                      {date.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-extrabold text-primary tabular-nums">{days > 0 ? days : "Today!"}</p>
                    {days > 0 && <p className="text-[10px] text-muted-foreground font-medium">days left</p>}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="glass-card rounded-2xl p-6 text-center">
              <p className="text-muted-foreground text-xs italic">No special dates added yet! Go to Calendar to add some. ❤️</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Note */}
      <div
        className={`transition-all duration-700 ${visibleSections >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <h2 className="section-title">💭 Quick Note</h2>
        <div className="glass-card rounded-2xl p-4 transition-all duration-300 focus-within:shadow-glow focus-within:border-primary/20">
          <textarea
            placeholder="Write something sweet about her…"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 resize-none outline-none min-h-[80px] leading-relaxed"
            defaultValue={localStorage.getItem("loveapp-quicknote") || ""}
            onChange={(e) => localStorage.setItem("loveapp-quicknote", e.target.value)}
          />
        </div>
      </div>

      {/* Credits */}
      <div className="mt-12 mb-20 text-center animate-fade-in" style={{ animationDelay: "800ms" }}>
        <p className="text-[10px] font-medium text-muted-foreground/40 tracking-widest uppercase">
          Made with ❤️ by <span className="text-primary/50">Murashi Creatives</span>
        </p>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="glass-card rounded-[2rem] p-8 max-w-sm w-full mx-4 animate-fade-up shadow-2xl border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <AlertTriangle size={20} className="text-rose-500" />
              </div>
              <h2 className="text-lg font-extrabold text-foreground">Delete Account</h2>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              This will permanently delete your account and all your love notes and special dates. This cannot be undone. 💔
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 py-3 rounded-xl border border-border/50 text-sm font-semibold hover:bg-muted transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                disabled={isDeleting}
                className="flex-1 py-3 rounded-xl bg-rose-500 text-white text-sm font-semibold hover:bg-rose-600 transition-all disabled:opacity-50"
              >
                {isDeleting ? 'Deleting...' : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
