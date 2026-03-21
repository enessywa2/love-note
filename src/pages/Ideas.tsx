import { useState, useMemo } from "react";
import { Shuffle, Copy, Check, Sparkles } from "lucide-react";
import { scenarios, getIdeasByScenario, getRandomIdea, type Idea } from "@/data/ideas";
import { toast } from "sonner";

export default function Ideas() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [randomPick, setRandomPick] = useState<Idea | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredIdeas = useMemo(() => {
    if (!selectedScenario) return [];
    return getIdeasByScenario(selectedScenario);
  }, [selectedScenario]);

  const handleRandom = () => {
    const idea = getRandomIdea(selectedScenario || undefined);
    setRandomPick(idea);
  };

  const handleCopy = async (idea: Idea) => {
    await navigator.clipboard.writeText(idea.text);
    setCopiedId(idea.id);
    toast.success("Copied to clipboard! 💕");
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="page-container">
      <div className="mb-6 animate-fade-up">
        <h1 className="text-2xl font-extrabold text-foreground">
          Idea Generator <span className="inline-block">💡</span>
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Never run out of ways to show love</p>
      </div>

      {/* Random Picker */}
      <button
        onClick={handleRandom}
        className="w-full mb-6 bg-primary text-primary-foreground rounded-2xl p-4 flex items-center justify-center gap-3 font-bold text-sm shadow-glow transition-all duration-200 active:scale-[0.97] animate-fade-up"
        style={{ animationDelay: "100ms" }}
      >
        <Shuffle size={18} />
        Suggest something for me ✨
      </button>

      {/* Random Pick Display */}
      {randomPick && (
        <div className="mb-6 bg-lavender rounded-2xl p-5 border border-primary/10 animate-scale-in">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <span className="text-xs font-bold text-primary/70 uppercase tracking-wider">
                {scenarios.find(s => s.id === randomPick.scenario)?.label}
              </span>
              <p className="text-foreground text-sm mt-2 leading-relaxed">{randomPick.text}</p>
            </div>
            <button
              onClick={() => handleCopy(randomPick)}
              className="p-2 rounded-xl bg-card/60 text-primary transition-all duration-200 active:scale-90"
            >
              {copiedId === randomPick.id ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>
      )}

      {/* Scenario Tags */}
      <div className="mb-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
        <h2 className="section-title flex items-center gap-2">
          <Sparkles size={16} className="text-primary" />
          Choose a scenario
        </h2>
        <div className="flex flex-wrap gap-2">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedScenario(selectedScenario === s.id ? null : s.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 active:scale-95 ${
                selectedScenario === s.id
                  ? `${s.color} text-foreground shadow-soft border-2 border-primary/20`
                  : "bg-card text-foreground/70 border-2 border-border/40"
              }`}
            >
              {s.emoji} {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Ideas List */}
      {selectedScenario && (
        <div className="space-y-3">
          {filteredIdeas.map((idea, i) => (
            <div
              key={idea.id}
              className="glass-card rounded-2xl p-4 flex items-start gap-3 animate-fade-up active:scale-[0.98] transition-transform duration-200"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex-1">
                <p className="text-sm text-foreground leading-relaxed">{idea.text}</p>
              </div>
              <button
                onClick={() => handleCopy(idea)}
                className="p-2 rounded-xl bg-muted/50 text-muted-foreground hover:text-primary transition-all duration-200 active:scale-90 shrink-0"
              >
                {copiedId === idea.id ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
              </button>
            </div>
          ))}
        </div>
      )}

      {!selectedScenario && !randomPick && (
        <div className="text-center py-12 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <p className="text-4xl mb-3">🧸</p>
          <p className="text-muted-foreground text-sm">Pick a scenario above or let me suggest something!</p>
        </div>
      )}
    </div>
  );
}
