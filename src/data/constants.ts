export interface RecurringEvent {
  title: string;
  month: number; // 1-12
  day: number;
  emoji: string;
}

export const APP_CONFIG = {
  userName: "lover boy",
  partnerName: "her",
  romanceStartDate: "2024-04-15",
};

export const RECURRING_EVENTS: RecurringEvent[] = [
  { title: "Anniversary 💍", month: 4, day: 15, emoji: "💍" },
  { title: "Her Birthday 🎂", month: 6, day: 22, emoji: "🎂" },
];

export const STATIC_PHRASES = [
  "You're the best thing that ever happened to me.",
  "Every day with you is a gift.",
  "I love you more than words can say.",
];

export const MASCOT_TIPS = [
  "Don't forget to tell her she's beautiful today! 💕",
  "A random 'I love you' text goes a long way 🥰",
  "Plan something special this weekend! 🌸",
  "Remember to listen, not just hear 💛",
  "Small gestures mean the most ✨",
  "When was the last time you surprised her? 🎀",
  "Ask about her day — and really listen 🤗",
];


