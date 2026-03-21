import ideasData from './ideas.json';

export interface Idea {
  id: string;
  category: string;
  scenario: string;
  text: string;
  emoji: string;
}

export const scenarios = [
  { id: "good-morning", label: "Good Morning", emoji: "🌅", color: "bg-peach" },
  { id: "shes-sad", label: "She's Sad", emoji: "🥺", color: "bg-baby-blue" },
  { id: "you-messed-up", label: "You Messed Up", emoji: "😬", color: "bg-rose" },
  { id: "random-affection", label: "Random Affection", emoji: "💕", color: "bg-lavender" },
  { id: "miss-you", label: "Miss You", emoji: "💭", color: "bg-cream" },
  { id: "date-ideas", label: "Date Ideas", emoji: "🌸", color: "bg-rose" },
  { id: "compliments", label: "Compliments", emoji: "✨", color: "bg-peach" },
  { id: "apologies", label: "Apologies", emoji: "🥀", color: "bg-lavender" },
  { id: "goodnight", label: "Goodnight", emoji: "🌙", color: "bg-baby-blue" },
  { id: "just-because", label: "Just Because", emoji: "🎀", color: "bg-cream" },
] as const;

export const ideas: Idea[] = ideasData as Idea[];

export function getIdeasByScenario(scenarioId: string): Idea[] {
  return ideas.filter(i => i.scenario === scenarioId);
}

export function getRandomIdea(scenarioId?: string): Idea {
  const pool = scenarioId ? getIdeasByScenario(scenarioId) : ideas;
  return pool[Math.floor(Math.random() * pool.length)];
}