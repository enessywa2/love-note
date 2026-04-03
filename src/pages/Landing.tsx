import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  BookHeart,
  Image,
  Calendar,
  Lightbulb,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// ─── Floating particle ──────────────────────────────────────────────────────
interface Particle {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
}

function FloatingParticles() {
  const particles: Particle[] = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: 4 + Math.random() * 10,
    delay: Math.random() * 8,
    duration: 8 + Math.random() * 10,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-0 rounded-full opacity-0"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, hsl(340 72% 75% / 0.7), hsl(270 40% 80% / 0.4))`,
            animation: `ln-rise ${p.duration}s ${p.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}


// ─── Feature card ────────────────────────────────────────────────────────────
function FeatureCard({
  icon: Icon,
  title,
  body,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative rounded-3xl border border-white/20 bg-white/60 p-7 shadow-soft-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-glow dark:bg-slate-900/50 dark:border-white/10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ${delay}s cubic-bezier(0.16,1,0.3,1), transform 0.7s ${delay}s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      {/* glow blob */}
      <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />
      <div className="relative flex items-start gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-purple-400/20 shadow-soft">
          <Icon size={22} className="text-primary" strokeWidth={2} />
        </div>
        <div>
          <h3 className="mb-1.5 text-base font-extrabold text-foreground">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
        </div>
      </div>
    </div>
  );
}


// ─── Main Page ────────────────────────────────────────────────────────────────
export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const features = [
    {
      icon: BookHeart,
      title: "Love Notes",
      body: "Write heartfelt messages, love letters, and daily thoughts — all beautifully stored and shared in real time.",
    },
    {
      icon: Image,
      title: "Shared Gallery",
      body: "Build a private photo album together. Relive every precious moment in a space that belongs only to the two of you.",
    },
    {
      icon: Calendar,
      title: "Couple Calendar",
      body: "Plan dates, anniversaries, and milestones. Never forget what matters most with smart reminders.",
    },
    {
      icon: Lightbulb,
      title: "Date Ideas",
      body: "Feeling uninspired? Discover curated date ideas — from cozy nights in to spontaneous adventures.",
    },
    {
      icon: Users,
      title: "Partner Sync",
      body: "Link accounts with your partner and share moods, notes, and memories in real time — distance becomes irrelevant.",
    },
    {
      icon: ShieldCheck,
      title: "Private & Secure",
      body: "Your story is yours. End-to-end encryption and private accounts keep every detail between the two of you.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden font-nunito">
      {/* ── Custom keyframes injected via style tag ── */}
      <style>{`
        @keyframes ln-rise {
          0%   { transform: translateY(0) scale(1);   opacity: 0; }
          10%  { opacity: 0.6; }
          90%  { opacity: 0.2; }
          100% { transform: translateY(-110vh) scale(0.4); opacity: 0; }
        }
        @keyframes ln-wave {
          0%, 100% { transform: rotate(-6deg); }
          50%       { transform: rotate(6deg);  }
        }
        @keyframes ln-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes ln-glow-pulse {
          0%, 100% { opacity: 0.35; transform: scale(1);   }
          50%       { opacity: 0.55; transform: scale(1.08); }
        }
      `}</style>

      {/* ── Background gradient mesh ── */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(340 72% 80% / 0.25), transparent 65%)",
            animation: "ln-glow-pulse 7s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(270 40% 70% / 0.2), transparent 65%)",
            animation: "ln-glow-pulse 9s 2s ease-in-out infinite",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-purple-50/40 to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      </div>

      {/* ── Sticky nav ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-soft-lg dark:bg-slate-950/80"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-pink-400 shadow-glow">
            <Heart size={18} className="fill-white text-white" />
          </div>
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            Love<span className="text-primary">Notes</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-xl px-5 py-2 text-sm font-bold text-foreground/70 transition-colors hover:text-primary"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="rounded-xl bg-gradient-to-r from-primary to-pink-400 px-5 py-2 text-sm font-extrabold text-white shadow-glow transition-all hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-5 pb-16 pt-28 text-center">
        <FloatingParticles />

        {/* Badge */}
        <div
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary"
          style={{ animation: "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards" }}
        >
          <Sparkles size={12} /> The Couple App That Actually Gets It
        </div>

        {/* Headline */}
        <h1
          className="mb-5 max-w-3xl text-5xl font-black leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          style={{ animation: "fade-up 0.7s 0.1s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          Your Love Story,{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-primary via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Beautifully Kept
            </span>
            {/* underline squiggle */}
            <svg
              viewBox="0 0 260 14"
              className="absolute -bottom-2 left-0 w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10 Q65 2 130 10 Q195 18 258 10"
                stroke="hsl(340 72% 65%)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="280"
                strokeDashoffset="280"
                style={{ animation: "ln-draw 1.2s 0.8s ease forwards" }}
              />
            </svg>
          </span>
        </h1>

        <p
          className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground"
          style={{ animation: "fade-up 0.7s 0.2s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          LoveNotes is the private digital space built for couples — to share notes, memories,
          plans, and love. Keep your connection alive, no matter where you are.
        </p>

        <div
          className="flex flex-col items-center gap-4 sm:flex-row"
          style={{ animation: "fade-up 0.7s 0.3s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <Link
            to="/signup"
            className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-pink-400 px-8 py-4 text-base font-extrabold text-white shadow-glow transition-all hover:scale-105 hover:shadow-[0_0_32px_rgba(236,112,146,0.4)] active:scale-95"
          >
            Start Your Story Free
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            to="/login"
            className="rounded-2xl border border-border/50 bg-white/60 px-8 py-4 text-base font-bold text-foreground/80 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white dark:bg-slate-900/60 dark:hover:bg-slate-800"
          >
            I already have an account
          </Link>
        </div>

        {/* Floating app preview mockup */}
        <div
          className="relative mx-auto mt-20 w-full max-w-sm"
          style={{ animation: "fade-up 0.9s 0.5s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <div className="relative rounded-[2.5rem] border border-white/30 bg-white/70 p-5 shadow-soft-lg backdrop-blur-xl dark:bg-slate-900/70 dark:border-white/10">
            {/* fake phone notch bar */}
            <div className="mb-4 flex items-center gap-2.5">
              <div className="h-3 w-3 rounded-full bg-rose-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-emerald-400" />
              <div className="mx-auto h-5 w-24 rounded-full bg-muted/60" />
            </div>
            {/* fake note cards */}
            {[
              { color: "from-rose-100 to-pink-50 dark:from-rose-900/30 dark:to-pink-950/20", text: "Good morning, my love. Today is going to be wonderful because of you.", time: "8:03 AM" },
              { color: "from-purple-100 to-lavender dark:from-purple-900/30 dark:to-slate-900/20", text: "I found another date idea for us — stargazing this Saturday?", time: "2:41 PM" },
              { color: "from-sky-100 to-blue-50 dark:from-sky-900/30 dark:to-slate-900/20", text: "Added our anniversary to the calendar. Can't wait.", time: "Yesterday" },
            ].map((card, i) => (
              <div
                key={i}
                className={`mb-3 rounded-2xl bg-gradient-to-br ${card.color} p-4 last:mb-0`}
                style={{
                  animation: `fade-up 0.6s ${0.7 + i * 0.15}s cubic-bezier(0.16,1,0.3,1) both`,
                }}
              >
                <p className="text-sm text-foreground/80 leading-relaxed">{card.text}</p>
                <p className="mt-2 text-[11px] text-muted-foreground">{card.time}</p>
              </div>
            ))}
          </div>

          {/* Decorative orbiting hearts */}
          {[
            { top: "-16px", right: "24px", delay: "0s" },
            { bottom: "8px", left: "-20px", delay: "1.5s" },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 shadow-soft backdrop-blur-sm dark:bg-slate-800/80"
              style={{ ...pos as React.CSSProperties, animation: `float ${4 + i}s ${pos.delay} ease-in-out infinite` }}
            >
              <Heart size={18} className="fill-primary text-primary" />
            </div>
          ))}
        </div>
      </section>



      {/* ════════════════════════════════════════════════
          FEATURES
      ════════════════════════════════════════════════ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
            Everything you need
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-foreground">
            Built for real connection
          </h2>
          <p className="text-muted-foreground">
            Every feature is designed with one purpose — to help you and your partner feel closer,
            no matter how many miles apart.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24">
        {/* section bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent dark:from-primary/10 dark:via-purple-500/10" />

        <div className="relative mx-auto max-w-5xl px-5">
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              Simple as 1-2-3
            </p>
            <h2 className="mb-14 text-4xl font-black tracking-tight text-foreground">
              How LoveNotes works
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Create Your Account",
                body: "Sign up in under 60 seconds. No credit card, no fuss — just you and your story.",
              },
              {
                step: "02",
                title: "Connect Your Partner",
                body: "Share your unique link and link accounts. Instantly sync notes, moods, and memories.",
              },
              {
                step: "03",
                title: "Fall in Love, Daily",
                body: "Write, share, plan, and cherish. LoveNotes turns ordinary days into something extraordinary.",
              },
            ].map(({ step, title, body }, i) => (
              <div
                key={step}
                className="relative flex flex-col items-center text-center"
                style={{ animation: `fade-up 0.7s ${i * 0.15}s both` }}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-purple-400/20 text-2xl font-black text-primary shadow-soft">
                  {step}
                </div>
                {i < 2 && (
                  <div className="absolute top-8 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] border-t-2 border-dashed border-primary/20 sm:block" />
                )}
                <h3 className="mb-2 text-base font-extrabold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════ */}
      <section className="px-5 py-20">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-pink-400 to-purple-500 p-12 text-center shadow-[0_8px_60px_rgba(236,112,146,0.35)]">
          {/* background orbs */}
          <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-purple-300/20 blur-3xl" />

          <div className="relative">
            <div
              className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-sm"
              style={{ animation: "heart-beat 2.5s ease-in-out infinite" }}
            >
              <Heart size={30} className="fill-white text-white" strokeWidth={1.5} />
            </div>
            <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Your story deserves a home
            </h2>
            <p className="mx-auto mb-10 max-w-md text-base text-white/80 leading-relaxed">
              The private space your relationship deserves. Notes, memories, plans — all in one
              beautiful place. It takes less than a minute to begin.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-10 py-4 text-base font-extrabold text-primary shadow-soft-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
            >
              Create Your Free Account
              <ArrowRight size={18} />
            </Link>
            <p className="mt-5 text-xs text-white/50">
              Free forever. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border/40 py-10 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-pink-400 shadow-glow">
            <Heart size={14} className="fill-white text-white" />
          </div>
          <span className="text-base font-extrabold tracking-tight text-foreground">
            Love<span className="text-primary">Notes</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          Built with love by{" "}
          <a href="https://github.com/enessywa1" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary/70 hover:underline">Murashi Creatives</a>
        </p>
        <div className="mt-4 flex items-center justify-center gap-6 text-xs text-muted-foreground/60">
          <Link to="/login" className="hover:text-primary transition-colors">Sign In</Link>
          <Link to="/signup" className="hover:text-primary transition-colors">Sign Up</Link>
        </div>
      </footer>
    </div>
  );
}
