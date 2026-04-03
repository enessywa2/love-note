import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Heart, Mail, Lock, ArrowRight, Loader2, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const genderOptions = [
  { value: "male", emoji: "👨", label: "He / Him", desc: "lover boy vibes" },
  { value: "female", emoji: "👩", label: "She / Her", desc: "lover girl vibes" },
];

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name 💕");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name, gender },
      },
    });

    if (error) {
      toast.error(error.message || "Signup failed");
    } else {
      toast.success(`Welcome, ${name}! Your love story begins ✨`);
      navigate("/");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-rose-50 to-teal-50 dark:from-slate-950 dark:to-slate-900">
      <div className="w-full max-w-md animate-fade-up">
        <div className="text-center mb-8">
          <Link to="/welcome" className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-primary/10 mb-4 transition-transform hover:scale-110">
            <Heart className="text-primary fill-primary" size={32} />
          </Link>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
            {step === 1 ? "Let's Get Personal 💕" : "Almost There ✨"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {step === 1 ? "Tell us a little about yourself" : "Set up your secure account"}
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className={`h-2 w-10 rounded-full transition-all duration-300 ${step >= 1 ? "bg-primary" : "bg-muted"}`} />
            <div className={`h-2 w-10 rounded-full transition-all duration-300 ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
          </div>
        </div>

        <div className="glass-card p-8 rounded-[2rem] shadow-2xl border border-white/20 backdrop-blur-xl">
          {step === 1 ? (
            <form onSubmit={handleNext} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">What's your name?</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <Input id="name" type="text" placeholder="Your first name" className="pl-10 rounded-xl bg-white/50 dark:bg-slate-900/50 border-white/20 h-12" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
              </div>

              <div className="space-y-3">
                <Label>How do you identify?</Label>
                <div className="grid grid-cols-2 gap-3">
                  {genderOptions.map((opt) => (
                    <button key={opt.value} type="button" onClick={() => setGender(opt.value)}
                      className={`flex flex-col items-center gap-1 p-3 rounded-2xl border-2 transition-all duration-200 active:scale-95 ${gender === opt.value ? "border-primary bg-primary/10 shadow-soft" : "border-border/30 bg-card hover:border-primary/30"}`}>
                      <span className="text-2xl">{opt.emoji}</span>
                      <span className="text-xs font-bold text-foreground">{opt.label}</span>
                      <span className="text-[10px] text-muted-foreground">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full h-12 rounded-xl font-bold text-lg shadow-glow">
                Next <ChevronRight className="ml-2" size={18} />
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <Input id="email" type="email" placeholder="your@email.com" className="pl-10 rounded-xl bg-white/50 dark:bg-slate-900/50 border-white/20 h-12" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <Input id="password" type="password" placeholder="••••••••" className="pl-10 rounded-xl bg-white/50 dark:bg-slate-900/50 border-white/20 h-12" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <Input id="confirmPassword" type="password" placeholder="••••••••" className="pl-10 rounded-xl bg-white/50 dark:bg-slate-900/50 border-white/20 h-12" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button type="button" variant="outline" className="flex-1 h-12 rounded-xl" onClick={() => setStep(1)}>Back</Button>
                <Button type="submit" className="flex-1 h-12 rounded-xl font-bold text-lg shadow-glow" disabled={isLoading}>
                  {isLoading ? <Loader2 className="animate-spin" /> : <><ArrowRight className="mr-2" size={18} /> Create</>}
                </Button>
              </div>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-muted-foreground text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-bold hover:underline">Sign in here</Link>
            </p>
            <p className="mt-8 text-center text-[10px] font-medium text-muted-foreground/40 tracking-widest uppercase">
              Designed & Developed by <a href="https://github.com/enessywa1" target="_blank" rel="noopener noreferrer" className="text-primary/50 hover:underline">Murashi Creatives</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
