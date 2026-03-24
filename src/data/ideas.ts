import ideasData from './ideas.json';

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

export const ideas: Idea[] = ideasData as Idea[];

export function getIdeasByScenario(scenarioId: string): Idea[] {
  return ideas.filter(i => i.scenario === scenarioId);
}

export function getRandomIdea(scenarioId?: string): Idea {
  const pool = scenarioId ? getIdeasByScenario(scenarioId) : ideas;
  return pool[Math.floor(Math.random() * pool.length)];
}