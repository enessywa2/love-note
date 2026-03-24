import { useState, useEffect, useCallback } from "react";
import { Heart, CalendarHeart, Sparkles, LogOut, Trash2, AlertTriangle, Bell, UserPlus, Link2, Unlink } from "lucide-react";
import Mascot, { getRandomTip } from "@/components/Mascot";
import FloatingHearts from "@/components/FloatingHearts";
import EmojiPop from "@/components/EmojiPop";
import { useAuth } from "@/contexts/AuthContext";
import { usePartner } from "@/contexts/PartnerContext";
import { useEvents } from "@/hooks/use-recurring-events";
import { supabase } from "@/lib/supabase";
import { registerPushSubscription } from "@/lib/push";
import ImageCropper from "@/components/ImageCropper";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const moodOptions = [
  { emoji: "🥰", label: "Obsessed", color: "bg-rose" },
  { emoji: "💅", label: "Slaying", color: "bg-peach" },
  { emoji: "💀", label: "Dead", color: "bg-lavender" },
  { emoji: "🫠", label: "Melting", color: "bg-baby-blue" },
  { emoji: "🤡", label: "Clownin'", color: "bg-cream" },
  { emoji: "😤", label: "Locked In", color: "bg-rose" },
  { emoji: "🥺", label: "Pleading", color: "bg-peach" },
  { emoji: "🪫", label: "Drained", color: "bg-lavender" },
];

function getNextOccurrence(month: number, day: number, year?: number | null) {
  const today = new Date();
  const currentYear = today.getFullYear();
  
  if (year) {
    const eventDate = new Date(year, month - 1, day);
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return { date: eventDate, days: diffDays };
  }

  let eventDate = new Date(currentYear, month - 1, day);
  if (eventDate < today && !(eventDate.getDate() === today.getDate() && eventDate.getMonth() === today.getMonth())) {
    eventDate = new Date(currentYear + 1, month - 1, day);
  }
  const diffTime = eventDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return { date: eventDate, days: diffDays };
}

function getGenderNickname(gender?: string | null) {
  if (gender === 'female') return 'lover girl';
  return 'lover boy';
}

