import ideasDataUrl from './ideas.json?url';

export interface Idea {
  id: string;
  category: string;
  scenario: string;
  text: string;
  emoji: string;
}

export const scenarios = [
  { id: "good-morning", label: "Morning Vibes", emoji: "🌅", color: "bg-peach" },
  { id: "shes-sad", label: "She's Down 🥺", emoji: "🥺", color: "bg-baby-blue" },
  { id: "you-messed-up", label: "I Messed Up 💀", emoji: "😬", color: "bg-rose" },
  { id: "random-affection", label: "Random Love", emoji: "💕", color: "bg-lavender" },
  { id: "miss-you", label: "Missing You", emoji: "💭", color: "bg-cream" },
  { id: "date-ideas", label: "Date Plans", emoji: "🌸", color: "bg-rose" },
  { id: "compliments", label: "Slay/Cute ✨", emoji: "✨", color: "bg-peach" },
  { id: "apologies", label: "My Bad 🥀", emoji: "🥀", color: "bg-lavender" },
  { id: "goodnight", label: "Night Vibes", emoji: "🌙", color: "bg-baby-blue" },
  { id: "just-because", label: "Just Bc 🎀", emoji: "🎀", color: "bg-cream" },
] as const;

let ideasCache: Idea[] | null = null;
let ideasPromise: Promise<Idea[]> | null = null;

async function loadIdeas(): Promise<Idea[]> {
  if (ideasCache) {
    return ideasCache;
  }

  if (!ideasPromise) {
    ideasPromise = fetch(ideasDataUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ideas data: ${response.status}`);
        }
        return response.json() as Promise<Idea[]>;
      })
      .then((data) => {
        ideasCache = data;
        return ideasCache;
      });
  }

  return ideasPromise;
}

export async function getIdeasByScenario(scenarioId: string): Promise<Idea[]> {
  const ideas = await loadIdeas();
  return ideas.filter((idea) => idea.scenario === scenarioId);
}

export async function getRandomIdea(scenarioId?: string): Promise<Idea> {
  const ideas = await loadIdeas();
  const pool = scenarioId ? (await getIdeasByScenario(scenarioId)) : ideas;
  return pool[Math.floor(Math.random() * pool.length)];
}