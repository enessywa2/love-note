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

export const ideas: Idea[] = [
  {
    "id": "good-morning-1",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. You shine brighter than the sun. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-2",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. I just wanted to make sure you start your day with a smile. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-3",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. You are my entire world. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-4",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. I get to talk to you today, and that makes me so happy. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-5",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. You shine brighter than the sun. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-6",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. You are my entire world. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-7",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. I am so incredibly lucky to have you. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-8",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. Wishing I woke up next to you today. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-9",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. You were the last thing I thought about before I fell asleep. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-10",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. Just wanted to remind you how amazing you are. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-11",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. I just wanted to make sure you start your day with a smile. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-12",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. Another day, another reason to be grateful for you. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-13",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! I hope your day is as wonderful as you make mine. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-14",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. You are my entire world. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-15",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. I get to talk to you today, and that makes me so happy. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-16",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. Just wanted to remind you how amazing you are. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-17",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. You shine brighter than the sun. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-18",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. Thinking about you makes waking up easy. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-19",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! You shine brighter than the sun. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-20",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. I am so incredibly lucky to have you. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-21",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! Thinking about you makes waking up easy. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-22",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. I can't wait to see you later. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-23",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. Wishing I woke up next to you today. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-24",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! I get to talk to you today, and that makes me so happy. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-25",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. You make every morning feel special. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-26",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. Just wanted to remind you how amazing you are. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-27",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. You are my entire world. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-28",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! You are my entire world. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-29",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! You make every morning feel special. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-30",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. You are my entire world. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-31",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! I hope your day is as wonderful as you make mine. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-32",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. Just wanted to remind you how amazing you are. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-33",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. I just wanted to make sure you start your day with a smile. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-34",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. I hope your day is as wonderful as you make mine. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-35",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. I hope your day is as wonderful as you make mine. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-36",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. I just wanted to make sure you start your day with a smile. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-37",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. I hope your day is as wonderful as you make mine. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-38",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. Another day, another reason to be grateful for you. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-39",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. Wishing I woke up next to you today. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-40",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. I hope your day is as wonderful as you make mine. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-41",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. I hope your day is as wonderful as you make mine. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-42",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! Just wanted to remind you how amazing you are. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-43",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. Just wanted to remind you how amazing you are. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-44",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. You shine brighter than the sun. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-45",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. I am so incredibly lucky to have you. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-46",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! You're my favorite thought. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-47",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! Thinking about you makes waking up easy. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-48",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. You make every morning feel special. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-49",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. Just wanted to remind you how amazing you are. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-50",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! Thinking about you makes waking up easy. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-51",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! I am so incredibly lucky to have you. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-52",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! Another day, another reason to be grateful for you. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-53",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. You were the last thing I thought about before I fell asleep. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-54",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. You shine brighter than the sun. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-55",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! You shine brighter than the sun. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-56",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! You are my entire world. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-57",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. I get to talk to you today, and that makes me so happy. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-58",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. I can't wait to see you later. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-59",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! I get to talk to you today, and that makes me so happy. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-60",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. You're my favorite thought. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-61",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! I hope your day is as wonderful as you make mine. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-62",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! You're my favorite thought. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-63",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. I am so incredibly lucky to have you. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-64",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. I hope your day is as wonderful as you make mine. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-65",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. You're my favorite thought. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-66",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! You were the last thing I thought about before I fell asleep. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-67",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. Wishing I woke up next to you today. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-68",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! You shine brighter than the sun. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-69",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. I can't wait to see you later. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-70",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. Wishing I woke up next to you today. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-71",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! Thinking about you makes waking up easy. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-72",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. You shine brighter than the sun. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-73",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! I just wanted to make sure you start your day with a smile. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-74",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! Wishing I woke up next to you today. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-75",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. I get to talk to you today, and that makes me so happy. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-76",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! I can't wait to see you later. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-77",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! You're my favorite thought. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-78",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! Another day, another reason to be grateful for you. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-79",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. You were the last thing I thought about before I fell asleep. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-80",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. Wishing I woke up next to you today. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-81",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. Thinking about you makes waking up easy. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-82",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. I just wanted to make sure you start your day with a smile. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-83",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! I hope your day is as wonderful as you make mine. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-84",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! I just wanted to make sure you start your day with a smile. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-85",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! I can't wait to see you later. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-86",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! You are my entire world. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-87",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! You shine brighter than the sun. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-88",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. I hope your day is as wonderful as you make mine. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-89",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. Thinking about you makes waking up easy. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-90",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! Just wanted to remind you how amazing you are. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-91",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. Thinking about you makes waking up easy. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-92",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. I get to talk to you today, and that makes me so happy. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-93",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. I get to talk to you today, and that makes me so happy. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-94",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. Thinking about you makes waking up easy. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-95",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. I just wanted to make sure you start your day with a smile. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-96",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. Thinking about you makes waking up easy. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-97",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. I can't wait to see you later. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-98",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. You were the last thing I thought about before I fell asleep. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-99",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! Thinking about you makes waking up easy. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-100",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! Just wanted to remind you how amazing you are. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-101",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. I get to talk to you today, and that makes me so happy. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-102",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. Another day, another reason to be grateful for you. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-103",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. You make every morning feel special. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-104",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. I can't wait to see you later. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-105",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! I am so incredibly lucky to have you. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-106",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. Just wanted to remind you how amazing you are. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-107",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. You make every morning feel special. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-108",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. You were the last thing I thought about before I fell asleep. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-109",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! I am so incredibly lucky to have you. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-110",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. You're my favorite thought. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-111",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! Just wanted to remind you how amazing you are. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-112",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. You're my favorite thought. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-113",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. Wishing I woke up next to you today. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-114",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. Thinking about you makes waking up easy. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-115",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. You are my entire world. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-116",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. Another day, another reason to be grateful for you. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-117",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! You shine brighter than the sun. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-118",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! I can't wait to see you later. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-119",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. I am so incredibly lucky to have you. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-120",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. Just wanted to remind you how amazing you are. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-121",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. I hope your day is as wonderful as you make mine. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-122",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! You are my entire world. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-123",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! You make every morning feel special. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-124",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! I am so incredibly lucky to have you. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-125",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. Just wanted to remind you how amazing you are. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-126",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. You shine brighter than the sun. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-127",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! I hope your day is as wonderful as you make mine. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-128",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. I hope your day is as wonderful as you make mine. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-129",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. You are my entire world. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-130",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. You make every morning feel special. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-131",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. You make every morning feel special. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-132",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! You're my favorite thought. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-133",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. Thinking about you makes waking up easy. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-134",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. Thinking about you makes waking up easy. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-135",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! I get to talk to you today, and that makes me so happy. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-136",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! Wishing I woke up next to you today. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-137",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! You make every morning feel special. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-138",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. Wishing I woke up next to you today. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-139",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. I hope your day is as wonderful as you make mine. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-140",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. I just wanted to make sure you start your day with a smile. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-141",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! You're my favorite thought. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-142",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. I get to talk to you today, and that makes me so happy. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-143",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. You make every morning feel special. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-144",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. I just wanted to make sure you start your day with a smile. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-145",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. Wishing I woke up next to you today. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-146",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! You shine brighter than the sun. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-147",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. You're my favorite thought. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-148",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. Wishing I woke up next to you today. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-149",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! You shine brighter than the sun. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-150",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. You are my entire world. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-151",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. Thinking about you makes waking up easy. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-152",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. You shine brighter than the sun. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-153",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! I just wanted to make sure you start your day with a smile. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-154",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. Just wanted to remind you how amazing you are. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-155",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. I just wanted to make sure you start your day with a smile. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-156",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. You shine brighter than the sun. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-157",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. Wishing I woke up next to you today. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-158",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! You are my entire world. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-159",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. Another day, another reason to be grateful for you. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-160",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. I can't wait to see you later. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-161",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. I hope your day is as wonderful as you make mine. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-162",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! You are my entire world. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-163",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. You are my entire world. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-164",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. I can't wait to see you later. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-165",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. I just wanted to make sure you start your day with a smile. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-166",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! I am so incredibly lucky to have you. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-167",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. You are my entire world. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-168",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. You shine brighter than the sun. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-169",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. I hope your day is as wonderful as you make mine. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-170",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. I get to talk to you today, and that makes me so happy. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-171",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! I hope your day is as wonderful as you make mine. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-172",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. I hope your day is as wonderful as you make mine. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-173",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. You are my entire world. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-174",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. Another day, another reason to be grateful for you. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-175",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. Thinking about you makes waking up easy. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-176",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. I am so incredibly lucky to have you. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-177",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. I get to talk to you today, and that makes me so happy. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-178",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. You're my favorite thought. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-179",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! You shine brighter than the sun. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-180",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! Thinking about you makes waking up easy. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-181",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! I just wanted to make sure you start your day with a smile. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-182",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. You shine brighter than the sun. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-183",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! You're my favorite thought. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-184",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! Another day, another reason to be grateful for you. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-185",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. Thinking about you makes waking up easy. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-186",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. You are my entire world. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-187",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! You make every morning feel special. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-188",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. You're my favorite thought. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-189",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. Wishing I woke up next to you today. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-190",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. You were the last thing I thought about before I fell asleep. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-191",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. Another day, another reason to be grateful for you. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-192",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! I get to talk to you today, and that makes me so happy. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-193",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! I get to talk to you today, and that makes me so happy. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-194",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. You are my entire world. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-195",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! Thinking about you makes waking up easy. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-196",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! I get to talk to you today, and that makes me so happy. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-197",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. You were the last thing I thought about before I fell asleep. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-198",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. You shine brighter than the sun. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-199",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. You shine brighter than the sun. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-200",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. Thinking about you makes waking up easy. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-201",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. Thinking about you makes waking up easy. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-202",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. Wishing I woke up next to you today. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-203",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. Thinking about you makes waking up easy. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-204",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. You were the last thing I thought about before I fell asleep. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-205",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! I get to talk to you today, and that makes me so happy. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-206",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. You shine brighter than the sun. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-207",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. You were the last thing I thought about before I fell asleep. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-208",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! Thinking about you makes waking up easy. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-209",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. I am so incredibly lucky to have you. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-210",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. I hope your day is as wonderful as you make mine. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-211",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. I get to talk to you today, and that makes me so happy. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-212",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! Just wanted to remind you how amazing you are. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-213",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! I get to talk to you today, and that makes me so happy. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-214",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. You were the last thing I thought about before I fell asleep. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-215",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. Just wanted to remind you how amazing you are. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-216",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. You make every morning feel special. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-217",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. You shine brighter than the sun. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-218",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! You shine brighter than the sun. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-219",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. I just wanted to make sure you start your day with a smile. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-220",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! Thinking about you makes waking up easy. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-221",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. You shine brighter than the sun. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-222",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. You make every morning feel special. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-223",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. I get to talk to you today, and that makes me so happy. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-224",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. You are my entire world. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-225",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! Thinking about you makes waking up easy. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-226",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! You were the last thing I thought about before I fell asleep. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-227",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. Wishing I woke up next to you today. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-228",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! I can't wait to see you later. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-229",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. Wishing I woke up next to you today. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-230",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! You shine brighter than the sun. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-231",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. I hope your day is as wonderful as you make mine. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-232",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. I am so incredibly lucky to have you. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-233",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. Another day, another reason to be grateful for you. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-234",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. Wishing I woke up next to you today. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-235",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. I hope your day is as wonderful as you make mine. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-236",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. Thinking about you makes waking up easy. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-237",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! You make every morning feel special. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-238",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. You were the last thing I thought about before I fell asleep. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-239",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! I get to talk to you today, and that makes me so happy. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-240",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! I hope your day is as wonderful as you make mine. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-241",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. You make every morning feel special. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-242",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. Just wanted to remind you how amazing you are. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-243",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. I can't wait to see you later. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-244",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. I just wanted to make sure you start your day with a smile. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-245",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. Wishing I woke up next to you today. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-246",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. I just wanted to make sure you start your day with a smile. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-247",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. Thinking about you makes waking up easy. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-248",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. Wishing I woke up next to you today. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-249",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. I just wanted to make sure you start your day with a smile. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-250",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. You are my entire world. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-251",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. Just wanted to remind you how amazing you are. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-252",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. I just wanted to make sure you start your day with a smile. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-253",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! Just wanted to remind you how amazing you are. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-254",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning, beautiful. You were the last thing I thought about before I fell asleep. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-255",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! I hope your day is as wonderful as you make mine. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-256",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. I can't wait to see you later. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-257",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. Thinking about you makes waking up easy. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-258",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. Wishing I woke up next to you today. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-259",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. You shine brighter than the sun. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-260",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. I can't wait to see you later. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-261",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. I can't wait to see you later. 💕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-262",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. Another day, another reason to be grateful for you. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-263",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. I just wanted to make sure you start your day with a smile. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-264",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! You're my favorite thought. 💖",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-265",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. Just wanted to remind you how amazing you are. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-266",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. I hope your day is as wonderful as you make mine. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-267",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! Thinking about you makes waking up easy. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-268",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. You make every morning feel special. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-269",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. You make every morning feel special. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-270",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! Just wanted to remind you how amazing you are. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-271",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! I get to talk to you today, and that makes me so happy. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-272",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. I just wanted to make sure you start your day with a smile. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-273",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! You are my entire world. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-274",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. You were the last thing I thought about before I fell asleep. 🌻",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-275",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. Just wanted to remind you how amazing you are. ☕",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-276",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. Just wanted to remind you how amazing you are. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-277",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. I just wanted to make sure you start your day with a smile. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-278",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. Just wanted to remind you how amazing you are. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-279",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. You were the last thing I thought about before I fell asleep. 🌞",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-280",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. You shine brighter than the sun. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-281",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. I get to talk to you today, and that makes me so happy. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-282",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! You shine brighter than the sun. Have the best day! ☀️",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-283",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! Wishing I woke up next to you today. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-284",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Rise and shine, my love! Thinking about you makes waking up easy. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-285",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! You were the last thing I thought about before I fell asleep. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-286",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. I just wanted to make sure you start your day with a smile. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-287",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning! Fun fact: you're amazing. I can't wait to see you later. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-288",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning gorgeous. I can't wait to see you later. Love you! 🌅",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-289",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey sleepyhead. I am so incredibly lucky to have you. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-290",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Sun's up, my love! You were the last thing I thought about before I fell asleep. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-291",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. I am so incredibly lucky to have you. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-292",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! Another day, another reason to be grateful for you. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-293",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Good morning to the person who holds my heart. I can't wait to see you later. 💓",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-294",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. Thinking about you makes waking up easy. 🌷",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-295",
    "category": "texts",
    "scenario": "good-morning",
    "text": "I woke up smiling because of you. Another day, another reason to be grateful for you. ✨",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-296",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. You were the last thing I thought about before I fell asleep. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-297",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Wake up, my favorite person! I am so incredibly lucky to have you. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-298",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning, babe! I get to talk to you today, and that makes me so happy. Can't wait to see you. 💛",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-299",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Hey beautiful. Thinking about you makes waking up easy. 🥰",
    "emoji": "🌅"
  },
  {
    "id": "good-morning-300",
    "category": "texts",
    "scenario": "good-morning",
    "text": "Morning sweetie. Wishing I woke up next to you today. 🥐",
    "emoji": "🌅"
  },
  {
    "id": "shes-sad-1",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. You are safe with me. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-2",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. Let me take care of you. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-3",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. We will get through this together. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-4",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. You are safe with me. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-5",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. You're still the strongest person I know. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-6",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. Let me treat you to your favorite comfort food today. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-7",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. I'll always be your safe space. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-8",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. Please be gentle with yourself today. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-9",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. We will get through this together. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-10",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. You're still the strongest person I know. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-11",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. I admire how brave you are. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-12",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. I am in your corner, always. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-13",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. I admire how brave you are. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-14",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. We will get through this together. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-15",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. Know that I love you more than words can say. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-16",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. You are safe with me. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-17",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. Let me take care of you. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-18",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. Know that I love you more than words can say. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-19",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. I am in your corner, always. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-20",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. You're still the strongest person I know. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-21",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. Know that I love you more than words can say. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-22",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. You are safe with me. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-23",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. Please be gentle with yourself today. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-24",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. Want me to come over and just hold you? 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-25",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. I am in your corner, always. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-26",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. I'll always be your safe space. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-27",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. I'll always be your safe space. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-28",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. Let me treat you to your favorite comfort food today. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-29",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. Want me to come over and just hold you? 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-30",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. You are safe with me. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-31",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. I'm right here and I'm not going anywhere. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-32",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. I'll always be your safe space. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-33",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. You don't have to carry this alone. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-34",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. Know that I love you more than words can say. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-35",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. I admire how brave you are. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-36",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. Let me treat you to your favorite comfort food today. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-37",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. My heart breaks when yours hurts. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-38",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. You don't have to carry this alone. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-39",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. I'm right here and I'm not going anywhere. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-40",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. Please be gentle with yourself today. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-41",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. I am in your corner, always. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-42",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. Know that I love you more than words can say. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-43",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. Let me treat you to your favorite comfort food today. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-44",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. I'm right here and I'm not going anywhere. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-45",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. Want me to come over and just hold you? 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-46",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. Please be gentle with yourself today. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-47",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. Want me to come over and just hold you? 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-48",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. Know that I love you more than words can say. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-49",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. We will get through this together. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-50",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. My heart breaks when yours hurts. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-51",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. Let me treat you to your favorite comfort food today. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-52",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. I'll always be your safe space. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-53",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. You don't have to carry this alone. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-54",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. You're still the strongest person I know. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-55",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. I'll always be your safe space. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-56",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. I'll always be your safe space. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-57",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. I am in your corner, always. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-58",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. I'll always be your safe space. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-59",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. Let me take care of you. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-60",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. My heart breaks when yours hurts. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-61",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. Know that I love you more than words can say. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-62",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. You are safe with me. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-63",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. I admire how brave you are. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-64",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. I'm right here and I'm not going anywhere. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-65",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. Please be gentle with yourself today. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-66",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. Please be gentle with yourself today. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-67",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. You are safe with me. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-68",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. My heart breaks when yours hurts. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-69",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. I am in your corner, always. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-70",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. I'll always be your safe space. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-71",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. I am in your corner, always. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-72",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. Please be gentle with yourself today. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-73",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. We will get through this together. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-74",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. Let me treat you to your favorite comfort food today. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-75",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. Want me to come over and just hold you? 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-76",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. Please be gentle with yourself today. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-77",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. Want me to come over and just hold you? 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-78",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. We will get through this together. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-79",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. We will get through this together. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-80",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. I'm right here and I'm not going anywhere. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-81",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. I'm right here and I'm not going anywhere. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-82",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. You don't have to carry this alone. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-83",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. Let me treat you to your favorite comfort food today. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-84",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. You are safe with me. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-85",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. I am in your corner, always. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-86",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. You don't have to carry this alone. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-87",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. I am in your corner, always. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-88",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. You're still the strongest person I know. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-89",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. You are safe with me. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-90",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. You're still the strongest person I know. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-91",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. I'm right here and I'm not going anywhere. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-92",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. Let me treat you to your favorite comfort food today. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-93",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. You are safe with me. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-94",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. I'm right here and I'm not going anywhere. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-95",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. Please be gentle with yourself today. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-96",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. You're still the strongest person I know. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-97",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. You're still the strongest person I know. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-98",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. I'll always be your safe space. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-99",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. We will get through this together. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-100",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. You are safe with me. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-101",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. I'm right here and I'm not going anywhere. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-102",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. Please be gentle with yourself today. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-103",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. Let me take care of you. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-104",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. You're still the strongest person I know. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-105",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. My heart breaks when yours hurts. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-106",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. You don't have to carry this alone. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-107",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. Want me to come over and just hold you? 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-108",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. Let me treat you to your favorite comfort food today. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-109",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. You're still the strongest person I know. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-110",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. Please be gentle with yourself today. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-111",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. I'll always be your safe space. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-112",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. I'll always be your safe space. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-113",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. Let me treat you to your favorite comfort food today. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-114",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. I'm right here and I'm not going anywhere. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-115",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. You are safe with me. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-116",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. I am in your corner, always. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-117",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. Please be gentle with yourself today. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-118",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. You are safe with me. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-119",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. Let me take care of you. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-120",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. Let me take care of you. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-121",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. I'll always be your safe space. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-122",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. I am in your corner, always. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-123",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. I am in your corner, always. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-124",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. Know that I love you more than words can say. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-125",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. My heart breaks when yours hurts. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-126",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. I admire how brave you are. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-127",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. Want me to come over and just hold you? 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-128",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. We will get through this together. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-129",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. You don't have to carry this alone. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-130",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. I admire how brave you are. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-131",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. I admire how brave you are. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-132",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. You're still the strongest person I know. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-133",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. I am in your corner, always. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-134",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. We will get through this together. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-135",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. I admire how brave you are. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-136",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. You don't have to carry this alone. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-137",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. Let me take care of you. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-138",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. We will get through this together. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-139",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. Let me take care of you. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-140",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. Want me to come over and just hold you? 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-141",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. Let me treat you to your favorite comfort food today. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-142",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. Let me treat you to your favorite comfort food today. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-143",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. Want me to come over and just hold you? 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-144",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. Know that I love you more than words can say. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-145",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. You don't have to carry this alone. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-146",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. You are safe with me. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-147",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. You don't have to carry this alone. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-148",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. Want me to come over and just hold you? 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-149",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. Let me treat you to your favorite comfort food today. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-150",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. You're still the strongest person I know. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-151",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. My heart breaks when yours hurts. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-152",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. Want me to come over and just hold you? 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-153",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. Let me take care of you. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-154",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. I'm right here and I'm not going anywhere. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-155",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. I am in your corner, always. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-156",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. I admire how brave you are. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-157",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. Want me to come over and just hold you? 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-158",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. I'll always be your safe space. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-159",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. My heart breaks when yours hurts. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-160",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. You're still the strongest person I know. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-161",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. I am in your corner, always. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-162",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. Let me treat you to your favorite comfort food today. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-163",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. You are safe with me. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-164",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. You're still the strongest person I know. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-165",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. You don't have to carry this alone. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-166",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. You are safe with me. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-167",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. You are safe with me. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-168",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. Please be gentle with yourself today. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-169",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. You are safe with me. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-170",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. You don't have to carry this alone. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-171",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. You're still the strongest person I know. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-172",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. I am in your corner, always. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-173",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. Know that I love you more than words can say. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-174",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. You don't have to carry this alone. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-175",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. You don't have to carry this alone. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-176",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. Let me treat you to your favorite comfort food today. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-177",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. My heart breaks when yours hurts. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-178",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. I'll always be your safe space. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-179",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. You don't have to carry this alone. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-180",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. You're still the strongest person I know. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-181",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. My heart breaks when yours hurts. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-182",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. You don't have to carry this alone. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-183",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. Please be gentle with yourself today. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-184",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. Let me take care of you. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-185",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. Let me take care of you. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-186",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. I'm right here and I'm not going anywhere. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-187",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. Please be gentle with yourself today. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-188",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. I admire how brave you are. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-189",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. Want me to come over and just hold you? 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-190",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. Want me to come over and just hold you? 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-191",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. Know that I love you more than words can say. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-192",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. I'll always be your safe space. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-193",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. I admire how brave you are. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-194",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. I admire how brave you are. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-195",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. Want me to come over and just hold you? 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-196",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. You are safe with me. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-197",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. We will get through this together. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-198",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. I am in your corner, always. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-199",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. I'm right here and I'm not going anywhere. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-200",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. I'll always be your safe space. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-201",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. You're still the strongest person I know. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-202",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. I admire how brave you are. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-203",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. I am in your corner, always. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-204",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. I'm right here and I'm not going anywhere. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-205",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. You're still the strongest person I know. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-206",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. Know that I love you more than words can say. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-207",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. You are safe with me. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-208",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. Know that I love you more than words can say. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-209",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. Want me to come over and just hold you? 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-210",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. You don't have to carry this alone. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-211",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. Please be gentle with yourself today. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-212",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. You are safe with me. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-213",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. You are safe with me. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-214",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. I'll always be your safe space. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-215",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. Let me treat you to your favorite comfort food today. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-216",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. You don't have to carry this alone. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-217",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. Let me treat you to your favorite comfort food today. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-218",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. Please be gentle with yourself today. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-219",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. Please be gentle with yourself today. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-220",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. I am in your corner, always. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-221",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. Please be gentle with yourself today. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-222",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. You don't have to carry this alone. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-223",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. Want me to come over and just hold you? 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-224",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. I'm right here and I'm not going anywhere. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-225",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. My heart breaks when yours hurts. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-226",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. Let me treat you to your favorite comfort food today. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-227",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. You are safe with me. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-228",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. Want me to come over and just hold you? 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-229",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. Know that I love you more than words can say. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-230",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. Want me to come over and just hold you? 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-231",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. I'll always be your safe space. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-232",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. Know that I love you more than words can say. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-233",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. Let me treat you to your favorite comfort food today. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-234",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. I am in your corner, always. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-235",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. I am in your corner, always. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-236",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. I admire how brave you are. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-237",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. I'm right here and I'm not going anywhere. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-238",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. I'm right here and I'm not going anywhere. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-239",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. My heart breaks when yours hurts. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-240",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. I'll always be your safe space. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-241",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. I'm right here and I'm not going anywhere. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-242",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. You are safe with me. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-243",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. I'm right here and I'm not going anywhere. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-244",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. My heart breaks when yours hurts. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-245",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. You're still the strongest person I know. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-246",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. You don't have to carry this alone. 🤍",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-247",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. My heart breaks when yours hurts. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-248",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. You're still the strongest person I know. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-249",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. I admire how brave you are. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-250",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. You're still the strongest person I know. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-251",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. I'm right here and I'm not going anywhere. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-252",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. I'm right here and I'm not going anywhere. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-253",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. You don't have to carry this alone. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-254",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. You're still the strongest person I know. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-255",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. Let me take care of you. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-256",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. Know that I love you more than words can say. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-257",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. Want me to come over and just hold you? 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-258",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. Let me treat you to your favorite comfort food today. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-259",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. I'm right here and I'm not going anywhere. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-260",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. You're still the strongest person I know. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-261",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. You are safe with me. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-262",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. Let me treat you to your favorite comfort food today. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-263",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. I admire how brave you are. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-264",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. Please be gentle with yourself today. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-265",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. We will get through this together. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-266",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. We will get through this together. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-267",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. Want me to come over and just hold you? 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-268",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. My heart breaks when yours hurts. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-269",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. I'll always be your safe space. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-270",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. Please be gentle with yourself today. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-271",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm so sorry you're feeling this way. You are safe with me. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-272",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. I'm right here and I'm not going anywhere. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-273",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. You're still the strongest person I know. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-274",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. I am in your corner, always. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-275",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. You're still the strongest person I know. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-276",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. I'm right here and I'm not going anywhere. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-277",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. Let me take care of you. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-278",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. My heart breaks when yours hurts. 🍕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-279",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. We will get through this together. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-280",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. I admire how brave you are. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-281",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. I am in your corner, always. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-282",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. I am in your corner, always. 🌸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-283",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. You're still the strongest person I know. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-284",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. Know that I love you more than words can say. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-285",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. You are safe with me. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-286",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I hate seeing you sad. We will get through this together. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-287",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. You are safe with me. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-288",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You're allowed to feel everything you're feeling. I admire how brave you are. 🍫",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-289",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. Please be gentle with yourself today. 🌧️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-290",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. We will get through this together. 💕",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-291",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Whenever you're ready, I'm here. Know that I love you more than words can say. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-292",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. Please be gentle with yourself today. 🥺",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-293",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "You are so strong, even when you don't feel like it. Let me treat you to your favorite comfort food today. 💙",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-294",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I wish I could take all your sadness away. Let me take care of you. 🕯️",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-295",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Take a deep breath, my love. Know that I love you more than words can say. 🫂",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-296",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. Please be gentle with yourself today. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-297",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. You don't have to carry this alone. 🧸",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-298",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Bad days don't last forever. You don't have to carry this alone. 🤗",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-299",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "Hey, I know things feel heavy right now. Please be gentle with yourself today. 🍦",
    "emoji": "🥺"
  },
  {
    "id": "shes-sad-300",
    "category": "texts",
    "scenario": "shes-sad",
    "text": "I'm sending you so much love right now. Want me to come over and just hold you? 🥺",
    "emoji": "🥺"
  },
  {
    "id": "you-messed-up-1",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. Take all the time you need. I'll be right here waiting. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-2",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. I will work every day to earn back your trust. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-3",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I will work every day to earn back your trust. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-4",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I will work every day to earn back your trust. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-5",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I promise to be more mindful. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-6",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I'm going to show you I've changed. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-7",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. Your happiness is my priority. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-8",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I promise to be more mindful. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-9",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I am so deeply sorry for my mistake. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-10",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. Please let me make it up to you. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-11",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. I am so deeply sorry for my mistake. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-12",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. You deserve better and I'm going to do better. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-13",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. Your happiness is my priority. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-14",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I love you too much to let this come between us. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-15",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. I'm sorry for how I made you feel — your feelings are completely valid. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-16",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I'm sorry for how I made you feel — your feelings are completely valid. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-17",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I promise to be more mindful. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-18",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. You deserve better and I'm going to do better. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-19",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. The last thing I ever want to do is hurt you. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-20",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I value our relationship more than anything. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-21",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. I am so deeply sorry for my mistake. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-22",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. You deserve better and I'm going to do better. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-23",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. Take all the time you need. I'll be right here waiting. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-24",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. Your happiness is my priority. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-25",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I'm sorry for how I made you feel — your feelings are completely valid. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-26",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. I'm going to show you I've changed. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-27",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. Please let me make it up to you. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-28",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I will work every day to earn back your trust. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-29",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. Take all the time you need. I'll be right here waiting. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-30",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. Please let me make it up to you. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-31",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. The last thing I ever want to do is hurt you. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-32",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I love you too much to let this come between us. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-33",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. You deserve better and I'm going to do better. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-34",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I will work every day to earn back your trust. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-35",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. Take all the time you need. I'll be right here waiting. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-36",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I'm going to show you I've changed. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-37",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I'm sorry for how I made you feel — your feelings are completely valid. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-38",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. I love you too much to let this come between us. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-39",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I value our relationship more than anything. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-40",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I'm going to show you I've changed. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-41",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. I am so deeply sorry for my mistake. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-42",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. You deserve better and I'm going to do better. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-43",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. The last thing I ever want to do is hurt you. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-44",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. Can we talk? I want to make this right. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-45",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. Can we talk? I want to make this right. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-46",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I love you too much to let this come between us. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-47",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. You deserve better and I'm going to do better. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-48",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I'm going to show you I've changed. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-49",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I am so deeply sorry for my mistake. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-50",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. I will work every day to earn back your trust. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-51",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I am so deeply sorry for my mistake. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-52",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I'm sorry for how I made you feel — your feelings are completely valid. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-53",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. The last thing I ever want to do is hurt you. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-54",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. Take all the time you need. I'll be right here waiting. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-55",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. Take all the time you need. I'll be right here waiting. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-56",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. Can we talk? I want to make this right. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-57",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I value our relationship more than anything. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-58",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I am so deeply sorry for my mistake. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-59",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. You deserve better and I'm going to do better. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-60",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I am so deeply sorry for my mistake. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-61",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. The last thing I ever want to do is hurt you. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-62",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. Please let me make it up to you. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-63",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. Please let me make it up to you. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-64",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. The last thing I ever want to do is hurt you. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-65",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I'm going to show you I've changed. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-66",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. The last thing I ever want to do is hurt you. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-67",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I promise to be more mindful. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-68",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. You deserve better and I'm going to do better. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-69",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I will work every day to earn back your trust. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-70",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. I will work every day to earn back your trust. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-71",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I will work every day to earn back your trust. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-72",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. Take all the time you need. I'll be right here waiting. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-73",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I will work every day to earn back your trust. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-74",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. I value our relationship more than anything. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-75",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I love you too much to let this come between us. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-76",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I love you too much to let this come between us. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-77",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. Can we talk? I want to make this right. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-78",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. Can we talk? I want to make this right. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-79",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. Can we talk? I want to make this right. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-80",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I'm going to show you I've changed. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-81",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. Can we talk? I want to make this right. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-82",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I love you too much to let this come between us. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-83",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I value our relationship more than anything. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-84",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I am so deeply sorry for my mistake. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-85",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. Can we talk? I want to make this right. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-86",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I love you too much to let this come between us. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-87",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. Take all the time you need. I'll be right here waiting. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-88",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I value our relationship more than anything. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-89",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. Please let me make it up to you. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-90",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. You deserve better and I'm going to do better. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-91",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I love you too much to let this come between us. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-92",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. Take all the time you need. I'll be right here waiting. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-93",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. Take all the time you need. I'll be right here waiting. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-94",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. I'm sorry for how I made you feel — your feelings are completely valid. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-95",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I love you too much to let this come between us. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-96",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. The last thing I ever want to do is hurt you. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-97",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. Please let me make it up to you. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-98",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I will work every day to earn back your trust. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-99",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. Can we talk? I want to make this right. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-100",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. Your happiness is my priority. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-101",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. The last thing I ever want to do is hurt you. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-102",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. Can we talk? I want to make this right. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-103",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. Can we talk? I want to make this right. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-104",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. The last thing I ever want to do is hurt you. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-105",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. Please let me make it up to you. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-106",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. You deserve better and I'm going to do better. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-107",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I value our relationship more than anything. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-108",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I'm sorry for how I made you feel — your feelings are completely valid. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-109",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I will work every day to earn back your trust. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-110",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I'm going to show you I've changed. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-111",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. I promise to be more mindful. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-112",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. I love you too much to let this come between us. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-113",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. Take all the time you need. I'll be right here waiting. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-114",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. Your happiness is my priority. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-115",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I'm sorry for how I made you feel — your feelings are completely valid. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-116",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. Take all the time you need. I'll be right here waiting. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-117",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I'm sorry for how I made you feel — your feelings are completely valid. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-118",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. I promise to be more mindful. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-119",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. I'm going to show you I've changed. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-120",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. I'm going to show you I've changed. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-121",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. Please let me make it up to you. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-122",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. I will work every day to earn back your trust. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-123",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I'm sorry for how I made you feel — your feelings are completely valid. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-124",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. The last thing I ever want to do is hurt you. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-125",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. I will work every day to earn back your trust. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-126",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. You deserve better and I'm going to do better. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-127",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. Can we talk? I want to make this right. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-128",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I value our relationship more than anything. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-129",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. The last thing I ever want to do is hurt you. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-130",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I love you too much to let this come between us. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-131",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I promise to be more mindful. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-132",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I am so deeply sorry for my mistake. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-133",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I love you too much to let this come between us. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-134",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I am so deeply sorry for my mistake. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-135",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. Take all the time you need. I'll be right here waiting. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-136",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. The last thing I ever want to do is hurt you. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-137",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. Take all the time you need. I'll be right here waiting. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-138",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I promise to be more mindful. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-139",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I'm sorry for how I made you feel — your feelings are completely valid. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-140",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. Your happiness is my priority. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-141",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I promise to be more mindful. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-142",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I am so deeply sorry for my mistake. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-143",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I will work every day to earn back your trust. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-144",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. Your happiness is my priority. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-145",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I promise to be more mindful. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-146",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. Please let me make it up to you. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-147",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I promise to be more mindful. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-148",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. The last thing I ever want to do is hurt you. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-149",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. Your happiness is my priority. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-150",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. Take all the time you need. I'll be right here waiting. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-151",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. Can we talk? I want to make this right. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-152",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I love you too much to let this come between us. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-153",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I'm going to show you I've changed. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-154",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. Take all the time you need. I'll be right here waiting. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-155",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I value our relationship more than anything. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-156",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. Can we talk? I want to make this right. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-157",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. Your happiness is my priority. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-158",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. Take all the time you need. I'll be right here waiting. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-159",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. Your happiness is my priority. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-160",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. The last thing I ever want to do is hurt you. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-161",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. Your happiness is my priority. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-162",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. I love you too much to let this come between us. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-163",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I love you too much to let this come between us. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-164",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. Your happiness is my priority. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-165",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. I value our relationship more than anything. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-166",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. I'm sorry for how I made you feel — your feelings are completely valid. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-167",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. Please let me make it up to you. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-168",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I'm sorry for how I made you feel — your feelings are completely valid. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-169",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. Can we talk? I want to make this right. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-170",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I will work every day to earn back your trust. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-171",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I love you too much to let this come between us. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-172",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. Your happiness is my priority. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-173",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I love you too much to let this come between us. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-174",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I love you too much to let this come between us. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-175",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I will work every day to earn back your trust. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-176",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. Can we talk? I want to make this right. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-177",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. Your happiness is my priority. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-178",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. Your happiness is my priority. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-179",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. I'm going to show you I've changed. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-180",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I am so deeply sorry for my mistake. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-181",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I promise to be more mindful. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-182",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I promise to be more mindful. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-183",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. Your happiness is my priority. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-184",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. Please let me make it up to you. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-185",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I'm sorry for how I made you feel — your feelings are completely valid. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-186",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. Take all the time you need. I'll be right here waiting. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-187",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. Can we talk? I want to make this right. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-188",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. You deserve better and I'm going to do better. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-189",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. Your happiness is my priority. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-190",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. I am so deeply sorry for my mistake. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-191",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I promise to be more mindful. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-192",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I am so deeply sorry for my mistake. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-193",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I'm going to show you I've changed. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-194",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. Your happiness is my priority. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-195",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. Can we talk? I want to make this right. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-196",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. Take all the time you need. I'll be right here waiting. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-197",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. I promise to be more mindful. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-198",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I love you too much to let this come between us. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-199",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. Can we talk? I want to make this right. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-200",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. You deserve better and I'm going to do better. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-201",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. The last thing I ever want to do is hurt you. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-202",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I'm going to show you I've changed. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-203",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I'm going to show you I've changed. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-204",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I am so deeply sorry for my mistake. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-205",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I promise to be more mindful. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-206",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. Take all the time you need. I'll be right here waiting. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-207",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. You deserve better and I'm going to do better. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-208",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. Can we talk? I want to make this right. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-209",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I love you too much to let this come between us. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-210",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. Take all the time you need. I'll be right here waiting. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-211",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. Your happiness is my priority. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-212",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. The last thing I ever want to do is hurt you. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-213",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I will work every day to earn back your trust. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-214",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. Take all the time you need. I'll be right here waiting. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-215",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I am so deeply sorry for my mistake. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-216",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I promise to be more mindful. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-217",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I'm going to show you I've changed. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-218",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. Your happiness is my priority. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-219",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. The last thing I ever want to do is hurt you. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-220",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I promise to be more mindful. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-221",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. I am so deeply sorry for my mistake. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-222",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. Take all the time you need. I'll be right here waiting. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-223",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I love you too much to let this come between us. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-224",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. I am so deeply sorry for my mistake. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-225",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. I value our relationship more than anything. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-226",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I am so deeply sorry for my mistake. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-227",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. Can we talk? I want to make this right. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-228",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. Can we talk? I want to make this right. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-229",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. Your happiness is my priority. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-230",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. I'm going to show you I've changed. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-231",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I love you too much to let this come between us. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-232",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. I'm going to show you I've changed. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-233",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. I'm sorry for how I made you feel — your feelings are completely valid. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-234",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I promise to be more mindful. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-235",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I'm sorry for how I made you feel — your feelings are completely valid. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-236",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. Your happiness is my priority. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-237",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. Please let me make it up to you. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-238",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I love you too much to let this come between us. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-239",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. You deserve better and I'm going to do better. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-240",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. Can we talk? I want to make this right. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-241",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. Please let me make it up to you. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-242",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I promise to be more mindful. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-243",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I love you too much to let this come between us. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-244",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I will work every day to earn back your trust. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-245",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. You deserve better and I'm going to do better. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-246",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. The last thing I ever want to do is hurt you. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-247",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I promise to be more mindful. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-248",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I'm going to show you I've changed. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-249",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. I promise to be more mindful. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-250",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. I promise to be more mindful. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-251",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I love you too much to let this come between us. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-252",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I promise to be more mindful. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-253",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I will work every day to earn back your trust. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-254",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I promise to be more mindful. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-255",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. Take all the time you need. I'll be right here waiting. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-256",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. Can we talk? I want to make this right. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-257",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. Can we talk? I want to make this right. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-258",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. The last thing I ever want to do is hurt you. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-259",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. Please let me make it up to you. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-260",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. I'm sorry for how I made you feel — your feelings are completely valid. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-261",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. Your happiness is my priority. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-262",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. Please let me make it up to you. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-263",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. Please let me make it up to you. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-264",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. Please let me make it up to you. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-265",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I will work every day to earn back your trust. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-266",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. I'm going to show you I've changed. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-267",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I'm sorry for how I made you feel — your feelings are completely valid. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-268",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. Can we talk? I want to make this right. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-269",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. Can we talk? I want to make this right. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-270",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I will work every day to earn back your trust. 💗",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-271",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. Your happiness is my priority. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-272",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I don't want to lose what we have. You deserve better and I'm going to do better. 💔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-273",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. You deserve better and I'm going to do better. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-274",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. The last thing I ever want to do is hurt you. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-275",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. I'm sorry for how I made you feel — your feelings are completely valid. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-276",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. You deserve better and I'm going to do better. 🥀",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-277",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. Please let me make it up to you. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-278",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I'm going to show you I've changed. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-279",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I love you too much to let this come between us. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-280",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. Take all the time you need. I'll be right here waiting. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-281",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. I love you too much to let this come between us. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-282",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. Please let me make it up to you. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-283",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. The last thing I ever want to do is hurt you. 😔",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-284",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know I hurt you and I'm truly sorry. I value our relationship more than anything. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-285",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. Can we talk? I want to make this right. 😬",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-286",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. I value our relationship more than anything. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-287",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. I value our relationship more than anything. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-288",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I know sorry might not feel like enough right now. Please let me make it up to you. 🌹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-289",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I will work every day to earn back your trust. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-290",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I'm sorry for how I made you feel — your feelings are completely valid. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-291",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. I'm going to show you I've changed. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-292",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I hate that I made you feel this way. I promise to be more mindful. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-293",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I am so deeply sorry for my mistake. 🤍",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-294",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I've been thinking about what happened. Take all the time you need. I'll be right here waiting. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-295",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I will work every day to earn back your trust. 🩹",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-296",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I'm not going to pretend it didn't happen. I value our relationship more than anything. 🕊️",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-297",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I messed up, and I'm taking full responsibility. I'm sorry for how I made you feel — your feelings are completely valid. 🥺",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-298",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "I was wrong. No excuses. I'm sorry for how I made you feel — your feelings are completely valid. 🙏",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-299",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "Actions speak louder than words. I'm going to show you I've changed. 💌",
    "emoji": "😬"
  },
  {
    "id": "you-messed-up-300",
    "category": "texts",
    "scenario": "you-messed-up",
    "text": "You mean everything to me. Please let me make it up to you. 🥀",
    "emoji": "😬"
  },
  {
    "id": "random-affection-1",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? You make my world better just by existing. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-2",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. You still give me butterflies every single day. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-3",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. That's how I feel whenever I'm with you. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-4",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I'd use my last breath to say I love you. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-5",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. You still give me butterflies every single day. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-6",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. My day instantly gets better when I think of you. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-7",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. I thought of you and got the biggest butterflies. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-8",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: you're beautiful, you're loved, and you're incredible. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-9",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I am so lucky to have you in my life. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-10",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: You are my dream come true. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-11",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. That's how I feel whenever I'm with you. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-12",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: you're beautiful, you're loved, and you're incredible. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-13",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I'd use my last breath to say I love you. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-14",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. That's how I feel whenever I'm with you. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-15",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. you're beautiful, you're loved, and you're incredible. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-16",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. My day instantly gets better when I think of you. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-17",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I am so lucky to have you in my life. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-18",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I am head over heels for you. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-19",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. you're beautiful, you're loved, and you're incredible. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-20",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. I cherish every moment with you. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-21",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: That's how I feel whenever I'm with you. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-22",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. I just wanted you to know how much you mean to me. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-23",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? I just wanted you to know how much you mean to me. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-24",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. I'd use my last breath to say I love you. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-25",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, You make my world better just by existing. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-26",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. I just wanted you to know how much you mean to me. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-27",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I'd use my last breath to say I love you. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-28",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. You make my world better just by existing. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-29",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I am head over heels for you. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-30",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. You are the best thing that ever happened to me. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-31",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. That's how I feel whenever I'm with you. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-32",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I am head over heels for you. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-33",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, you're beautiful, you're loved, and you're incredible. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-34",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I cherish every moment with you. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-35",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. You are the best thing that ever happened to me. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-36",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. I'd use my last breath to say I love you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-37",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, My day instantly gets better when I think of you. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-38",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. I am so lucky to have you in my life. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-39",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? I'd use my last breath to say I love you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-40",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. That's how I feel whenever I'm with you. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-41",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. You still give me butterflies every single day. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-42",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. That's how I feel whenever I'm with you. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-43",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. I cherish every moment with you. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-44",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I am so lucky to have you in my life. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-45",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: You are the best thing that ever happened to me. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-46",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. You still give me butterflies every single day. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-47",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I am so lucky to have you in my life. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-48",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. That's how I feel whenever I'm with you. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-49",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: You are my dream come true. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-50",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, You are the best thing that ever happened to me. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-51",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: You are the best thing that ever happened to me. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-52",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. You are my dream come true. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-53",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I thought of you and got the biggest butterflies. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-54",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. I just wanted you to know how much you mean to me. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-55",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. I just wanted you to know how much you mean to me. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-56",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. You make my world better just by existing. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-57",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. You are my dream come true. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-58",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: You are the best thing that ever happened to me. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-59",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. You make my world better just by existing. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-60",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. you're beautiful, you're loved, and you're incredible. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-61",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I just wanted you to know how much you mean to me. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-62",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. I cherish every moment with you. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-63",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: My day instantly gets better when I think of you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-64",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. That's how I feel whenever I'm with you. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-65",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. I thought of you and got the biggest butterflies. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-66",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. You are my dream come true. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-67",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. I just wanted you to know how much you mean to me. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-68",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. I am so lucky to have you in my life. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-69",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I am head over heels for you. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-70",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. I am head over heels for you. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-71",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I just wanted you to know how much you mean to me. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-72",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? I thought of you and got the biggest butterflies. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-73",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. I cherish every moment with you. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-74",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. I'd use my last breath to say I love you. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-75",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: My day instantly gets better when I think of you. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-76",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. I cherish every moment with you. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-77",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. You still give me butterflies every single day. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-78",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I cherish every moment with you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-79",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. you're beautiful, you're loved, and you're incredible. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-80",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. You make my world better just by existing. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-81",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, You still give me butterflies every single day. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-82",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. I thought of you and got the biggest butterflies. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-83",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? You still give me butterflies every single day. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-84",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? you're beautiful, you're loved, and you're incredible. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-85",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. You still give me butterflies every single day. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-86",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. I cherish every moment with you. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-87",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I cherish every moment with you. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-88",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. you're beautiful, you're loved, and you're incredible. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-89",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: You are my dream come true. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-90",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. I just wanted you to know how much you mean to me. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-91",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I cherish every moment with you. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-92",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. That's how I feel whenever I'm with you. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-93",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? I am head over heels for you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-94",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. I cherish every moment with you. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-95",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. I am so lucky to have you in my life. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-96",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? I'd use my last breath to say I love you. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-97",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. I'd use my last breath to say I love you. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-98",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I am so lucky to have you in my life. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-99",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: You are the best thing that ever happened to me. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-100",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. you're beautiful, you're loved, and you're incredible. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-101",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? I thought of you and got the biggest butterflies. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-102",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. You are my dream come true. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-103",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. That's how I feel whenever I'm with you. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-104",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. I'd use my last breath to say I love you. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-105",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. You are my dream come true. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-106",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. You make my world better just by existing. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-107",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: You are my dream come true. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-108",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I am head over heels for you. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-109",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. My day instantly gets better when I think of you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-110",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: you're beautiful, you're loved, and you're incredible. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-111",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? You are the best thing that ever happened to me. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-112",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: You are the best thing that ever happened to me. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-113",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. I thought of you and got the biggest butterflies. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-114",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? My day instantly gets better when I think of you. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-115",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. I cherish every moment with you. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-116",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I just wanted you to know how much you mean to me. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-117",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I just wanted you to know how much you mean to me. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-118",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. That's how I feel whenever I'm with you. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-119",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, You still give me butterflies every single day. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-120",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: You are the best thing that ever happened to me. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-121",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. you're beautiful, you're loved, and you're incredible. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-122",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: You make my world better just by existing. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-123",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? You are the best thing that ever happened to me. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-124",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I cherish every moment with you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-125",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I just wanted you to know how much you mean to me. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-126",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. you're beautiful, you're loved, and you're incredible. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-127",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. You make my world better just by existing. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-128",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. you're beautiful, you're loved, and you're incredible. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-129",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. You are the best thing that ever happened to me. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-130",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. You are my dream come true. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-131",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. I am head over heels for you. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-132",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. You are the best thing that ever happened to me. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-133",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, You are the best thing that ever happened to me. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-134",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. I cherish every moment with you. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-135",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. I'd use my last breath to say I love you. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-136",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I am so lucky to have you in my life. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-137",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. you're beautiful, you're loved, and you're incredible. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-138",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. I cherish every moment with you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-139",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. You are the best thing that ever happened to me. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-140",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I am so lucky to have you in my life. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-141",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: You still give me butterflies every single day. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-142",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: you're beautiful, you're loved, and you're incredible. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-143",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. I'd use my last breath to say I love you. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-144",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I am head over heels for you. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-145",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? My day instantly gets better when I think of you. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-146",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. You are my dream come true. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-147",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: You are my dream come true. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-148",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. You are my dream come true. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-149",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. My day instantly gets better when I think of you. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-150",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. I thought of you and got the biggest butterflies. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-151",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? I'd use my last breath to say I love you. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-152",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. That's how I feel whenever I'm with you. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-153",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. My day instantly gets better when I think of you. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-154",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I am so lucky to have you in my life. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-155",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I am so lucky to have you in my life. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-156",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. That's how I feel whenever I'm with you. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-157",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I cherish every moment with you. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-158",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, you're beautiful, you're loved, and you're incredible. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-159",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I am head over heels for you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-160",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: You are the best thing that ever happened to me. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-161",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. I'd use my last breath to say I love you. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-162",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. I cherish every moment with you. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-163",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, You make my world better just by existing. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-164",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I cherish every moment with you. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-165",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: You are the best thing that ever happened to me. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-166",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. I cherish every moment with you. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-167",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I am head over heels for you. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-168",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. You are the best thing that ever happened to me. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-169",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. You make my world better just by existing. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-170",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I cherish every moment with you. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-171",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. You make my world better just by existing. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-172",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. That's how I feel whenever I'm with you. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-173",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? I cherish every moment with you. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-174",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. I cherish every moment with you. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-175",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. I am head over heels for you. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-176",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. I am head over heels for you. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-177",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I cherish every moment with you. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-178",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. You still give me butterflies every single day. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-179",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, You still give me butterflies every single day. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-180",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. You make my world better just by existing. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-181",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. You are the best thing that ever happened to me. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-182",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. I cherish every moment with you. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-183",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. I'd use my last breath to say I love you. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-184",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I am head over heels for you. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-185",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, My day instantly gets better when I think of you. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-186",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. You still give me butterflies every single day. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-187",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. You are the best thing that ever happened to me. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-188",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. I just wanted you to know how much you mean to me. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-189",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: You are the best thing that ever happened to me. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-190",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I just wanted you to know how much you mean to me. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-191",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. You are the best thing that ever happened to me. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-192",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. I cherish every moment with you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-193",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I cherish every moment with you. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-194",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I'd use my last breath to say I love you. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-195",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I cherish every moment with you. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-196",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I am head over heels for you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-197",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. I thought of you and got the biggest butterflies. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-198",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I just wanted you to know how much you mean to me. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-199",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I just wanted you to know how much you mean to me. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-200",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, You are my dream come true. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-201",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. That's how I feel whenever I'm with you. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-202",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. I just wanted you to know how much you mean to me. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-203",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. You are my dream come true. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-204",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I am so lucky to have you in my life. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-205",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, You are the best thing that ever happened to me. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-206",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? You are my dream come true. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-207",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. I am head over heels for you. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-208",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: you're beautiful, you're loved, and you're incredible. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-209",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I just wanted you to know how much you mean to me. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-210",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? You make my world better just by existing. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-211",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I thought of you and got the biggest butterflies. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-212",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. You are my dream come true. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-213",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I cherish every moment with you. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-214",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. I am so lucky to have you in my life. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-215",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I cherish every moment with you. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-216",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I am head over heels for you. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-217",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. you're beautiful, you're loved, and you're incredible. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-218",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. I am head over heels for you. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-219",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I thought of you and got the biggest butterflies. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-220",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. you're beautiful, you're loved, and you're incredible. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-221",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: You make my world better just by existing. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-222",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. You make my world better just by existing. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-223",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. You are the best thing that ever happened to me. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-224",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? you're beautiful, you're loved, and you're incredible. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-225",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: My day instantly gets better when I think of you. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-226",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. My day instantly gets better when I think of you. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-227",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, You are my dream come true. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-228",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. That's how I feel whenever I'm with you. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-229",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, That's how I feel whenever I'm with you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-230",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. I am head over heels for you. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-231",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I cherish every moment with you. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-232",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: you're beautiful, you're loved, and you're incredible. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-233",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. My day instantly gets better when I think of you. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-234",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: That's how I feel whenever I'm with you. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-235",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. You still give me butterflies every single day. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-236",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: My day instantly gets better when I think of you. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-237",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I thought of you and got the biggest butterflies. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-238",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. I'd use my last breath to say I love you. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-239",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. I am so lucky to have you in my life. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-240",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. That's how I feel whenever I'm with you. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-241",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. My day instantly gets better when I think of you. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-242",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? I am head over heels for you. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-243",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, My day instantly gets better when I think of you. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-244",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I cherish every moment with you. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-245",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I'd use my last breath to say I love you. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-246",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. I thought of you and got the biggest butterflies. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-247",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: You still give me butterflies every single day. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-248",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. You make my world better just by existing. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-249",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: You make my world better just by existing. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-250",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? You are my dream come true. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-251",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I'd use my last breath to say I love you. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-252",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? You make my world better just by existing. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-253",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. You are the best thing that ever happened to me. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-254",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: you're beautiful, you're loved, and you're incredible. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-255",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. You make my world better just by existing. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-256",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I'd use my last breath to say I love you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-257",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I just wanted you to know how much you mean to me. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-258",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. I cherish every moment with you. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-259",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. you're beautiful, you're loved, and you're incredible. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-260",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. I am so lucky to have you in my life. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-261",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? That's how I feel whenever I'm with you. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-262",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. My day instantly gets better when I think of you. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-263",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. You still give me butterflies every single day. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-264",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I am so lucky to have you in my life. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-265",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. I just wanted you to know how much you mean to me. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-266",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I'd use my last breath to say I love you. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-267",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, That's how I feel whenever I'm with you. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-268",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, I am so lucky to have you in my life. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-269",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. I am head over heels for you. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-270",
    "category": "texts",
    "scenario": "random-affection",
    "text": "If I had to choose between breathing and loving you, You still give me butterflies every single day. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-271",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. You make my world better just by existing. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-272",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. you're beautiful, you're loved, and you're incredible. 🦋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-273",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I thought of you and got the biggest butterflies. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-274",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I thought of you and got the biggest butterflies. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-275",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. You are my dream come true. ✨",
    "emoji": "💕"
  },
  {
    "id": "random-affection-276",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. I just wanted you to know how much you mean to me. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-277",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. you're beautiful, you're loved, and you're incredible. 💛",
    "emoji": "💕"
  },
  {
    "id": "random-affection-278",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I'd use my last breath to say I love you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-279",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: I am head over heels for you. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-280",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. You make my world better just by existing. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-281",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. I just wanted you to know how much you mean to me. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-282",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. You are my dream come true. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-283",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. I just wanted you to know how much you mean to me. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-284",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. You make my world better just by existing. 💘",
    "emoji": "💕"
  },
  {
    "id": "random-affection-285",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I thought of you and got the biggest butterflies. 👋",
    "emoji": "💕"
  },
  {
    "id": "random-affection-286",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. You are my dream come true. 📱",
    "emoji": "💕"
  },
  {
    "id": "random-affection-287",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I don't need a reason to tell you I love you. My day instantly gets better when I think of you. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-288",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. I cherish every moment with you. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-289",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Me, texting you for no reason: I am so lucky to have you in my life. 💖",
    "emoji": "💕"
  },
  {
    "id": "random-affection-290",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I was just doing something boring and suddenly smiled. I am head over heels for you. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-291",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. you're beautiful, you're loved, and you're incredible. 🥰",
    "emoji": "💕"
  },
  {
    "id": "random-affection-292",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? My day instantly gets better when I think of you. 🌸",
    "emoji": "💕"
  },
  {
    "id": "random-affection-293",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Every love song suddenly makes sense. You make my world better just by existing. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-294",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Reminder: You still give me butterflies every single day. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-295",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? You are my dream come true. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-296",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. My day instantly gets better when I think of you. 😽",
    "emoji": "💕"
  },
  {
    "id": "random-affection-297",
    "category": "texts",
    "scenario": "random-affection",
    "text": "I saw something today that reminded me of you. I am so lucky to have you in my life. 🎶",
    "emoji": "💕"
  },
  {
    "id": "random-affection-298",
    "category": "texts",
    "scenario": "random-affection",
    "text": "Just randomly thinking about you. You make my world better just by existing. 💗",
    "emoji": "💕"
  },
  {
    "id": "random-affection-299",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You're my favorite notification. I thought of you and got the biggest butterflies. 💕",
    "emoji": "💕"
  },
  {
    "id": "random-affection-300",
    "category": "texts",
    "scenario": "random-affection",
    "text": "You know that feeling when everything just feels right? you're beautiful, you're loved, and you're incredible. 😽",
    "emoji": "💕"
  },
  {
    "id": "miss-you-1",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Can't wait to kiss you again. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-2",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I'm counting the minutes until we're together again. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-3",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Counting down until I can hold you again. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-4",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. I just want to cuddle with you. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-5",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Come back to me soon. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-6",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. Can't wait to kiss you again. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-7",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Hurry back to me, please? 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-8",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. And you mean everything to me. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-9",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. I'm counting the minutes until we're together again. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-10",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Can't wait to kiss you again. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-11",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I miss your face so much. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-12",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Don't judge me, I just miss you that much. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-13",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. I miss your face so much. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-14",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. Come back to me soon. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-15",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. Come back to me soon. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-16",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Life is just better when you're beside me. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-17",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Don't judge me, I just miss you that much. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-18",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Counting down until I can hold you again. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-19",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Don't judge me, I just miss you that much. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-20",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. I miss your face so much. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-21",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. I just want to cuddle with you. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-22",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. I miss your face so much. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-23",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Come back to me soon. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-24",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. I can't stop thinking about when I'll see you next. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-25",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. I wish I could teleport to you. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-26",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. I'm counting the minutes until we're together again. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-27",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I'm counting the minutes until we're together again. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-28",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Life is just better when you're beside me. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-29",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. I miss your face so much. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-30",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. And you mean everything to me. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-31",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. I'm counting the minutes until we're together again. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-32",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. I just want to cuddle with you. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-33",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. Come back to me soon. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-34",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. Come back to me soon. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-35",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I just want to cuddle with you. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-36",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Hurry back to me, please? 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-37",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Can't wait to kiss you again. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-38",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. Come back to me soon. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-39",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. Hurry back to me, please? 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-40",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. And you mean everything to me. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-41",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. Come back to me soon. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-42",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. I just want to cuddle with you. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-43",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Can't wait to kiss you again. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-44",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Life is just better when you're beside me. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-45",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I just want to cuddle with you. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-46",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. And you mean everything to me. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-47",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Counting down until I can hold you again. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-48",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. I can't stop thinking about when I'll see you next. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-49",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. Counting down until I can hold you again. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-50",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Can't wait to kiss you again. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-51",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. I'm counting the minutes until we're together again. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-52",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Life is just better when you're beside me. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-53",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. I just want to cuddle with you. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-54",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. I miss your face so much. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-55",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. I miss your face so much. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-56",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. Can't wait to kiss you again. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-57",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Life is just better when you're beside me. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-58",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. Can't wait to kiss you again. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-59",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I just want to cuddle with you. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-60",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I'm counting the minutes until we're together again. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-61",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I'm counting the minutes until we're together again. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-62",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. I can't stop thinking about when I'll see you next. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-63",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. I just want to cuddle with you. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-64",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Hurry back to me, please? 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-65",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. I can't stop thinking about when I'll see you next. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-66",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. I can't stop thinking about when I'll see you next. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-67",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. I just want to cuddle with you. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-68",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. I'm counting the minutes until we're together again. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-69",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Counting down until I can hold you again. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-70",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Come back to me soon. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-71",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Can't wait to kiss you again. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-72",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I can't stop thinking about when I'll see you next. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-73",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Hurry back to me, please? 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-74",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Can't wait to kiss you again. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-75",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Don't judge me, I just miss you that much. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-76",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Don't judge me, I just miss you that much. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-77",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Come back to me soon. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-78",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. I wish I could teleport to you. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-79",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. I miss your face so much. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-80",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Counting down until I can hold you again. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-81",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. Can't wait to kiss you again. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-82",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Can't wait to kiss you again. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-83",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. I miss your face so much. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-84",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. Don't judge me, I just miss you that much. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-85",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. I wish I could teleport to you. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-86",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I just want to cuddle with you. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-87",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. Don't judge me, I just miss you that much. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-88",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. I miss your face so much. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-89",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Can't wait to kiss you again. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-90",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. I can't stop thinking about when I'll see you next. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-91",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Hurry back to me, please? 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-92",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Hurry back to me, please? 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-93",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. Don't judge me, I just miss you that much. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-94",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Counting down until I can hold you again. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-95",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. I miss your face so much. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-96",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Don't judge me, I just miss you that much. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-97",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. I just want to cuddle with you. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-98",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. And you mean everything to me. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-99",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Hurry back to me, please? 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-100",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Can't wait to kiss you again. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-101",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. Life is just better when you're beside me. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-102",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. And you mean everything to me. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-103",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. I'm counting the minutes until we're together again. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-104",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Can't wait to kiss you again. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-105",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. And you mean everything to me. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-106",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. I can't stop thinking about when I'll see you next. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-107",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. I'm counting the minutes until we're together again. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-108",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Come back to me soon. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-109",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. I just want to cuddle with you. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-110",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Can't wait to kiss you again. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-111",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. And you mean everything to me. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-112",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Counting down until I can hold you again. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-113",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Come back to me soon. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-114",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. And you mean everything to me. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-115",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. I just want to cuddle with you. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-116",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Come back to me soon. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-117",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. I just want to cuddle with you. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-118",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. And you mean everything to me. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-119",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Don't judge me, I just miss you that much. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-120",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. And you mean everything to me. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-121",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. And you mean everything to me. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-122",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. I just want to cuddle with you. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-123",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. I just want to cuddle with you. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-124",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. I miss your face so much. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-125",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. And you mean everything to me. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-126",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. I can't stop thinking about when I'll see you next. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-127",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Hurry back to me, please? 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-128",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. Can't wait to kiss you again. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-129",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Come back to me soon. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-130",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Come back to me soon. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-131",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. I can't stop thinking about when I'll see you next. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-132",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Can't wait to kiss you again. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-133",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. I'm counting the minutes until we're together again. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-134",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. I miss your face so much. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-135",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. And you mean everything to me. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-136",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Don't judge me, I just miss you that much. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-137",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. I'm counting the minutes until we're together again. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-138",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Counting down until I can hold you again. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-139",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Can't wait to kiss you again. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-140",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. Come back to me soon. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-141",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. I just want to cuddle with you. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-142",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. I'm counting the minutes until we're together again. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-143",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. I miss your face so much. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-144",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Hurry back to me, please? ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-145",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. I can't stop thinking about when I'll see you next. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-146",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. Hurry back to me, please? ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-147",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Counting down until I can hold you again. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-148",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. Don't judge me, I just miss you that much. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-149",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. I'm counting the minutes until we're together again. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-150",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. Life is just better when you're beside me. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-151",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. Life is just better when you're beside me. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-152",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. And you mean everything to me. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-153",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. I miss your face so much. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-154",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Come back to me soon. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-155",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. I wish I could teleport to you. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-156",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. I can't stop thinking about when I'll see you next. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-157",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. I can't stop thinking about when I'll see you next. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-158",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I miss your face so much. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-159",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. Come back to me soon. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-160",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. I just want to cuddle with you. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-161",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I wish I could teleport to you. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-162",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. I'm counting the minutes until we're together again. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-163",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. And you mean everything to me. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-164",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. Counting down until I can hold you again. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-165",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Don't judge me, I just miss you that much. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-166",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. I just want to cuddle with you. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-167",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. I wish I could teleport to you. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-168",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. Can't wait to kiss you again. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-169",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. I'm counting the minutes until we're together again. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-170",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Come back to me soon. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-171",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. I wish I could teleport to you. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-172",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. I wish I could teleport to you. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-173",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Hurry back to me, please? 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-174",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Life is just better when you're beside me. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-175",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Hurry back to me, please? 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-176",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. I can't stop thinking about when I'll see you next. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-177",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. Don't judge me, I just miss you that much. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-178",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Counting down until I can hold you again. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-179",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Hurry back to me, please? 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-180",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. I just want to cuddle with you. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-181",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. Hurry back to me, please? 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-182",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Counting down until I can hold you again. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-183",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I wish I could teleport to you. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-184",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. I wish I could teleport to you. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-185",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. I just want to cuddle with you. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-186",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. I wish I could teleport to you. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-187",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. And you mean everything to me. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-188",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Hurry back to me, please? 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-189",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Come back to me soon. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-190",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. I just want to cuddle with you. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-191",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. Come back to me soon. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-192",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. I just want to cuddle with you. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-193",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. I can't stop thinking about when I'll see you next. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-194",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. I'm counting the minutes until we're together again. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-195",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I'm counting the minutes until we're together again. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-196",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Come back to me soon. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-197",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. I wish I could teleport to you. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-198",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Come back to me soon. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-199",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. I'm counting the minutes until we're together again. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-200",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. I just want to cuddle with you. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-201",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Hurry back to me, please? ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-202",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. I just want to cuddle with you. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-203",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. And you mean everything to me. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-204",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. I wish I could teleport to you. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-205",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Can't wait to kiss you again. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-206",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Counting down until I can hold you again. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-207",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. I just want to cuddle with you. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-208",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Hurry back to me, please? 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-209",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Life is just better when you're beside me. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-210",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. Counting down until I can hold you again. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-211",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. I just want to cuddle with you. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-212",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. And you mean everything to me. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-213",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. I miss your face so much. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-214",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. I miss your face so much. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-215",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. I wish I could teleport to you. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-216",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. I just want to cuddle with you. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-217",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Hurry back to me, please? 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-218",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. I wish I could teleport to you. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-219",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. And you mean everything to me. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-220",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. I can't stop thinking about when I'll see you next. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-221",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. Don't judge me, I just miss you that much. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-222",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. I just want to cuddle with you. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-223",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. I miss your face so much. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-224",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. I can't stop thinking about when I'll see you next. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-225",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. I wish I could teleport to you. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-226",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. I wish I could teleport to you. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-227",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. I can't stop thinking about when I'll see you next. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-228",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. I miss your face so much. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-229",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Hurry back to me, please? 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-230",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Can't wait to kiss you again. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-231",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Counting down until I can hold you again. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-232",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Life is just better when you're beside me. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-233",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Can't wait to kiss you again. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-234",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. And you mean everything to me. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-235",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. I can't stop thinking about when I'll see you next. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-236",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. I miss your face so much. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-237",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. I miss your face so much. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-238",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Can't wait to kiss you again. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-239",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. Hurry back to me, please? 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-240",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. I just want to cuddle with you. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-241",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. I just want to cuddle with you. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-242",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. I just want to cuddle with you. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-243",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. I miss your face so much. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-244",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. Come back to me soon. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-245",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. I can't stop thinking about when I'll see you next. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-246",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. Counting down until I can hold you again. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-247",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Don't judge me, I just miss you that much. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-248",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Life is just better when you're beside me. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-249",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. Can't wait to kiss you again. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-250",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. I'm counting the minutes until we're together again. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-251",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. I wish I could teleport to you. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-252",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Don't judge me, I just miss you that much. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-253",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. I'm counting the minutes until we're together again. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-254",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Can't wait to kiss you again. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-255",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Counting down until I can hold you again. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-256",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Come back to me soon. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-257",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. I just want to cuddle with you. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-258",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Counting down until I can hold you again. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-259",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Counting down until I can hold you again. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-260",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. Hurry back to me, please? 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-261",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Life is just better when you're beside me. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-262",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. I'm counting the minutes until we're together again. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-263",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Life is just better when you're beside me. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-264",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. I can't stop thinking about when I'll see you next. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-265",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Can't wait to kiss you again. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-266",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. Hurry back to me, please? 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-267",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Life is just better when you're beside me. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-268",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. Hurry back to me, please? 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-269",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Can't wait to kiss you again. 🥺",
    "emoji": "💭"
  },
  {
    "id": "miss-you-270",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Come back to me soon. 📸",
    "emoji": "💭"
  },
  {
    "id": "miss-you-271",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. I wish I could teleport to you. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-272",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Don't judge me, I just miss you that much. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-273",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. Come back to me soon. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-274",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Counting down until I can hold you again. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-275",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Don't judge me, I just miss you that much. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-276",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. I miss your face so much. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-277",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. Can't wait to kiss you again. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-278",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Counting down until I can hold you again. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-279",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. Life is just better when you're beside me. 🎨",
    "emoji": "💭"
  },
  {
    "id": "miss-you-280",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Life is just better when you're beside me. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-281",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. Come back to me soon. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-282",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Everything is a little less colorful. Hurry back to me, please? 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-283",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I miss your face so much. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-284",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. Hurry back to me, please? 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-285",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. Hurry back to me, please? 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-286",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. Hurry back to me, please? 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-287",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. And you mean everything to me. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-288",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. Life is just better when you're beside me. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-289",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I miss you so much it physically hurts. I just want to cuddle with you. ✈️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-290",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I keep looking at your photos. I can't stop thinking about when I'll see you next. 🤗",
    "emoji": "💭"
  },
  {
    "id": "miss-you-291",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. And you mean everything to me. 💭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-292",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. I miss your face so much. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-293",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. I can't stop thinking about when I'll see you next. 🌍",
    "emoji": "💭"
  },
  {
    "id": "miss-you-294",
    "category": "texts",
    "scenario": "miss-you",
    "text": "I just smelled your perfume. Counting down until I can hold you again. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-295",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Every second apart is a second too long. I'm counting the minutes until we're together again. 😭",
    "emoji": "💭"
  },
  {
    "id": "miss-you-296",
    "category": "texts",
    "scenario": "miss-you",
    "text": "This day is taking forever because you're not here. Can't wait to kiss you again. 🚆",
    "emoji": "💭"
  },
  {
    "id": "miss-you-297",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Distance means nothing when someone means everything. I wish I could teleport to you. 💔",
    "emoji": "💭"
  },
  {
    "id": "miss-you-298",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Wish you were here right now. Don't judge me, I just miss you that much. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "miss-you-299",
    "category": "texts",
    "scenario": "miss-you",
    "text": "My arms feel so empty without you. Come back to me soon. 🕰️",
    "emoji": "💭"
  },
  {
    "id": "miss-you-300",
    "category": "texts",
    "scenario": "miss-you",
    "text": "Missing you is my full-time job. I miss your face so much. 🥺💕",
    "emoji": "💭"
  },
  {
    "id": "date-ideas-1",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a DIY spa night 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-2",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a cute photoshoot in the city 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-3",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a sunset picnic at the park 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-4",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a sunset picnic at the park 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-5",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a ice cream tasting tour 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-6",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a botanical garden stroll 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-7",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some DIY spa night 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-8",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a farmers market visit 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-9",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a scenic drive with our favorite playlist 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-10",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some cute photoshoot in the city 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-11",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a board game marathon with takeout 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-12",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a board game marathon with takeout 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-13",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some museum or art gallery visit 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-14",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a sunset picnic at the park 🚗🎶",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-15",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a scenic drive with our favorite playlist 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-16",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a ice cream tasting tour 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-17",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a farmers market visit 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-18",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a sunset picnic at the park 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-19",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a board game marathon with takeout 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-20",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a farmers market visit 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-21",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a cute photoshoot in the city 🖼️🏛️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-22",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a sunset picnic at the park 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-23",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a sunset picnic at the park 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-24",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a cute photoshoot in the city 🚗🎶",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-25",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a sunset picnic at the park 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-26",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a sunset picnic at the park 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-27",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a cute photoshoot in the city 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-28",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a thrift shopping adventure 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-29",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a sunset picnic at the park 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-30",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a sunrise walk with coffee 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-31",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a stargazing night 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-32",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a pottery or painting class 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-33",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a cute photoshoot in the city 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-34",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some movie marathon at home 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-35",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some ice cream tasting tour 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-36",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a baking challenge in our kitchen 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-37",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a stargazing night 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-38",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a thrift shopping adventure 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-39",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a baking challenge in our kitchen 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-40",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a movie marathon at home 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-41",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a weekend getaway to somewhere cozy 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-42",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some sunset picnic at the park 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-43",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a baking challenge in our kitchen 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-44",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a DIY spa night 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-45",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a thrift shopping adventure 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-46",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a scenic drive with our favorite playlist 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-47",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a sunrise walk with coffee 🖼️🏛️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-48",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a pottery or painting class 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-49",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a stargazing night 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-50",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some ice cream tasting tour 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-51",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some sunrise walk with coffee 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-52",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a scenic drive with our favorite playlist 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-53",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a farmers market visit 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-54",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a museum or art gallery visit 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-55",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a board game marathon with takeout 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-56",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a bookstore date 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-57",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a sunset picnic at the park 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-58",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a stargazing night 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-59",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a board game marathon with takeout 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-60",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some cute photoshoot in the city 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-61",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a sunset picnic at the park 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-62",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a board game marathon with takeout 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-63",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a cute photoshoot in the city 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-64",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a thrift shopping adventure 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-65",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a weekend getaway to somewhere cozy 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-66",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a DIY spa night 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-67",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a weekend getaway to somewhere cozy 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-68",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some movie marathon at home 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-69",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a DIY spa night 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-70",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a baking challenge in our kitchen 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-71",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a stargazing night 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-72",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a ice cream tasting tour 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-73",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some stargazing night 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-74",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some movie marathon at home 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-75",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a baking challenge in our kitchen 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-76",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a movie marathon at home 🖼️🏛️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-77",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a ice cream tasting tour 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-78",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a DIY spa night 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-79",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a thrift shopping adventure 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-80",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a movie marathon at home 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-81",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a movie marathon at home 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-82",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a scenic drive with our favorite playlist 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-83",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a bookstore date 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-84",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a sunrise walk with coffee 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-85",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a botanical garden stroll 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-86",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a cute photoshoot in the city 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-87",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a board game marathon with takeout 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-88",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a farmers market visit 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-89",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a stargazing night 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-90",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a thrift shopping adventure 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-91",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some farmers market visit 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-92",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a scenic drive with our favorite playlist 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-93",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a sunset picnic at the park 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-94",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a board game marathon with takeout 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-95",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a sunset picnic at the park 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-96",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a farmers market visit 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-97",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a pottery or painting class 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-98",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a sunset picnic at the park 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-99",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a sunset picnic at the park 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-100",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a sunset picnic at the park 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-101",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a ice cream tasting tour 🖼️🏛️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-102",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some weekend getaway to somewhere cozy 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-103",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a cute photoshoot in the city 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-104",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some pottery or painting class 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-105",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a movie marathon at home 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-106",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a botanical garden stroll 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-107",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a sunset picnic at the park 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-108",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some movie marathon at home 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-109",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a pottery or painting class 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-110",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a movie marathon at home 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-111",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a cute photoshoot in the city 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-112",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a botanical garden stroll 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-113",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a board game marathon with takeout 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-114",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a pottery or painting class 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-115",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a museum or art gallery visit 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-116",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a bookstore date 🖼️🏛️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-117",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a cute photoshoot in the city 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-118",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a ice cream tasting tour 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-119",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a botanical garden stroll 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-120",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a bookstore date 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-121",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a movie marathon at home 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-122",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a cooking competition at home 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-123",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a thrift shopping adventure 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-124",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a ice cream tasting tour 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-125",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a scenic drive with our favorite playlist 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-126",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a thrift shopping adventure 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-127",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some museum or art gallery visit 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-128",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a baking challenge in our kitchen 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-129",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a farmers market visit 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-130",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some board game marathon with takeout 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-131",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a DIY spa night 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-132",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a DIY spa night 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-133",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some weekend getaway to somewhere cozy 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-134",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a weekend getaway to somewhere cozy 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-135",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a sunset picnic at the park 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-136",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a pottery or painting class 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-137",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a weekend getaway to somewhere cozy 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-138",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a scenic drive with our favorite playlist 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-139",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a baking challenge in our kitchen 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-140",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a farmers market visit 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-141",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some farmers market visit 🚗🎶",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-142",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a ice cream tasting tour 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-143",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a stargazing night 🖼️🏛️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-144",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a scenic drive with our favorite playlist 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-145",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a DIY spa night 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-146",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some bookstore date 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-147",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a pottery or painting class 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-148",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a pottery or painting class 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-149",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a sunset picnic at the park 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-150",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a baking challenge in our kitchen 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-151",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a ice cream tasting tour 🚗🎶",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-152",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a botanical garden stroll 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-153",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a DIY spa night 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-154",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a board game marathon with takeout 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-155",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a weekend getaway to somewhere cozy 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-156",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a DIY spa night 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-157",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a pottery or painting class 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-158",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a cooking competition at home 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-159",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a pottery or painting class 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-160",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a sunrise walk with coffee 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-161",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a bookstore date 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-162",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a sunrise walk with coffee 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-163",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a bookstore date 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-164",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a sunrise walk with coffee 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-165",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a cooking competition at home 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-166",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a botanical garden stroll 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-167",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a board game marathon with takeout 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-168",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a botanical garden stroll 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-169",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a baking challenge in our kitchen 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-170",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a board game marathon with takeout 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-171",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a DIY spa night 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-172",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a sunrise walk with coffee 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-173",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a stargazing night 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-174",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a farmers market visit 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-175",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some sunrise walk with coffee 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-176",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some museum or art gallery visit 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-177",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a scenic drive with our favorite playlist 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-178",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a museum or art gallery visit 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-179",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a cute photoshoot in the city 🚗🎶",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-180",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a cooking competition at home 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-181",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a botanical garden stroll 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-182",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a stargazing night 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-183",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a botanical garden stroll 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-184",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some ice cream tasting tour 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-185",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a cooking competition at home 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-186",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a thrift shopping adventure 🚗🎶",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-187",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a sunset picnic at the park 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-188",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a scenic drive with our favorite playlist 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-189",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a bookstore date 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-190",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a baking challenge in our kitchen 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-191",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a museum or art gallery visit 🖼️🏛️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-192",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a stargazing night 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-193",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a farmers market visit 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-194",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some scenic drive with our favorite playlist 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-195",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a movie marathon at home 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-196",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a baking challenge in our kitchen 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-197",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a stargazing night 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-198",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a board game marathon with takeout 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-199",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a thrift shopping adventure 🚗🎶",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-200",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a ice cream tasting tour 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-201",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a bookstore date 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-202",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a board game marathon with takeout 🚗🎶",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-203",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some DIY spa night 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-204",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a baking challenge in our kitchen 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-205",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a stargazing night 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-206",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a movie marathon at home 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-207",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a bookstore date 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-208",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a stargazing night 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-209",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a movie marathon at home 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-210",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a museum or art gallery visit 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-211",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a scenic drive with our favorite playlist 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-212",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some museum or art gallery visit 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-213",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a scenic drive with our favorite playlist 🖼️🏛️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-214",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a botanical garden stroll 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-215",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a botanical garden stroll 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-216",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a DIY spa night 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-217",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a bookstore date 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-218",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a stargazing night 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-219",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some sunrise walk with coffee 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-220",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a thrift shopping adventure 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-221",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a board game marathon with takeout 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-222",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a bookstore date 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-223",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a baking challenge in our kitchen 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-224",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a pottery or painting class 🚗🎶",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-225",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a sunset picnic at the park 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-226",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a botanical garden stroll 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-227",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a botanical garden stroll 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-228",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a sunrise walk with coffee 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-229",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a cute photoshoot in the city 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-230",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a stargazing night 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-231",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a DIY spa night 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-232",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a bookstore date 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-233",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a pottery or painting class 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-234",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a thrift shopping adventure 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-235",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a stargazing night 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-236",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a museum or art gallery visit 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-237",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a weekend getaway to somewhere cozy 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-238",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a cute photoshoot in the city 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-239",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a cooking competition at home 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-240",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a baking challenge in our kitchen 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-241",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a museum or art gallery visit 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-242",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a sunset picnic at the park 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-243",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a botanical garden stroll 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-244",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a cooking competition at home 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-245",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a cute photoshoot in the city 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-246",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a ice cream tasting tour 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-247",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a farmers market visit 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-248",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a sunrise walk with coffee 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-249",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some bookstore date 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-250",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a botanical garden stroll 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-251",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a scenic drive with our favorite playlist 🧺🌸",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-252",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a baking challenge in our kitchen 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-253",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a weekend getaway to somewhere cozy 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-254",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a weekend getaway to somewhere cozy 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-255",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a DIY spa night 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-256",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a thrift shopping adventure 🚗🎶",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-257",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a sunrise walk with coffee 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-258",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a botanical garden stroll 🚗🎶",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-259",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a scenic drive with our favorite playlist 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-260",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a cute photoshoot in the city 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-261",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a stargazing night 🚗🎶",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-262",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a museum or art gallery visit 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-263",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a ice cream tasting tour 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-264",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some board game marathon with takeout 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-265",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a farmers market visit 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-266",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a weekend getaway to somewhere cozy 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-267",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some cute photoshoot in the city 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-268",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a movie marathon at home 📷✨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-269",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a thrift shopping adventure 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-270",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a pottery or painting class 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-271",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a pottery or painting class 🖼️🏛️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-272",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'd love to take you on a movie marathon at home 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-273",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a DIY spa night 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-274",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a sunset picnic at the park 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-275",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a bookstore date 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-276",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a museum or art gallery visit 🍿🛋️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-277",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some cute photoshoot in the city 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-278",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a farmers market visit 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-279",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a stargazing night 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-280",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a thrift shopping adventure 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-281",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a museum or art gallery visit 🥕🥗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-282",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a board game marathon with takeout 🕯️💆‍♀️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-283",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a bookstore date 🎨🖌️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-284",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some cooking competition at home 🏔️🏡",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-285",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a farmers market visit 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-286",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a baking challenge in our kitchen 🍦🍨",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-287",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a DIY spa night 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-288",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a baking challenge in our kitchen 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-289",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a sunrise walk with coffee 🌟🔭",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-290",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's explore a botanical garden stroll 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-291",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's do a pottery or painting class 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-292",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Surprise! Get ready for a movie marathon at home 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-293",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We need a sunset picnic at the park 🖼️🏛️",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-294",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some farmers market visit 🧁🎮",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-295",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a farmers market visit 👩‍🍳🔪",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-296",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "I'm thinking of a cooking competition at home 📚👓",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-297",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "How about a movie marathon at home 🛍️👗",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-298",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "We should plan a DIY spa night 🚗🎶",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-299",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's grab some thrift shopping adventure 🌅☕",
    "emoji": "🌸"
  },
  {
    "id": "date-ideas-300",
    "category": "dates",
    "scenario": "date-ideas",
    "text": "Let's go for a botanical garden stroll 🌷🌿",
    "emoji": "🌸"
  },
  {
    "id": "compliments-1",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh make everyone around you feel special. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-2",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, makes the entire world feel lighter. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-3",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, You radiate so much kindness and warmth. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-4",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. and I'm so grateful you chose me. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-5",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh Literally my favorite thing in the entire universe. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-6",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? I still get this little rush like it's the first time. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-7",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, and I'm so grateful you chose me. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-8",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. my favorite place to get lost in. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-9",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. You're my favorite adventure. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-10",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are make everyone around you feel special. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-11",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — is one of the million reasons I fell for you. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-12",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh and I'm so grateful you chose me. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-13",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people Literally my favorite thing in the entire universe. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-14",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, It's incredibly attractive. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-15",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to It's incredibly attractive. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-16",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people Literally my favorite thing in the entire universe. 🌷",
    "emoji": "✨"
  },
  {
    "id": "compliments-17",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. makes the entire world feel lighter. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-18",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh is one of the million reasons I fell for you. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-19",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, Literally my favorite thing in the entire universe. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-20",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh You inspire me to be a better person every day. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-21",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? my favorite place to get lost in. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-22",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, Your intelligence and wit absolutely captivate me. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-23",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, It's incredibly attractive. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-24",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — my favorite place to get lost in. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-25",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. You inspire me to be a better person every day. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-26",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people You are effortlessly gorgeous. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-27",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are Literally my favorite thing in the entire universe. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-28",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — your heart is the most beautiful thing about you. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-29",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people You inspire me to be a better person every day. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-30",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are There is no one else in the world like you. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-31",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh my favorite place to get lost in. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-32",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. Your intelligence and wit absolutely captivate me. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-33",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. makes the entire world feel lighter. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-34",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. makes the entire world feel lighter. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-35",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? makes the entire world feel lighter. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-36",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. my favorite place to get lost in. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-37",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, I still get this little rush like it's the first time. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-38",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, and I'm so grateful you chose me. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-39",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — You are effortlessly gorgeous. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-40",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are your heart is the most beautiful thing about you. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-41",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people It's incredibly attractive. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-42",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. You are effortlessly gorgeous. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-43",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh is one of the million reasons I fell for you. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-44",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are You radiate so much kindness and warmth. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-45",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people There is no one else in the world like you. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-46",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people and I'm so grateful you chose me. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-47",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, I still get this little rush like it's the first time. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-48",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, make everyone around you feel special. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-49",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh Your intelligence and wit absolutely captivate me. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-50",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to make everyone around you feel special. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-51",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. There is no one else in the world like you. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-52",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. There is no one else in the world like you. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-53",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh is one of the million reasons I fell for you. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-54",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to It's incredibly attractive. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-55",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh You are effortlessly gorgeous. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-56",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are You inspire me to be a better person every day. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-57",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are I still get this little rush like it's the first time. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-58",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. It's incredibly attractive. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-59",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, You radiate so much kindness and warmth. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-60",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. Literally my favorite thing in the entire universe. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-61",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh your heart is the most beautiful thing about you. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-62",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are Your intelligence and wit absolutely captivate me. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-63",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are There is no one else in the world like you. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-64",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are You are effortlessly gorgeous. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-65",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. make everyone around you feel special. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-66",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, your heart is the most beautiful thing about you. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-67",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh You're my favorite adventure. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-68",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to Literally my favorite thing in the entire universe. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-69",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. your heart is the most beautiful thing about you. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-70",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — my favorite place to get lost in. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-71",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — You inspire me to be a better person every day. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-72",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. I still get this little rush like it's the first time. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-73",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — You're my favorite adventure. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-74",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh Your intelligence and wit absolutely captivate me. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-75",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are You're my favorite adventure. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-76",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? make everyone around you feel special. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-77",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. You're my favorite adventure. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-78",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, You inspire me to be a better person every day. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-79",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, You are effortlessly gorgeous. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-80",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — Literally my favorite thing in the entire universe. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-81",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. Your intelligence and wit absolutely captivate me. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-82",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people You radiate so much kindness and warmth. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-83",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — is one of the million reasons I fell for you. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-84",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. make everyone around you feel special. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-85",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to You're my favorite adventure. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-86",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. is one of the million reasons I fell for you. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-87",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh make everyone around you feel special. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-88",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — I still get this little rush like it's the first time. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-89",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are You're my favorite adventure. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-90",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are is one of the million reasons I fell for you. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-91",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh make everyone around you feel special. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-92",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people my favorite place to get lost in. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-93",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. You inspire me to be a better person every day. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-94",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, There is no one else in the world like you. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-95",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to your heart is the most beautiful thing about you. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-96",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. I still get this little rush like it's the first time. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-97",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people It's incredibly attractive. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-98",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? your heart is the most beautiful thing about you. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-99",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — makes the entire world feel lighter. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-100",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to make everyone around you feel special. 🌷",
    "emoji": "✨"
  },
  {
    "id": "compliments-101",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. Your intelligence and wit absolutely captivate me. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-102",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. makes the entire world feel lighter. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-103",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are make everyone around you feel special. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-104",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — You radiate so much kindness and warmth. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-105",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, make everyone around you feel special. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-106",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. There is no one else in the world like you. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-107",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are Literally my favorite thing in the entire universe. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-108",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are I still get this little rush like it's the first time. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-109",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? my favorite place to get lost in. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-110",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, You're my favorite adventure. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-111",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh and I'm so grateful you chose me. 🌷",
    "emoji": "✨"
  },
  {
    "id": "compliments-112",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, my favorite place to get lost in. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-113",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. Literally my favorite thing in the entire universe. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-114",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are You're my favorite adventure. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-115",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, Literally my favorite thing in the entire universe. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-116",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. is one of the million reasons I fell for you. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-117",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, your heart is the most beautiful thing about you. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-118",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? There is no one else in the world like you. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-119",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — and I'm so grateful you chose me. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-120",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, Your intelligence and wit absolutely captivate me. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-121",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, Literally my favorite thing in the entire universe. 🌷",
    "emoji": "✨"
  },
  {
    "id": "compliments-122",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. There is no one else in the world like you. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-123",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to You inspire me to be a better person every day. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-124",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. my favorite place to get lost in. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-125",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — and I'm so grateful you chose me. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-126",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? Your intelligence and wit absolutely captivate me. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-127",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to You radiate so much kindness and warmth. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-128",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? makes the entire world feel lighter. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-129",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — makes the entire world feel lighter. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-130",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, Your intelligence and wit absolutely captivate me. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-131",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? You are effortlessly gorgeous. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-132",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh is one of the million reasons I fell for you. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-133",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh makes the entire world feel lighter. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-134",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to There is no one else in the world like you. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-135",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people You inspire me to be a better person every day. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-136",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — your heart is the most beautiful thing about you. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-137",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, It's incredibly attractive. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-138",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are your heart is the most beautiful thing about you. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-139",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh You're my favorite adventure. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-140",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? It's incredibly attractive. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-141",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, You're my favorite adventure. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-142",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, and I'm so grateful you chose me. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-143",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, and I'm so grateful you chose me. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-144",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people You're my favorite adventure. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-145",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, You are effortlessly gorgeous. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-146",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, You are effortlessly gorgeous. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-147",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, You're my favorite adventure. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-148",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, make everyone around you feel special. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-149",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? my favorite place to get lost in. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-150",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. my favorite place to get lost in. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-151",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people my favorite place to get lost in. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-152",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. You're my favorite adventure. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-153",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — my favorite place to get lost in. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-154",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. my favorite place to get lost in. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-155",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. and I'm so grateful you chose me. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-156",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are your heart is the most beautiful thing about you. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-157",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? There is no one else in the world like you. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-158",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — make everyone around you feel special. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-159",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? is one of the million reasons I fell for you. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-160",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to I still get this little rush like it's the first time. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-161",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, Your intelligence and wit absolutely captivate me. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-162",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — Your intelligence and wit absolutely captivate me. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-163",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. You radiate so much kindness and warmth. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-164",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. make everyone around you feel special. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-165",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — You radiate so much kindness and warmth. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-166",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? Literally my favorite thing in the entire universe. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-167",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, You are effortlessly gorgeous. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-168",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to Your intelligence and wit absolutely captivate me. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-169",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are It's incredibly attractive. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-170",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to my favorite place to get lost in. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-171",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? Literally my favorite thing in the entire universe. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-172",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to You radiate so much kindness and warmth. 🌷",
    "emoji": "✨"
  },
  {
    "id": "compliments-173",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are your heart is the most beautiful thing about you. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-174",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — make everyone around you feel special. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-175",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, Literally my favorite thing in the entire universe. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-176",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, my favorite place to get lost in. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-177",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. Literally my favorite thing in the entire universe. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-178",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? You're my favorite adventure. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-179",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to You are effortlessly gorgeous. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-180",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh You inspire me to be a better person every day. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-181",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to I still get this little rush like it's the first time. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-182",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? I still get this little rush like it's the first time. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-183",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. your heart is the most beautiful thing about you. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-184",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to Literally my favorite thing in the entire universe. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-185",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. You radiate so much kindness and warmth. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-186",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh and I'm so grateful you chose me. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-187",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh your heart is the most beautiful thing about you. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-188",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, There is no one else in the world like you. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-189",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? You radiate so much kindness and warmth. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-190",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, You radiate so much kindness and warmth. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-191",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to You're my favorite adventure. 🌷",
    "emoji": "✨"
  },
  {
    "id": "compliments-192",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh Literally my favorite thing in the entire universe. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-193",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, You inspire me to be a better person every day. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-194",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. makes the entire world feel lighter. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-195",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. It's incredibly attractive. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-196",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. It's incredibly attractive. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-197",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, is one of the million reasons I fell for you. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-198",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh Literally my favorite thing in the entire universe. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-199",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? make everyone around you feel special. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-200",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, Your intelligence and wit absolutely captivate me. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-201",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. You are effortlessly gorgeous. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-202",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh There is no one else in the world like you. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-203",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? is one of the million reasons I fell for you. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-204",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to your heart is the most beautiful thing about you. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-205",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? I still get this little rush like it's the first time. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-206",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, I still get this little rush like it's the first time. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-207",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, You inspire me to be a better person every day. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-208",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, You radiate so much kindness and warmth. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-209",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. Your intelligence and wit absolutely captivate me. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-210",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — Your intelligence and wit absolutely captivate me. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-211",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? your heart is the most beautiful thing about you. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-212",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, You inspire me to be a better person every day. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-213",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are my favorite place to get lost in. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-214",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, You're my favorite adventure. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-215",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. You're my favorite adventure. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-216",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — your heart is the most beautiful thing about you. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-217",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are my favorite place to get lost in. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-218",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people You inspire me to be a better person every day. 🌷",
    "emoji": "✨"
  },
  {
    "id": "compliments-219",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to Literally my favorite thing in the entire universe. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-220",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people There is no one else in the world like you. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-221",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? You radiate so much kindness and warmth. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-222",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. my favorite place to get lost in. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-223",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to and I'm so grateful you chose me. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-224",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, is one of the million reasons I fell for you. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-225",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? Literally my favorite thing in the entire universe. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-226",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? There is no one else in the world like you. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-227",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — You're my favorite adventure. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-228",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — You inspire me to be a better person every day. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-229",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? You inspire me to be a better person every day. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-230",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — your heart is the most beautiful thing about you. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-231",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? Literally my favorite thing in the entire universe. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-232",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people Literally my favorite thing in the entire universe. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-233",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, your heart is the most beautiful thing about you. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-234",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — is one of the million reasons I fell for you. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-235",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people You inspire me to be a better person every day. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-236",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, and I'm so grateful you chose me. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-237",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh It's incredibly attractive. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-238",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to You inspire me to be a better person every day. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-239",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. Literally my favorite thing in the entire universe. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-240",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, You are effortlessly gorgeous. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-241",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are my favorite place to get lost in. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-242",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. make everyone around you feel special. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-243",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are You are effortlessly gorgeous. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-244",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, Your intelligence and wit absolutely captivate me. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-245",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? your heart is the most beautiful thing about you. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-246",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh makes the entire world feel lighter. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-247",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are You radiate so much kindness and warmth. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-248",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? You radiate so much kindness and warmth. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-249",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people You radiate so much kindness and warmth. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-250",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — You radiate so much kindness and warmth. 💋",
    "emoji": "✨"
  },
  {
    "id": "compliments-251",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, Literally my favorite thing in the entire universe. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-252",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people It's incredibly attractive. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-253",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, make everyone around you feel special. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-254",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, There is no one else in the world like you. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-255",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, make everyone around you feel special. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-256",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are Your intelligence and wit absolutely captivate me. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-257",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, your heart is the most beautiful thing about you. 🌷",
    "emoji": "✨"
  },
  {
    "id": "compliments-258",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people You inspire me to be a better person every day. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-259",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to You inspire me to be a better person every day. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-260",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh Literally my favorite thing in the entire universe. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-261",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. Your intelligence and wit absolutely captivate me. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-262",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people make everyone around you feel special. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-263",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. your heart is the most beautiful thing about you. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-264",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. Literally my favorite thing in the entire universe. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-265",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to It's incredibly attractive. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-266",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are and I'm so grateful you chose me. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-267",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — Your intelligence and wit absolutely captivate me. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-268",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, your heart is the most beautiful thing about you. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-269",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, I still get this little rush like it's the first time. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-270",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? You are effortlessly gorgeous. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-271",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? Literally my favorite thing in the entire universe. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-272",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your eyes are and I'm so grateful you chose me. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-273",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — You're my favorite adventure. 💎",
    "emoji": "✨"
  },
  {
    "id": "compliments-274",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, makes the entire world feel lighter. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-275",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people Literally my favorite thing in the entire universe. ✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-276",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people I still get this little rush like it's the first time. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-277",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. your heart is the most beautiful thing about you. 😊✨",
    "emoji": "✨"
  },
  {
    "id": "compliments-278",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, You're my favorite adventure. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-279",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh and I'm so grateful you chose me. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-280",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh You are effortlessly gorgeous. 🌟",
    "emoji": "✨"
  },
  {
    "id": "compliments-281",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh your heart is the most beautiful thing about you. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-282",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh You're my favorite adventure. 😍",
    "emoji": "✨"
  },
  {
    "id": "compliments-283",
    "category": "texts",
    "scenario": "compliments",
    "text": "You have this incredible ability to my favorite place to get lost in. 📈💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-284",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh Your intelligence and wit absolutely captivate me. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-285",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh my favorite place to get lost in. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-286",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh You radiate so much kindness and warmth. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-287",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — is one of the million reasons I fell for you. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-288",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? You radiate so much kindness and warmth. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-289",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you care about people There is no one else in the world like you. 🗺️",
    "emoji": "✨"
  },
  {
    "id": "compliments-290",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh You are effortlessly gorgeous. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-291",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? You're my favorite adventure. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-292",
    "category": "texts",
    "scenario": "compliments",
    "text": "Every time I see you, There is no one else in the world like you. 🔥",
    "emoji": "✨"
  },
  {
    "id": "compliments-293",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're the kind of person everyone deserves in their life, make everyone around you feel special. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-294",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? your heart is the most beautiful thing about you. 😁💗",
    "emoji": "✨"
  },
  {
    "id": "compliments-295",
    "category": "texts",
    "scenario": "compliments",
    "text": "You make even the most ordinary days feel extraordinary. and I'm so grateful you chose me. 🧠💡",
    "emoji": "✨"
  },
  {
    "id": "compliments-296",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh my favorite place to get lost in. 💖",
    "emoji": "✨"
  },
  {
    "id": "compliments-297",
    "category": "texts",
    "scenario": "compliments",
    "text": "I love how passionate you are. You radiate so much kindness and warmth. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-298",
    "category": "texts",
    "scenario": "compliments",
    "text": "You're not just beautiful on the outside — You're my favorite adventure. 🥹",
    "emoji": "✨"
  },
  {
    "id": "compliments-299",
    "category": "texts",
    "scenario": "compliments",
    "text": "The way you laugh my favorite place to get lost in. 👀💕",
    "emoji": "✨"
  },
  {
    "id": "compliments-300",
    "category": "texts",
    "scenario": "compliments",
    "text": "Your smile? There is no one else in the world like you. 💋",
    "emoji": "✨"
  },
  {
    "id": "apologies-1",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I'm committed to fixing my mistake. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-2",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I want to be the partner you truly deserve. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-3",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. I want to be the partner you truly deserve. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-4",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. You deserve to hear it as many times as needed. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-5",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. Please let me make things right. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-6",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I fell short, but I am learning and growing. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-7",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. You deserve to hear it as many times as needed. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-8",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I will reflect on this and ensure it doesn't happen again. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-9",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. You deserve to hear it as many times as needed. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-10",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. Here's what I'm going to do differently. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-11",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. Please let me make things right. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-12",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I fell short, but I am learning and growing. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-13",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. You deserve to hear it as many times as needed. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-14",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I want to be the partner you truly deserve. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-15",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I will reflect on this and ensure it doesn't happen again. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-16",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I'm sorry, and I'll work hard to earn your trust back. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-17",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I will reflect on this and ensure it doesn't happen again. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-18",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. You deserve to hear it as many times as needed. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-19",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. You deserve to hear it as many times as needed. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-20",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I want to be the partner you truly deserve. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-21",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. Here's what I'm going to do differently. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-22",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I promise to be more mindful moving forward. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-23",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I'm sorry, and I'll work hard to earn your trust back. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-24",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I'm sorry, and I'll work hard to earn your trust back. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-25",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I'm committed to fixing my mistake. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-26",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. You deserve to hear it as many times as needed. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-27",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I want to be the partner you truly deserve. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-28",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. Here's what I'm going to do differently. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-29",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I promise to be more mindful moving forward. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-30",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. Here's what I'm going to do differently. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-31",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I'm sorry, and I'll work hard to earn your trust back. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-32",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. You deserve to hear it as many times as needed. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-33",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I promise to be more mindful moving forward. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-34",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I will do whatever it takes to make you smile again. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-35",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. You deserve to hear it as many times as needed. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-36",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I will do whatever it takes to make you smile again. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-37",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I'm sorry, and I'll work hard to earn your trust back. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-38",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I'm sorry, and I'll work hard to earn your trust back. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-39",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I'm sorry, and I'll work hard to earn your trust back. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-40",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I will reflect on this and ensure it doesn't happen again. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-41",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. Here's what I'm going to do differently. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-42",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I fell short, but I am learning and growing. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-43",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. Here's what I'm going to do differently. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-44",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. You deserve to hear it as many times as needed. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-45",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I promise to be more mindful moving forward. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-46",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. You deserve to hear it as many times as needed. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-47",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I'm committed to fixing my mistake. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-48",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. Please let me make things right. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-49",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I promise to be more mindful moving forward. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-50",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I promise to be more mindful moving forward. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-51",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I'm committed to fixing my mistake. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-52",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I'm committed to fixing my mistake. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-53",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I fell short, but I am learning and growing. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-54",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. Please let me make things right. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-55",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. You deserve to hear it as many times as needed. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-56",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. I promise to be more mindful moving forward. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-57",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. Please let me make things right. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-58",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I'm committed to fixing my mistake. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-59",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I'm sorry, and I'll work hard to earn your trust back. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-60",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I'm sorry, and I'll work hard to earn your trust back. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-61",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. Please let me make things right. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-62",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I promise to be more mindful moving forward. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-63",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I'm sorry, and I'll work hard to earn your trust back. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-64",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I will do whatever it takes to make you smile again. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-65",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I promise to be more mindful moving forward. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-66",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I will reflect on this and ensure it doesn't happen again. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-67",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I'm committed to fixing my mistake. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-68",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. Here's what I'm going to do differently. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-69",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. Here's what I'm going to do differently. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-70",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. You deserve to hear it as many times as needed. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-71",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I fell short, but I am learning and growing. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-72",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I'm committed to fixing my mistake. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-73",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I will reflect on this and ensure it doesn't happen again. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-74",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. You deserve to hear it as many times as needed. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-75",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I'm sorry, and I'll work hard to earn your trust back. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-76",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I will reflect on this and ensure it doesn't happen again. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-77",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I will do whatever it takes to make you smile again. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-78",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I fell short, but I am learning and growing. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-79",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I will reflect on this and ensure it doesn't happen again. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-80",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I will do whatever it takes to make you smile again. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-81",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. Here's what I'm going to do differently. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-82",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I will do whatever it takes to make you smile again. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-83",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I'm committed to fixing my mistake. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-84",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I'm sorry, and I'll work hard to earn your trust back. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-85",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I will reflect on this and ensure it doesn't happen again. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-86",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. You deserve to hear it as many times as needed. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-87",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I want to be the partner you truly deserve. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-88",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I will do whatever it takes to make you smile again. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-89",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. Here's what I'm going to do differently. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-90",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. You deserve to hear it as many times as needed. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-91",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I'm committed to fixing my mistake. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-92",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I will reflect on this and ensure it doesn't happen again. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-93",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I will do whatever it takes to make you smile again. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-94",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I will reflect on this and ensure it doesn't happen again. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-95",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I fell short, but I am learning and growing. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-96",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I'm sorry, and I'll work hard to earn your trust back. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-97",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. You deserve to hear it as many times as needed. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-98",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I will reflect on this and ensure it doesn't happen again. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-99",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I fell short, but I am learning and growing. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-100",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I'm committed to fixing my mistake. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-101",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. Please let me make things right. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-102",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I will do whatever it takes to make you smile again. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-103",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. Please let me make things right. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-104",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. You deserve to hear it as many times as needed. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-105",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. Please let me make things right. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-106",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I'm committed to fixing my mistake. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-107",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I want to be the partner you truly deserve. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-108",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I will reflect on this and ensure it doesn't happen again. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-109",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I fell short, but I am learning and growing. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-110",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I fell short, but I am learning and growing. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-111",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I fell short, but I am learning and growing. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-112",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I will reflect on this and ensure it doesn't happen again. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-113",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I fell short, but I am learning and growing. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-114",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. Here's what I'm going to do differently. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-115",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. Here's what I'm going to do differently. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-116",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I'm sorry, and I'll work hard to earn your trust back. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-117",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I fell short, but I am learning and growing. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-118",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. Please let me make things right. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-119",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I'm committed to fixing my mistake. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-120",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I'm sorry, and I'll work hard to earn your trust back. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-121",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. You deserve to hear it as many times as needed. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-122",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. Here's what I'm going to do differently. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-123",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. You deserve to hear it as many times as needed. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-124",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. Here's what I'm going to do differently. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-125",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I will do whatever it takes to make you smile again. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-126",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. Here's what I'm going to do differently. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-127",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I'm committed to fixing my mistake. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-128",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I'm committed to fixing my mistake. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-129",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. Here's what I'm going to do differently. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-130",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. Please let me make things right. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-131",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I will do whatever it takes to make you smile again. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-132",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I'm sorry, and I'll work hard to earn your trust back. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-133",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. I'm sorry, and I'll work hard to earn your trust back. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-134",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I'm committed to fixing my mistake. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-135",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. Please let me make things right. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-136",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I will do whatever it takes to make you smile again. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-137",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I promise to be more mindful moving forward. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-138",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. You deserve to hear it as many times as needed. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-139",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I want to be the partner you truly deserve. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-140",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I'm sorry, and I'll work hard to earn your trust back. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-141",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I'm sorry, and I'll work hard to earn your trust back. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-142",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I'm sorry, and I'll work hard to earn your trust back. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-143",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I will do whatever it takes to make you smile again. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-144",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. Here's what I'm going to do differently. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-145",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. You deserve to hear it as many times as needed. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-146",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I'm sorry, and I'll work hard to earn your trust back. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-147",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I will do whatever it takes to make you smile again. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-148",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. Here's what I'm going to do differently. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-149",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. I will reflect on this and ensure it doesn't happen again. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-150",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I want to be the partner you truly deserve. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-151",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. Here's what I'm going to do differently. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-152",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. You deserve to hear it as many times as needed. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-153",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I will reflect on this and ensure it doesn't happen again. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-154",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I will do whatever it takes to make you smile again. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-155",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I want to be the partner you truly deserve. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-156",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I'm committed to fixing my mistake. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-157",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I will do whatever it takes to make you smile again. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-158",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. You deserve to hear it as many times as needed. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-159",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I will reflect on this and ensure it doesn't happen again. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-160",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I will do whatever it takes to make you smile again. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-161",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I want to be the partner you truly deserve. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-162",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. You deserve to hear it as many times as needed. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-163",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I'm committed to fixing my mistake. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-164",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I will do whatever it takes to make you smile again. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-165",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I promise to be more mindful moving forward. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-166",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I promise to be more mindful moving forward. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-167",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I will reflect on this and ensure it doesn't happen again. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-168",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. Please let me make things right. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-169",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I'm sorry, and I'll work hard to earn your trust back. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-170",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I want to be the partner you truly deserve. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-171",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I promise to be more mindful moving forward. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-172",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I fell short, but I am learning and growing. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-173",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I promise to be more mindful moving forward. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-174",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I'm committed to fixing my mistake. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-175",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I'm sorry, and I'll work hard to earn your trust back. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-176",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. I fell short, but I am learning and growing. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-177",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. Here's what I'm going to do differently. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-178",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. I fell short, but I am learning and growing. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-179",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I will reflect on this and ensure it doesn't happen again. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-180",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I will do whatever it takes to make you smile again. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-181",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I'm committed to fixing my mistake. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-182",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. Please let me make things right. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-183",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. Please let me make things right. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-184",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I'm committed to fixing my mistake. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-185",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I promise to be more mindful moving forward. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-186",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I want to be the partner you truly deserve. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-187",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. Please let me make things right. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-188",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I will do whatever it takes to make you smile again. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-189",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I want to be the partner you truly deserve. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-190",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I fell short, but I am learning and growing. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-191",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I'm sorry, and I'll work hard to earn your trust back. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-192",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I will reflect on this and ensure it doesn't happen again. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-193",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. You deserve to hear it as many times as needed. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-194",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I want to be the partner you truly deserve. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-195",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. Here's what I'm going to do differently. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-196",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I will reflect on this and ensure it doesn't happen again. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-197",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I will reflect on this and ensure it doesn't happen again. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-198",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I will do whatever it takes to make you smile again. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-199",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I fell short, but I am learning and growing. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-200",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. Please let me make things right. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-201",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I fell short, but I am learning and growing. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-202",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I fell short, but I am learning and growing. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-203",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I'm sorry, and I'll work hard to earn your trust back. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-204",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I'm committed to fixing my mistake. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-205",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I will reflect on this and ensure it doesn't happen again. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-206",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. I will do whatever it takes to make you smile again. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-207",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. You deserve to hear it as many times as needed. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-208",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. Please let me make things right. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-209",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I fell short, but I am learning and growing. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-210",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I'm committed to fixing my mistake. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-211",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. You deserve to hear it as many times as needed. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-212",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. Here's what I'm going to do differently. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-213",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I will reflect on this and ensure it doesn't happen again. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-214",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I will reflect on this and ensure it doesn't happen again. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-215",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I fell short, but I am learning and growing. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-216",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I'm committed to fixing my mistake. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-217",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I'm sorry, and I'll work hard to earn your trust back. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-218",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. You deserve to hear it as many times as needed. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-219",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I promise to be more mindful moving forward. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-220",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I'm committed to fixing my mistake. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-221",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I promise to be more mindful moving forward. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-222",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. Here's what I'm going to do differently. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-223",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I'm sorry, and I'll work hard to earn your trust back. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-224",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I promise to be more mindful moving forward. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-225",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I fell short, but I am learning and growing. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-226",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. Please let me make things right. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-227",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I'm sorry, and I'll work hard to earn your trust back. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-228",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. Please let me make things right. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-229",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I will reflect on this and ensure it doesn't happen again. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-230",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I will reflect on this and ensure it doesn't happen again. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-231",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. You deserve to hear it as many times as needed. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-232",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I'm sorry, and I'll work hard to earn your trust back. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-233",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I promise to be more mindful moving forward. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-234",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I will do whatever it takes to make you smile again. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-235",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. You deserve to hear it as many times as needed. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-236",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. You deserve to hear it as many times as needed. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-237",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. Please let me make things right. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-238",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. Here's what I'm going to do differently. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-239",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. Here's what I'm going to do differently. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-240",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I want to be the partner you truly deserve. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-241",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. You deserve to hear it as many times as needed. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-242",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I will do whatever it takes to make you smile again. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-243",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I will do whatever it takes to make you smile again. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-244",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. I want to be the partner you truly deserve. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-245",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I promise to be more mindful moving forward. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-246",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I fell short, but I am learning and growing. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-247",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. You deserve to hear it as many times as needed. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-248",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. You deserve to hear it as many times as needed. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-249",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. Please let me make things right. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-250",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I will reflect on this and ensure it doesn't happen again. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-251",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I'm committed to fixing my mistake. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-252",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I'm committed to fixing my mistake. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-253",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. Here's what I'm going to do differently. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-254",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. Please let me make things right. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-255",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I fell short, but I am learning and growing. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-256",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. Please let me make things right. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-257",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I'm sorry, and I'll work hard to earn your trust back. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-258",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I want to be the partner you truly deserve. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-259",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. I'm sorry, and I'll work hard to earn your trust back. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-260",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm deeply sorry for my actions. I fell short, but I am learning and growing. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-261",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I'm sorry, and I'll work hard to earn your trust back. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-262",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I promise to be more mindful moving forward. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-263",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I fell short, but I am learning and growing. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-264",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I fell short, but I am learning and growing. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-265",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I fell short, but I am learning and growing. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-266",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I fell short, but I am learning and growing. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-267",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I will do whatever it takes to make you smile again. 🤍🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-268",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. You deserve to hear it as many times as needed. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-269",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I want to be the partner you truly deserve. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-270",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. I fell short, but I am learning and growing. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-271",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I will do whatever it takes to make you smile again. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-272",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I will reflect on this and ensure it doesn't happen again. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-273",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I want to be the partner you truly deserve. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-274",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. You deserve to hear it as many times as needed. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-275",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. Here's what I'm going to do differently. 🌹",
    "emoji": "🥀"
  },
  {
    "id": "apologies-276",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. Please let me make things right. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-277",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I promise to be more mindful moving forward. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-278",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I will do whatever it takes to make you smile again. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-279",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I will do whatever it takes to make you smile again. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-280",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. Please let me make things right. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-281",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I will do whatever it takes to make you smile again. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-282",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I will do whatever it takes to make you smile again. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-283",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. I fell short, but I am learning and growing. 🙇‍♂️",
    "emoji": "🥀"
  },
  {
    "id": "apologies-284",
    "category": "texts",
    "scenario": "apologies",
    "text": "I recognize where I went wrong. I will reflect on this and ensure it doesn't happen again. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-285",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. I want to be the partner you truly deserve. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-286",
    "category": "texts",
    "scenario": "apologies",
    "text": "You deserve someone who shows up for you perfectly. Please let me make things right. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-287",
    "category": "texts",
    "scenario": "apologies",
    "text": "I hate that I put a frown on your beautiful face. I'm committed to fixing my mistake. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-288",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. You deserve to hear it as many times as needed. 🥺🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-289",
    "category": "texts",
    "scenario": "apologies",
    "text": "I never want to be the reason you're upset. I want to be the partner you truly deserve. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-290",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I fell short, but I am learning and growing. 💔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-291",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. You deserve to hear it as many times as needed. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-292",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. Here's what I'm going to do differently. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-293",
    "category": "texts",
    "scenario": "apologies",
    "text": "Please forgive me. I fell short, but I am learning and growing. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-294",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. Here's what I'm going to do differently. 📝🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-295",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. You deserve to hear it as many times as needed. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-296",
    "category": "texts",
    "scenario": "apologies",
    "text": "I'm going to keep apologizing. You deserve to hear it as many times as needed. 💪🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-297",
    "category": "texts",
    "scenario": "apologies",
    "text": "The thought of losing you terrifies me. You deserve to hear it as many times as needed. 💐🥀",
    "emoji": "🥀"
  },
  {
    "id": "apologies-298",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. I will reflect on this and ensure it doesn't happen again. 😔",
    "emoji": "🥀"
  },
  {
    "id": "apologies-299",
    "category": "texts",
    "scenario": "apologies",
    "text": "I know saying sorry isn't enough. I fell short, but I am learning and growing. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "apologies-300",
    "category": "texts",
    "scenario": "apologies",
    "text": "You have every right to be mad at me. Please let me make things right. 🙏",
    "emoji": "🥀"
  },
  {
    "id": "goodnight-1",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Almost as beautiful as you. Almost. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-2",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Sweet dreams and know that you'll be in mine tonight. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-3",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. May your dreams be as sweet as you are. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-4",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. May your dreams be as sweet as you are. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-5",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Today was better because you're in my life. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-6",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Sweet dreams and know that you'll be in mine tonight. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-7",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. Today was better because you're in my life. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-8",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. I'll be dreaming of your beautiful smile. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-9",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Today was better because you're in my life. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-10",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. I'll be dreaming of your beautiful smile. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-11",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. One more day of being grateful. You are my everything. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-12",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Today was better because you're in my life. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-13",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. One more day of being grateful. You are my everything. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-14",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. One more day of being grateful. You are my everything. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-15",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Imagine my arms around you. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-16",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Sweet dreams and know that you'll be in mine tonight. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-17",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. I'll be dreaming of your beautiful smile. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-18",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: May your dreams be as sweet as you are. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-19",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. May your dreams be as sweet as you are. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-20",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. May your dreams be as sweet as you are. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-21",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. May your dreams be as sweet as you are. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-22",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Remember: you are deeply, completely, ridiculously loved. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-23",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. May your dreams be as sweet as you are. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-24",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Today was better because you're in my life. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-25",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Remember: you are deeply, completely, ridiculously loved. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-26",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Today was better because you're in my life. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-27",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Remember: you are deeply, completely, ridiculously loved. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-28",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. One more day of being grateful. You are my everything. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-29",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Remember: you are deeply, completely, ridiculously loved. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-30",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Sweet dreams and know that you'll be in mine tonight. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-31",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Not before telling you how much I love you. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-32",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Sweet dreams and know that you'll be in mine tonight. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-33",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. I'll be dreaming of your beautiful smile. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-34",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Not before telling you how much I love you. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-35",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Almost as beautiful as you. Almost. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-36",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Almost as beautiful as you. Almost. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-37",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Remember: you are deeply, completely, ridiculously loved. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-38",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Imagine my arms around you. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-39",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. I'll be dreaming of your beautiful smile. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-40",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. I can't wait to wake up and love you again tomorrow. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-41",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Almost as beautiful as you. Almost. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-42",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Not before telling you how much I love you. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-43",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Today was better because you're in my life. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-44",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Imagine my arms around you. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-45",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Sweet dreams and know that you'll be in mine tonight. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-46",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. May your dreams be as sweet as you are. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-47",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Sweet dreams and know that you'll be in mine tonight. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-48",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Sweet dreams and know that you'll be in mine tonight. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-49",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. I'll be dreaming of your beautiful smile. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-50",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. Sweet dreams and know that you'll be in mine tonight. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-51",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Remember: you are deeply, completely, ridiculously loved. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-52",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Today was better because you're in my life. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-53",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Imagine my arms around you. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-54",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. I'll be dreaming of your beautiful smile. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-55",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Sweet dreams and know that you'll be in mine tonight. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-56",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. One more day of being grateful. You are my everything. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-57",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Today was better because you're in my life. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-58",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Remember: you are deeply, completely, ridiculously loved. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-59",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. I can't wait to wake up and love you again tomorrow. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-60",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Today was better because you're in my life. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-61",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. May your dreams be as sweet as you are. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-62",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. May your dreams be as sweet as you are. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-63",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. One more day of being grateful. You are my everything. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-64",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Remember: you are deeply, completely, ridiculously loved. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-65",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. One more day of being grateful. You are my everything. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-66",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Today was better because you're in my life. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-67",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. One more day of being grateful. You are my everything. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-68",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Imagine my arms around you. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-69",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Sweet dreams and know that you'll be in mine tonight. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-70",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. May your dreams be as sweet as you are. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-71",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. I can't wait to wake up and love you again tomorrow. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-72",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. I'll be dreaming of your beautiful smile. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-73",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Today was better because you're in my life. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-74",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Today was better because you're in my life. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-75",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Almost as beautiful as you. Almost. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-76",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Today was better because you're in my life. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-77",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Not before telling you how much I love you. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-78",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. May your dreams be as sweet as you are. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-79",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. I can't wait to wake up and love you again tomorrow. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-80",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. May your dreams be as sweet as you are. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-81",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Sweet dreams and know that you'll be in mine tonight. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-82",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Remember: you are deeply, completely, ridiculously loved. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-83",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. I'll be dreaming of your beautiful smile. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-84",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Not before telling you how much I love you. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-85",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Today was better because you're in my life. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-86",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Almost as beautiful as you. Almost. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-87",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. One more day of being grateful. You are my everything. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-88",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Sweet dreams and know that you'll be in mine tonight. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-89",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. I can't wait to wake up and love you again tomorrow. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-90",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Imagine my arms around you. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-91",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: I'll be dreaming of your beautiful smile. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-92",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Today was better because you're in my life. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-93",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Imagine my arms around you. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-94",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Not before telling you how much I love you. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-95",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Not before telling you how much I love you. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-96",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Not before telling you how much I love you. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-97",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. Almost as beautiful as you. Almost. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-98",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Today was better because you're in my life. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-99",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Sweet dreams and know that you'll be in mine tonight. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-100",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Not before telling you how much I love you. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-101",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Imagine my arms around you. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-102",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. I can't wait to wake up and love you again tomorrow. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-103",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Today was better because you're in my life. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-104",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Imagine my arms around you. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-105",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: May your dreams be as sweet as you are. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-106",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Today was better because you're in my life. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-107",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. One more day of being grateful. You are my everything. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-108",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Not before telling you how much I love you. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-109",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Almost as beautiful as you. Almost. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-110",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Almost as beautiful as you. Almost. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-111",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Sweet dreams and know that you'll be in mine tonight. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-112",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. May your dreams be as sweet as you are. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-113",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Remember: you are deeply, completely, ridiculously loved. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-114",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Today was better because you're in my life. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-115",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. May your dreams be as sweet as you are. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-116",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. One more day of being grateful. You are my everything. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-117",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Remember: you are deeply, completely, ridiculously loved. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-118",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Imagine my arms around you. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-119",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Almost as beautiful as you. Almost. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-120",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Not before telling you how much I love you. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-121",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Today was better because you're in my life. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-122",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. I can't wait to wake up and love you again tomorrow. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-123",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Today was better because you're in my life. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-124",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. I'll be dreaming of your beautiful smile. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-125",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Imagine my arms around you. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-126",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Today was better because you're in my life. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-127",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: May your dreams be as sweet as you are. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-128",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. May your dreams be as sweet as you are. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-129",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. May your dreams be as sweet as you are. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-130",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: One more day of being grateful. You are my everything. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-131",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Almost as beautiful as you. Almost. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-132",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Not before telling you how much I love you. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-133",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Today was better because you're in my life. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-134",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. I can't wait to wake up and love you again tomorrow. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-135",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Almost as beautiful as you. Almost. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-136",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. May your dreams be as sweet as you are. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-137",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Not before telling you how much I love you. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-138",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. May your dreams be as sweet as you are. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-139",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. Not before telling you how much I love you. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-140",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, I'll be dreaming of your beautiful smile. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-141",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Today was better because you're in my life. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-142",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Imagine my arms around you. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-143",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, I can't wait to wake up and love you again tomorrow. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-144",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, I can't wait to wake up and love you again tomorrow. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-145",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. One more day of being grateful. You are my everything. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-146",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Imagine my arms around you. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-147",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: May your dreams be as sweet as you are. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-148",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Remember: you are deeply, completely, ridiculously loved. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-149",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. Imagine my arms around you. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-150",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Sweet dreams and know that you'll be in mine tonight. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-151",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. I'll be dreaming of your beautiful smile. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-152",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. One more day of being grateful. You are my everything. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-153",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Imagine my arms around you. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-154",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. I can't wait to wake up and love you again tomorrow. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-155",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. I can't wait to wake up and love you again tomorrow. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-156",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. I'll be dreaming of your beautiful smile. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-157",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. I can't wait to wake up and love you again tomorrow. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-158",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Sweet dreams and know that you'll be in mine tonight. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-159",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. One more day of being grateful. You are my everything. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-160",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. I can't wait to wake up and love you again tomorrow. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-161",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Sweet dreams and know that you'll be in mine tonight. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-162",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. One more day of being grateful. You are my everything. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-163",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Sweet dreams and know that you'll be in mine tonight. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-164",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. One more day of being grateful. You are my everything. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-165",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Sweet dreams and know that you'll be in mine tonight. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-166",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Not before telling you how much I love you. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-167",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Imagine my arms around you. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-168",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Remember: you are deeply, completely, ridiculously loved. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-169",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Not before telling you how much I love you. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-170",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: One more day of being grateful. You are my everything. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-171",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Remember: you are deeply, completely, ridiculously loved. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-172",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Imagine my arms around you. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-173",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Today was better because you're in my life. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-174",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Remember: you are deeply, completely, ridiculously loved. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-175",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Not before telling you how much I love you. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-176",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Sweet dreams and know that you'll be in mine tonight. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-177",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. One more day of being grateful. You are my everything. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-178",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. I can't wait to wake up and love you again tomorrow. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-179",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. May your dreams be as sweet as you are. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-180",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Not before telling you how much I love you. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-181",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Today was better because you're in my life. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-182",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. One more day of being grateful. You are my everything. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-183",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Imagine my arms around you. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-184",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. May your dreams be as sweet as you are. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-185",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Sweet dreams and know that you'll be in mine tonight. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-186",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. I can't wait to wake up and love you again tomorrow. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-187",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Almost as beautiful as you. Almost. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-188",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. One more day of being grateful. You are my everything. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-189",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. Imagine my arms around you. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-190",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Sweet dreams and know that you'll be in mine tonight. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-191",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Remember: you are deeply, completely, ridiculously loved. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-192",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Remember: you are deeply, completely, ridiculously loved. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-193",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Not before telling you how much I love you. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-194",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Imagine my arms around you. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-195",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: May your dreams be as sweet as you are. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-196",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Remember: you are deeply, completely, ridiculously loved. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-197",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Sweet dreams and know that you'll be in mine tonight. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-198",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Almost as beautiful as you. Almost. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-199",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Not before telling you how much I love you. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-200",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Not before telling you how much I love you. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-201",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. I'll be dreaming of your beautiful smile. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-202",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Remember: you are deeply, completely, ridiculously loved. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-203",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. I can't wait to wake up and love you again tomorrow. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-204",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, May your dreams be as sweet as you are. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-205",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Today was better because you're in my life. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-206",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Remember: you are deeply, completely, ridiculously loved. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-207",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. One more day of being grateful. You are my everything. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-208",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Sweet dreams and know that you'll be in mine tonight. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-209",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. One more day of being grateful. You are my everything. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-210",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. One more day of being grateful. You are my everything. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-211",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. Today was better because you're in my life. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-212",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. One more day of being grateful. You are my everything. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-213",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Today was better because you're in my life. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-214",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Imagine my arms around you. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-215",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. I'll be dreaming of your beautiful smile. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-216",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. I'll be dreaming of your beautiful smile. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-217",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Sweet dreams and know that you'll be in mine tonight. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-218",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Not before telling you how much I love you. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-219",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. Remember: you are deeply, completely, ridiculously loved. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-220",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Today was better because you're in my life. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-221",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Sweet dreams and know that you'll be in mine tonight. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-222",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Almost as beautiful as you. Almost. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-223",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. I'll be dreaming of your beautiful smile. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-224",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Remember: you are deeply, completely, ridiculously loved. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-225",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, I'll be dreaming of your beautiful smile. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-226",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: May your dreams be as sweet as you are. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-227",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Sweet dreams and know that you'll be in mine tonight. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-228",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. I'll be dreaming of your beautiful smile. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-229",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Remember: you are deeply, completely, ridiculously loved. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-230",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Remember: you are deeply, completely, ridiculously loved. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-231",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. I can't wait to wake up and love you again tomorrow. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-232",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Sweet dreams and know that you'll be in mine tonight. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-233",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Today was better because you're in my life. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-234",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Today was better because you're in my life. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-235",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Remember: you are deeply, completely, ridiculously loved. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-236",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. I can't wait to wake up and love you again tomorrow. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-237",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Almost as beautiful as you. Almost. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-238",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Today was better because you're in my life. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-239",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. I'll be dreaming of your beautiful smile. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-240",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. One more day of being grateful. You are my everything. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-241",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. One more day of being grateful. You are my everything. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-242",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. One more day of being grateful. You are my everything. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-243",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Imagine my arms around you. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-244",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Almost as beautiful as you. Almost. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-245",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. I can't wait to wake up and love you again tomorrow. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-246",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Almost as beautiful as you. Almost. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-247",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Remember: you are deeply, completely, ridiculously loved. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-248",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Not before telling you how much I love you. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-249",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Imagine my arms around you. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-250",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. Imagine my arms around you. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-251",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. One more day of being grateful. You are my everything. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-252",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Sweet dreams and know that you'll be in mine tonight. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-253",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. I'll be dreaming of your beautiful smile. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-254",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Imagine my arms around you. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-255",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. May your dreams be as sweet as you are. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-256",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. May your dreams be as sweet as you are. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-257",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. Today was better because you're in my life. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-258",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Remember: you are deeply, completely, ridiculously loved. 😴💕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-259",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. I can't wait to wake up and love you again tomorrow. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-260",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Not before telling you how much I love you. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-261",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Remember: you are deeply, completely, ridiculously loved. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-262",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Remember: you are deeply, completely, ridiculously loved. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-263",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Imagine my arms around you. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-264",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Almost as beautiful as you. Almost. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-265",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Imagine my arms around you. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-266",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, I'll be dreaming of your beautiful smile. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-267",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. May your dreams be as sweet as you are. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-268",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. I can't wait to wake up and love you again tomorrow. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-269",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, May your dreams be as sweet as you are. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-270",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. I'll be dreaming of your beautiful smile. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-271",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Today was better because you're in my life. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-272",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight to my favorite human. Sweet dreams and know that you'll be in mine tonight. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-273",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Imagine my arms around you. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-274",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: I'll be dreaming of your beautiful smile. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-275",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. May your dreams be as sweet as you are. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-276",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, I can't wait to wake up and love you again tomorrow. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-277",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. May your dreams be as sweet as you are. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-278",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, One more day of being grateful. You are my everything. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-279",
    "category": "texts",
    "scenario": "goodnight",
    "text": "The moon is out and it's beautiful. Sweet dreams and know that you'll be in mine tonight. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-280",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Sweet dreams and know that you'll be in mine tonight. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-281",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Almost as beautiful as you. Almost. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-282",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: Imagine my arms around you. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-283",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: One more day of being grateful. You are my everything. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-284",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Sweet dreams and know that you'll be in mine tonight. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-285",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Sleep tight, beautiful. I can't wait to wake up and love you again tomorrow. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-286",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Dream sweet dreams tonight. Today was better because you're in my life. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-287",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. One more day of being grateful. You are my everything. 💤",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-288",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Almost as beautiful as you. Almost. 🌠",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-289",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: One more day of being grateful. You are my everything. 🌌",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-290",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. I'll be dreaming of your beautiful smile. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-291",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Imagine my arms around you. 🍯",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-292",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Before you close your eyes, Not before telling you how much I love you. 🌙",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-293",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. Not before telling you how much I love you. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-294",
    "category": "texts",
    "scenario": "goodnight",
    "text": "One more day with you completed. Remember: you are deeply, completely, ridiculously loved. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-295",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Remember: you are deeply, completely, ridiculously loved. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-296",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Goodnight, my love. Today was better because you're in my life. 🌟",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-297",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Last text of the day: May your dreams be as sweet as you are. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-298",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. I can't wait to wake up and love you again tomorrow. 💜",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-299",
    "category": "texts",
    "scenario": "goodnight",
    "text": "I wish I could fall asleep holding you. I can't wait to wake up and love you again tomorrow. 🤍",
    "emoji": "🌙"
  },
  {
    "id": "goodnight-300",
    "category": "texts",
    "scenario": "goodnight",
    "text": "Putting my phone down now. Today was better because you're in my life. 🌕",
    "emoji": "🌙"
  },
  {
    "id": "just-because-1",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' with no occasion — just because she deserves them. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-2",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph of songs that remind you of her and share it with a sweet message. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-3",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' — one for each day of the month. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-4",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores telling her something you love about her. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-5",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting after a long day — she doesn't even have to ask. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-6",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' of songs that remind you of her and share it with a sweet message. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-7",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers after a long day — she doesn't even have to ask. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-8",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note after a long day — she doesn't even have to ask. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-9",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note without being asked. Acts of service are love. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-10",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph and surprise her with it weeks later. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-11",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores telling her something you love about her. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-12",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting telling her something you love about her. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-13",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note of songs that remind you of her and share it with a sweet message. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-14",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores about all the reasons you love her. Be specific. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-15",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' without being asked. Acts of service are love. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-16",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph about all the reasons you love her. Be specific. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-17",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' about all the reasons you love her. Be specific. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-18",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note and surprise her with it weeks later. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-19",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting — one for each day of the month. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-20",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' of songs that remind you of her and share it with a sweet message. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-21",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-22",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph and surprise her with it weeks later. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-23",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: after a long day — she doesn't even have to ask. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-24",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist with no occasion — just because she deserves them. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-25",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-26",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores about all the reasons you love her. Be specific. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-27",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores with no occasion — just because she deserves them. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-28",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal without being asked. Acts of service are love. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-29",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores telling her something you love about her. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-30",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist without being asked. Acts of service are love. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-31",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers and surprise her with it weeks later. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-32",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note even something as simple as coffee and a walk means the world. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-33",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph without being asked. Acts of service are love. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-34",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: and surprise her with it weeks later. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-35",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers with no occasion — just because she deserves them. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-36",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph without being asked. Acts of service are love. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-37",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note even something as simple as coffee and a walk means the world. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-38",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-39",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist and surprise her with it weeks later. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-40",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-41",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores with no occasion — just because she deserves them. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-42",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: about all the reasons you love her. Be specific. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-43",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph with no occasion — just because she deserves them. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-44",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph even something as simple as coffee and a walk means the world. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-45",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: of songs that remind you of her and share it with a sweet message. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-46",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' about all the reasons you love her. Be specific. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-47",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' and surprise her with it weeks later. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-48",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting about all the reasons you love her. Be specific. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-49",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note even something as simple as coffee and a walk means the world. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-50",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: without being asked. Acts of service are love. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-51",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal of songs that remind you of her and share it with a sweet message. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-52",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal of songs that remind you of her and share it with a sweet message. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-53",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-54",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: about all the reasons you love her. Be specific. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-55",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting about all the reasons you love her. Be specific. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-56",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' — one for each day of the month. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-57",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' after a long day — she doesn't even have to ask. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-58",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-59",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist without being asked. Acts of service are love. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-60",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' with no occasion — just because she deserves them. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-61",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores of songs that remind you of her and share it with a sweet message. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-62",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist after a long day — she doesn't even have to ask. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-63",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal after a long day — she doesn't even have to ask. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-64",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' telling her something you love about her. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-65",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist without being asked. Acts of service are love. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-66",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph of songs that remind you of her and share it with a sweet message. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-67",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal after a long day — she doesn't even have to ask. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-68",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal without being asked. Acts of service are love. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-69",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores with no occasion — just because she deserves them. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-70",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-71",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note about all the reasons you love her. Be specific. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-72",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal telling her something you love about her. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-73",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note with no occasion — just because she deserves them. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-74",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist after a long day — she doesn't even have to ask. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-75",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers after a long day — she doesn't even have to ask. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-76",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' about all the reasons you love her. Be specific. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-77",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph — one for each day of the month. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-78",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: telling her something you love about her. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-79",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores — one for each day of the month. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-80",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist without being asked. Acts of service are love. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-81",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores without being asked. Acts of service are love. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-82",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note even something as simple as coffee and a walk means the world. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-83",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers with no occasion — just because she deserves them. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-84",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-85",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-86",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-87",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph with no occasion — just because she deserves them. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-88",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting without being asked. Acts of service are love. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-89",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-90",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' even something as simple as coffee and a walk means the world. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-91",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist even something as simple as coffee and a walk means the world. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-92",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist after a long day — she doesn't even have to ask. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-93",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph telling her something you love about her. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-94",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting without being asked. Acts of service are love. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-95",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note about all the reasons you love her. Be specific. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-96",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph about all the reasons you love her. Be specific. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-97",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting — one for each day of the month. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-98",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores about all the reasons you love her. Be specific. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-99",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers — one for each day of the month. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-100",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note without being asked. Acts of service are love. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-101",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal after a long day — she doesn't even have to ask. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-102",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph even something as simple as coffee and a walk means the world. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-103",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores with no occasion — just because she deserves them. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-104",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist telling her something you love about her. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-105",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: of songs that remind you of her and share it with a sweet message. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-106",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-107",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting with no occasion — just because she deserves them. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-108",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' telling her something you love about her. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-109",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal with no occasion — just because she deserves them. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-110",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers telling her something you love about her. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-111",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note telling her something you love about her. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-112",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal without being asked. Acts of service are love. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-113",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: about all the reasons you love her. Be specific. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-114",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal with no occasion — just because she deserves them. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-115",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: without being asked. Acts of service are love. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-116",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting telling her something you love about her. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-117",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note about all the reasons you love her. Be specific. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-118",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting and surprise her with it weeks later. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-119",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-120",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note without being asked. Acts of service are love. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-121",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' without being asked. Acts of service are love. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-122",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note after a long day — she doesn't even have to ask. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-123",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-124",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores of songs that remind you of her and share it with a sweet message. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-125",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: about all the reasons you love her. Be specific. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-126",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph — one for each day of the month. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-127",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note of songs that remind you of her and share it with a sweet message. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-128",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note — one for each day of the month. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-129",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note after a long day — she doesn't even have to ask. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-130",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note after a long day — she doesn't even have to ask. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-131",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: about all the reasons you love her. Be specific. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-132",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting even something as simple as coffee and a walk means the world. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-133",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: of songs that remind you of her and share it with a sweet message. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-134",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note after a long day — she doesn't even have to ask. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-135",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' even something as simple as coffee and a walk means the world. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-136",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: of songs that remind you of her and share it with a sweet message. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-137",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting of songs that remind you of her and share it with a sweet message. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-138",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores and surprise her with it weeks later. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-139",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph after a long day — she doesn't even have to ask. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-140",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note of songs that remind you of her and share it with a sweet message. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-141",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers even something as simple as coffee and a walk means the world. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-142",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal even something as simple as coffee and a walk means the world. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-143",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal and surprise her with it weeks later. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-144",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores with no occasion — just because she deserves them. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-145",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph of songs that remind you of her and share it with a sweet message. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-146",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note and surprise her with it weeks later. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-147",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note about all the reasons you love her. Be specific. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-148",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-149",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal telling her something you love about her. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-150",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' telling her something you love about her. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-151",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist of songs that remind you of her and share it with a sweet message. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-152",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-153",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores — one for each day of the month. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-154",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-155",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting with no occasion — just because she deserves them. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-156",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting about all the reasons you love her. Be specific. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-157",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers after a long day — she doesn't even have to ask. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-158",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-159",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: telling her something you love about her. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-160",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note of songs that remind you of her and share it with a sweet message. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-161",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores of songs that remind you of her and share it with a sweet message. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-162",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: even something as simple as coffee and a walk means the world. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-163",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting after a long day — she doesn't even have to ask. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-164",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' after a long day — she doesn't even have to ask. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-165",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: even something as simple as coffee and a walk means the world. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-166",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores with no occasion — just because she deserves them. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-167",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note about all the reasons you love her. Be specific. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-168",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: and surprise her with it weeks later. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-169",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting with no occasion — just because she deserves them. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-170",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores and surprise her with it weeks later. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-171",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting of songs that remind you of her and share it with a sweet message. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-172",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores even something as simple as coffee and a walk means the world. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-173",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-174",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal telling her something you love about her. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-175",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting about all the reasons you love her. Be specific. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-176",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist after a long day — she doesn't even have to ask. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-177",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note with no occasion — just because she deserves them. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-178",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers telling her something you love about her. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-179",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal telling her something you love about her. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-180",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note and surprise her with it weeks later. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-181",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal about all the reasons you love her. Be specific. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-182",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores with no occasion — just because she deserves them. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-183",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-184",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note — one for each day of the month. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-185",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note — one for each day of the month. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-186",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting — one for each day of the month. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-187",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-188",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist even something as simple as coffee and a walk means the world. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-189",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: even something as simple as coffee and a walk means the world. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-190",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers even something as simple as coffee and a walk means the world. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-191",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note without being asked. Acts of service are love. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-192",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist — one for each day of the month. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-193",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note without being asked. Acts of service are love. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-194",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note — one for each day of the month. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-195",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers of songs that remind you of her and share it with a sweet message. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-196",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' with no occasion — just because she deserves them. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-197",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: even something as simple as coffee and a walk means the world. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-198",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist — one for each day of the month. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-199",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores even something as simple as coffee and a walk means the world. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-200",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note and surprise her with it weeks later. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-201",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note with no occasion — just because she deserves them. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-202",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note even something as simple as coffee and a walk means the world. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-203",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting — one for each day of the month. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-204",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers even something as simple as coffee and a walk means the world. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-205",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note and surprise her with it weeks later. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-206",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph after a long day — she doesn't even have to ask. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-207",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal without being asked. Acts of service are love. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-208",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph — one for each day of the month. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-209",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note even something as simple as coffee and a walk means the world. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-210",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers — one for each day of the month. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-211",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores after a long day — she doesn't even have to ask. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-212",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph after a long day — she doesn't even have to ask. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-213",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-214",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note even something as simple as coffee and a walk means the world. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-215",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note about all the reasons you love her. Be specific. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-216",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' without being asked. Acts of service are love. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-217",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note about all the reasons you love her. Be specific. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-218",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph about all the reasons you love her. Be specific. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-219",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: after a long day — she doesn't even have to ask. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-220",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph telling her something you love about her. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-221",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers after a long day — she doesn't even have to ask. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-222",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' about all the reasons you love her. Be specific. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-223",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph — one for each day of the month. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-224",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-225",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal with no occasion — just because she deserves them. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-226",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting after a long day — she doesn't even have to ask. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-227",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph of songs that remind you of her and share it with a sweet message. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-228",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores and surprise her with it weeks later. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-229",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal of songs that remind you of her and share it with a sweet message. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-230",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers even something as simple as coffee and a walk means the world. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-231",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers without being asked. Acts of service are love. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-232",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores — one for each day of the month. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-233",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist about all the reasons you love her. Be specific. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-234",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores even something as simple as coffee and a walk means the world. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-235",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph telling her something you love about her. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-236",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph after a long day — she doesn't even have to ask. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-237",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: of songs that remind you of her and share it with a sweet message. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-238",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: about all the reasons you love her. Be specific. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-239",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-240",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores telling her something you love about her. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-241",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-242",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note with no occasion — just because she deserves them. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-243",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist and surprise her with it weeks later. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-244",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' after a long day — she doesn't even have to ask. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-245",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting — one for each day of the month. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-246",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: and surprise her with it weeks later. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-247",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: after a long day — she doesn't even have to ask. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-248",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Remember something small she mentioned wanting even something as simple as coffee and a walk means the world. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-249",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note about all the reasons you love her. Be specific. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-250",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note about all the reasons you love her. Be specific. 🚶‍♂️☕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-251",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist of songs that remind you of her and share it with a sweet message. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-252",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph after a long day — she doesn't even have to ask. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-253",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist about all the reasons you love her. Be specific. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-254",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note after a long day — she doesn't even have to ask. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-255",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: — one for each day of the month. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-256",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores — one for each day of the month. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-257",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers — one for each day of the month. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-258",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores after a long day — she doesn't even have to ask. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-259",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note about all the reasons you love her. Be specific. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-260",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal even something as simple as coffee and a walk means the world. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-261",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist of songs that remind you of her and share it with a sweet message. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-262",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-263",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note — one for each day of the month. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-264",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph telling her something you love about her. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-265",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist without being asked. Acts of service are love. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-266",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist — one for each day of the month. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-267",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph — one for each day of the month. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-268",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal without being asked. Acts of service are love. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-269",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: without being asked. Acts of service are love. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-270",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note with no occasion — just because she deserves them. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-271",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist without being asked. Acts of service are love. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-272",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note about all the reasons you love her. Be specific. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-273",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers telling her something you love about her. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-274",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist about all the reasons you love her. Be specific. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-275",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist with no occasion — just because she deserves them. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-276",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her a voice note and surprise her with it weeks later. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-277",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers and surprise her with it weeks later. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-278",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores and surprise her with it weeks later. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-279",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal of songs that remind you of her and share it with a sweet message. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-280",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph without being asked. Acts of service are love. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-281",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores about all the reasons you love her. Be specific. 🎵🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-282",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores with no occasion — just because she deserves them. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-283",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' with no occasion — just because she deserves them. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-284",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist about all the reasons you love her. Be specific. 🎁🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-285",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: about all the reasons you love her. Be specific. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-286",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal and surprise her with it weeks later. 💌🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-287",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' and surprise her with it weeks later. 🌹🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-288",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Create a jar of 'reasons I love you' without being asked. Acts of service are love. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-289",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist of songs that remind you of her and share it with a sweet message. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-290",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal of songs that remind you of her and share it with a sweet message. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-291",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal and surprise her with it weeks later. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-292",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note of songs that remind you of her and share it with a sweet message. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-293",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Make a playlist even something as simple as coffee and a walk means the world. 🍝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-294",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Send her flowers telling her something you love about her. 🎤🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-295",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Plan a surprise mini-date: in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-296",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores — one for each day of the month. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-297",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Take over one of her chores after a long day — she doesn't even have to ask. 🧹💕🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-298",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Write her a long paragraph about all the reasons you love her. Be specific. 🏺💗🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-299",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Cook or order her favorite meal in her bag, jacket pocket, or somewhere she'll find it unexpectedly. 📝🎀",
    "emoji": "🎀"
  },
  {
    "id": "just-because-300",
    "category": "gestures",
    "scenario": "just-because",
    "text": "Leave a handwritten love note telling her something you love about her. 🏺💗🎀",
    "emoji": "🎀"
  }
];

export function getIdeasByScenario(scenarioId: string): Idea[] {
  return ideas.filter(i => i.scenario === scenarioId);
}

export function getRandomIdea(scenarioId?: string): Idea {
  const pool = scenarioId ? getIdeasByScenario(scenarioId) : ideas;
  return pool[Math.floor(Math.random() * pool.length)];
}