function LoverFrame() {
  const { user } = useAuth();
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [isCropperOpen, setIsCropperOpen] = useState(false);

  useEffect(() => {
    if (!user) return;
    const fetchPhoto = async () => {
      const { data } = await supabase
        .from('Photo')
        .select('imageBase64')
        .eq('userId', user.id)
        .eq('isProfileFrame', true)
        .order('createdAt', { ascending: false })
        .limit(1)
        .maybeSingle();
        
      if (data?.imageBase64) setImgSrc(data.imageBase64);
    };
    fetchPhoto();
  }, [user]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && user) {
      const reader = new FileReader();
      reader.onload = () => {
        setTempImage(reader.result as string);
        setIsCropperOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = async (croppedImage: string) => {
    if (!user) return;
    setIsCropperOpen(false);
    
    try {
      toast.loading("Saving your favorite photo... ✨", { id: "upload-frame" });
      setImgSrc(croppedImage);
      
      const { error } = await supabase.from('Photo').insert({
        userId: user.id,
        imageBase64: croppedImage,
        isProfileFrame: true
      });

      if (error) throw error;
      toast.success("Photo saved perfectly! 💕", { id: "upload-frame" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to save photo. 🖼️", { id: "upload-frame" });
    }
  };

  return (
    <div className="flex justify-center my-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 group">
        <div className="absolute inset-[-4px] bg-gradient-to-tr from-rose-400 via-pink-400 to-primary rounded-[2rem] rotate-[3deg] opacity-60 animate-pulse-soft"></div>
        <div className="absolute inset-[-4px] bg-gradient-to-bl from-rose-300 via-pink-300 to-primary rounded-[2rem] -rotate-[3deg] opacity-60 shadow-glow"></div>
        
        <div className="relative w-full h-full bg-card rounded-[2rem] overflow-hidden border-[4px] border-white/80 dark:border-slate-800 flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
          {imgSrc ? (
            <img src={imgSrc} alt="My Love" className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center justify-center text-muted-foreground/60 p-4 text-center">
              <Heart size={36} className="mb-2 animate-bounce-gentle text-primary/40" />
              <p className="text-[10px] font-bold opacity-70 uppercase tracking-wider">Our Spot</p>
            </div>
          )}
          
          <label className="absolute inset-0 cursor-pointer bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xs font-bold bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">Change Photo</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
        </div>

        <div className="absolute -bottom-3 -right-3 text-3xl animate-bounce-gentle" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute -top-3 -left-3 text-3xl animate-wiggle">💕</div>
      </div>

      {tempImage && (
        <ImageCropper
          image={tempImage}
          open={isCropperOpen}
          onCropComplete={handleCropComplete}
          onCancel={() => setIsCropperOpen(false)}
        />
      )}
    </div>
  );
}

export default function Dashboard() {
  const [mood, setMood] = useState<string | null>(null);
  const [tip] = useState(getRandomTip);
  const [visibleSections, setVisibleSections] = useState(0);
  const [popEmoji, setPopEmoji] = useState<{ emoji: string; id: number } | null>(null);
  const [showHearts, setShowHearts] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [partnerEmail, setPartnerEmail] = useState("");
  const [isLinking, setIsLinking] = useState(false);
  
  const { logout, user } = useAuth();
  const { partner, myMood, isLinked, linkPartner, unlinkPartner, updateMood: syncMoodWithDB } = usePartner();
  const { events } = useEvents();

  useEffect(() => {
    const timers = [0, 1, 2, 3].map((i) =>
      setTimeout(() => setVisibleSections((s) => Math.max(s, i + 1)), i * 350)
    );
    const hTimer = setTimeout(() => setShowHearts(true), 600);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(hTimer);
    };
  }, []);

  useEffect(() => {
    if (myMood) {
      setMood(myMood);
    }
  }, [myMood]);

  const handleMood = useCallback(async (emoji: string) => {
    setMood(emoji);
    localStorage.setItem("loveapp-mood", emoji);
    setPopEmoji({ emoji, id: Date.now() });
    setShowHearts(true);
    await syncMoodWithDB(emoji);
  }, [syncMoodWithDB]);

  const handleLinkPartner = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLinking(true);
    try {
      await linkPartner(partnerEmail);
      setPartnerEmail("");
    } catch (err) {
      // toast handled in context
    } finally {
      setIsLinking(false);
    }
  };

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    try {
      if (user) {
        await supabase.from('Event').delete().eq('userId', user.id);
      }
      logout();
    } catch {
      // silently fail
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="page-container relative overflow-hidden">
      {showHearts && <FloatingHearts count={6} />}
      {popEmoji && <EmojiPop key={popEmoji.id} emoji={popEmoji.emoji} />}

      {/* Header */}
      <div className={`mb-6 transition-all duration-700 ${visibleSections >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-extrabold text-foreground leading-tight">
              Hey, {user?.user_metadata?.name || getGenderNickname(user?.user_metadata?.gender)} <span className="inline-block animate-wiggle">💕</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-1">How's your heart today?</p>
          </div>
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <button className={`p-2 rounded-xl border transition-all active:scale-90 ${isLinked ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-card border-border/50 text-muted-foreground'}`}>
                  {isLinked ? <Heart size={18} fill="currentColor" /> : <UserPlus size={18} />}
                </button>
              </DialogTrigger>
              <DialogContent className="rounded-[2rem] max-w-[90vw] sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                    {isLinked ? <span className="text-primary">Linked! ✨</span> : <span>Link Partner</span>}
                  </DialogTitle>
                  <DialogDescription>
                    {isLinked 
                      ? `You are connected with ${partner?.name || partner?.email}. Shared features are now active!`
                      : "Enter your partner's email to link your accounts and share everything."}
                  </DialogDescription>
                </DialogHeader>
                
                {isLinked ? (
                  <div className="space-y-4 pt-4">
                    <div className="p-4 bg-muted/50 rounded-2xl border border-border/50">
                      <p className="text-sm font-bold mb-1">{partner?.name}</p>
                      <p className="text-xs text-muted-foreground">{partner?.email}</p>
                    </div>
                    <Button variant="destructive" className="w-full rounded-xl" onClick={unlinkPartner}>
                      <Unlink className="mr-2 h-4 w-4" /> Unlink Accounts
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleLinkPartner} className="space-y-4 pt-4">
                    <Input
                      placeholder="partner@example.com"
                      type="email"
                      value={partnerEmail}
                      onChange={(e) => setPartnerEmail(e.target.value)}
                      className="rounded-xl"
                      required
                    />
                    <Button type="submit" className="w-full rounded-xl" disabled={isLinking}>
                      {isLinking ? "Searching..." : <><Link2 className="mr-2 h-4 w-4" /> Link Account</>}
                    </Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>
            <ThemeToggle />
            <button
              onClick={() => setShowDeleteModal(true)}
              className="p-2 rounded-xl bg-card border border-border/50 text-muted-foreground hover:text-rose-500 transition-all active:scale-90"
            >
              <Trash2 size={18} />
            </button>
            <button 
              onClick={logout}
              className="p-2 rounded-xl bg-card border border-border/50 text-muted-foreground hover:text-destructive transition-all active:scale-90"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
        <Mascot message={tip} size="sm" className="mb-4" />
      </div>

      <LoverFrame />

      {/* Partner's Mood - Only if linked */}
      {isLinked && partner && (
        <div className="mb-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <div className="glass-card rounded-[2rem] p-5 border-l-4 border-l-primary flex items-center gap-4 bg-gradient-to-r from-primary/5 to-transparent">
            <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-3xl animate-bounce-gentle">
              {partner.mood || "❔"}
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-1">Partner's Feeling</p>
              <p className="text-base font-extrabold text-foreground">
                {partner.name || 'Your partner'} is feeling <span className="text-primary">{partner.mood ? moodOptions.find(m => m.emoji === partner.mood)?.label || 'some way' : 'nothing yet'}</span>
              </p>
              {partner.lastMoodUpdate && (
                <p className="text-[10px] text-muted-foreground mt-1 tabular-nums">
                  Updated {new Date(partner.lastMoodUpdate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mood Selector */}
      <div className={`mb-6 transition-all duration-700 ${visibleSections >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="section-title flex items-center gap-2">
          <Sparkles size={16} className="text-primary animate-spin-slow" />
          How are you feeling?
        </h2>
        <div className="grid grid-cols-4 gap-2">
          {moodOptions.map((m, i) => (
            <button
              key={m.emoji}
              onClick={() => handleMood(m.emoji)}
              className={`flex flex-col items-center gap-1 py-3 px-1 rounded-2xl border-2 transition-all duration-300 active:scale-90 ${
                mood === m.emoji
                  ? `${m.color} border-primary/30 shadow-soft animate-jelly z-10 scale-105`
                  : "bg-card border-border/30 hover:border-primary/20"
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className={`text-xl transition-transform duration-300 ${mood === m.emoji ? "scale-110" : "hover:scale-110"}`}>
                {m.emoji}
              </span>
              <span className="text-[9px] font-bold text-foreground/70 uppercase truncate w-full text-center">{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Dates */}
      <div className={`mb-6 transition-all duration-700 ${visibleSections >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="section-title flex items-center gap-2">
          <CalendarHeart size={16} className="text-primary" />
          Upcoming Dates
        </h2>
        <div className="space-y-3">
          {events.length > 0 ? (
            events
              .map(d => ({ ...d, ...getNextOccurrence(d.month, d.day, d.year) }))
              .filter(d => d.days >= 0)
              .sort((a, b) => a.days - b.days)
              .slice(0, 3)
              .map((d, i) => (
                <div
                  key={d.id || d.title}
                  className="glass-card rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-0.5 active:scale-[0.97] animate-slide-in-left"
                  style={{ animationDelay: `${i * 120 + 400}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl animate-pulse-soft">
                    {d.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-foreground text-sm">{d.title}</p>
                    <p className="text-muted-foreground text-xs">{d.date.toLocaleDateString("en-US", { month: "long", day: "numeric" })}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-extrabold text-primary tabular-nums">{d.days > 0 ? d.days : "Today!"}</p>
                    {d.days > 0 && <p className="text-[10px] text-muted-foreground font-medium">days left</p>}
                  </div>
                </div>
              ))
          ) : (
            <div className="glass-card rounded-2xl p-6 text-center border-dashed border-2">
              <p className="text-muted-foreground text-xs italic">No special dates added yet! ❤️</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Note */}
      <div className={`transition-all duration-700 ${visibleSections >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
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

      <div className="mt-12 mb-20 text-center opacity-30">
        <p className="text-[10px] font-bold tracking-widest uppercase">Made with ❤️ for you</p>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="glass-card rounded-[2rem] p-8 max-w-sm w-full animate-fade-up shadow-2xl border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <AlertTriangle size={20} className="text-rose-500" />
              </div>
              <h2 className="text-lg font-extrabold text-foreground">Delete Account</h2>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              This will permanently delete your account and all your data. This cannot be undone. 💔
            </p>
            <div className="flex gap-3">
              <button onClick={() => setShowDeleteModal(false)} className="flex-1 py-3 rounded-xl border border-border/50 text-sm font-semibold hover:bg-muted transition-all">Cancel</button>
              <button onClick={handleDeleteAccount} disabled={isDeleting} className="flex-1 py-3 rounded-xl bg-rose-500 text-white text-sm font-semibold hover:bg-rose-600 transition-all disabled:opacity-50">{isDeleting ? 'Deleting...' : 'Yes, Delete'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
