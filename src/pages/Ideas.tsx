import { useEffect, useMemo, useState } from "react";
import { Shuffle, Copy, Check, Sparkles } from "lucide-react";
import type { Idea } from "@/data/ideas";
import { toast } from "sonner";

type IdeasModule = typeof import("@/data/ideas");

export default function Ideas() {
  const [ideasModule, setIdeasModule] = useState<IdeasModule | null>(null);
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [filteredIdeas, setFilteredIdeas] = useState<Idea[]>([]);
  const [sampleIdeasByScenario, setSampleIdeasByScenario] = useState<Record<string, Idea[]>>({});
  const [randomPick, setRandomPick] = useState<Idea | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [itemsToShow, setItemsToShow] = useState(30);

  useEffect(() => {
    let active = true;

    import("@/data/ideas").then((module) => {
      if (active) {
        setIdeasModule(module);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    setItemsToShow(30);
  }, [selectedScenario]);

  useEffect(() => {
    if (!selectedScenario || !ideasModule) {
      setFilteredIdeas([]);
      return;
    }

    let active = true;

    ideasModule.getIdeasByScenario(selectedScenario).then((ideas) => {
      if (active) {
        setFilteredIdeas(ideas);
      }
    });

    return () => {
      active = false;
    };
  }, [selectedScenario, ideasModule]);

  useEffect(() => {
    if (!ideasModule) return;

    let active = true;

    const loadPreviewIdeas = async () => {
      const previewScenarios = ideasModule.scenarios.slice(0, 4);
      const entries = await Promise.all(
        previewScenarios.map(async (scenario) => {
          const ideas = await ideasModule.getIdeasByScenario(scenario.id);
          return [scenario.id, ideas.slice(0, 2)] as const;
        })
      );

      if (active) {
        setSampleIdeasByScenario(Object.fromEntries(entries));
      }
    };

    loadPreviewIdeas();

    return () => {
      active = false;
    };
  }, [ideasModule]);

  const visibleIdeas = useMemo(() => filteredIdeas.slice(0, itemsToShow), [filteredIdeas, itemsToShow]);
  const hasMore = visibleIdeas.length < filteredIdeas.length;

  const handleRandom = async () => {
    if (!ideasModule) return;
    const idea = await ideasModule.getRandomIdea(selectedScenario || undefined);
    setRandomPick(idea);
  };

  const handleCopy = async (idea: Idea) => {
    await navigator.clipboard.writeText(idea.text);
    setCopiedId(idea.id);
    toast.success("Copied to clipboard! 💕");
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!ideasModule) {
    return (
      <div className="page-container">
        <div className="mb-6 animate-fade-up">
          <h1 className="text-2xl font-extrabold text-foreground">
            Idea Generator <span className="inline-block">💡</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Loading your ideas…</p>
        </div>
      </div>
    );
  }

  const { scenarios } = ideasModule;

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

      {/* Ideas List or Preview */}
      {selectedScenario ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-card/80 px-4 py-3 text-[13px] text-foreground/70">
            <span>
              Showing {visibleIdeas.length} of {filteredIdeas.length} {filteredIdeas.length === 1 ? "idea" : "ideas"}
            </span>
            {hasMore ? (
              <button
                onClick={() => setItemsToShow((prev) => Math.min(prev + 30, filteredIdeas.length))}
                className="font-bold text-primary hover:text-primary/80 transition-colors"
              >
                Load more
              </button>
            ) : (
              <span className="text-primary/80">All ideas loaded</span>
            )}
          </div>

          <div className="space-y-3">
            {visibleIdeas.map((idea, i) => (
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
        </div>
      ) : (
        <div className="space-y-8 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <div className="grid grid-cols-1 gap-6">
            {scenarios.slice(0, 4).map((scenario) => {
              const sampleIdeas = sampleIdeasByScenario[scenario.id] ?? [];
              return (
                <div key={scenario.id} className="space-y-3">
                  <div className="flex items-center gap-2 px-1">
                    <span className="text-sm font-bold text-foreground/80">{scenario.emoji} {scenario.label}</span>
                    <div className="h-[1px] flex-1 bg-border/30" />
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {sampleIdeas.map((idea) => (
                      <div
                        key={idea.id}
                        className="glass-card rounded-2xl p-4 flex items-start gap-3 bg-white/30 dark:bg-slate-900/20"
                      >
                        <p className="flex-1 text-sm text-foreground/80 leading-relaxed">{idea.text}</p>
                        <button
                          onClick={() => handleCopy(idea)}
                          className="p-2 rounded-xl bg-muted/30 text-muted-foreground hover:text-primary transition-all"
                        >
                          {copiedId === idea.id ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
                        </button>
                      </div>
                    ))}
                    <button 
                      onClick={() => setSelectedScenario(scenario.id)}
                      className="text-[10px] font-bold uppercase tracking-widest text-primary/60 hover:text-primary transition-colors text-center py-1"
                    >
                      View More {scenario.label} →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center py-4 opacity-50">
            <p className="text-[10px] font-bold tracking-widest uppercase italic">More categories available above ✨</p>
          </div>
        </div>
      )}
    </div>
  );
}
