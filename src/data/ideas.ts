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
  // Good Morning
  { id: "gm1", category: "texts", scenario: "good-morning", text: "Good morning, beautiful. You were the last thing I thought about before I fell asleep and the first thing on my mind when I woke up 💛", emoji: "🌅" },
  { id: "gm2", category: "texts", scenario: "good-morning", text: "Rise and shine, my love! I hope your day is as wonderful as you make mine every single day ☀️", emoji: "🌅" },
  { id: "gm3", category: "texts", scenario: "good-morning", text: "I woke up smiling because I remembered I get to talk to you today. Good morning, gorgeous 🌷", emoji: "🌅" },
  { id: "gm4", category: "texts", scenario: "good-morning", text: "Hey sleepyhead 🥰 just wanted to be the first person to tell you how amazing you are today", emoji: "🌅" },
  { id: "gm5", category: "texts", scenario: "good-morning", text: "Good morning to the person who makes my heart do that little flip thing 💓", emoji: "🌅" },
  { id: "gm6", category: "texts", scenario: "good-morning", text: "The sun came up but honestly you shine brighter. Have the best day, my love ✨", emoji: "🌅" },
  { id: "gm7", category: "texts", scenario: "good-morning", text: "Woke up wishing you were here next to me. Can't wait to see you 🥺", emoji: "🌅" },
  { id: "gm8", category: "texts", scenario: "good-morning", text: "Good morning! Fun fact: you're literally the cutest person alive. Don't argue with science 🧪💕", emoji: "🌅" },
  { id: "gm9", category: "texts", scenario: "good-morning", text: "Morning, babe! I made you a virtual coffee ☕ because you deserve everything warm and sweet", emoji: "🌅" },
  { id: "gm10", category: "texts", scenario: "good-morning", text: "Another day, another reason to be grateful for you. Good morning, my favorite person 🌻", emoji: "🌅" },

  // She's Sad
  { id: "sad1", category: "texts", scenario: "shes-sad", text: "Hey, I know things feel heavy right now. I'm right here and I'm not going anywhere. You don't have to go through this alone 💙", emoji: "🥺" },
  { id: "sad2", category: "texts", scenario: "shes-sad", text: "I wish I could take all your sadness away. For now, know that I love you more than words can say 🤍", emoji: "🥺" },
  { id: "sad3", category: "texts", scenario: "shes-sad", text: "You're allowed to feel everything you're feeling. And you're still the strongest person I know 🌸", emoji: "🥺" },
  { id: "sad4", category: "texts", scenario: "shes-sad", text: "Bad days don't last forever, but my love for you does. Want me to come over and just hold you? 🫂", emoji: "🥺" },
  { id: "sad5", category: "texts", scenario: "shes-sad", text: "I'm ordering your comfort food right now. No arguments. You deserve to be taken care of 🍕💗", emoji: "🥺" },
  { id: "sad6", category: "texts", scenario: "shes-sad", text: "You know what? Let's watch your favorite movie tonight. I'll bring snacks and all the blankets 🧸", emoji: "🥺" },
  { id: "sad7", category: "texts", scenario: "shes-sad", text: "Even on your worst days, you're still my favorite person in the entire universe. Never forget that 🌍💕", emoji: "🥺" },
  { id: "sad8", category: "texts", scenario: "shes-sad", text: "I can't fix everything but I can sit with you in the dark until the light comes back. I'm here 🕯️", emoji: "🥺" },
  { id: "sad9", category: "texts", scenario: "shes-sad", text: "Sending you the biggest virtual hug right now. Can you feel it? Because it's enormous 🤗", emoji: "🥺" },
  { id: "sad10", category: "texts", scenario: "shes-sad", text: "I hate seeing you sad. Tell me what you need — space, a hug, ice cream, all three? I got you 🍦", emoji: "🥺" },

  // You Messed Up
  { id: "mu1", category: "texts", scenario: "you-messed-up", text: "I know I hurt you and I'm truly sorry. You deserve better and I'm going to do better. I promise 🥀", emoji: "😬" },
  { id: "mu2", category: "texts", scenario: "you-messed-up", text: "I was wrong. No excuses. I'm sorry for how I made you feel — your feelings are completely valid 💔", emoji: "😬" },
  { id: "mu3", category: "texts", scenario: "you-messed-up", text: "I've been thinking about what happened and I realize how much I messed up. Can we talk? I want to make this right 🤍", emoji: "😬" },
  { id: "mu4", category: "texts", scenario: "you-messed-up", text: "You mean everything to me and the last thing I ever want to do is hurt you. I'm so sorry, baby 😔", emoji: "😬" },
  { id: "mu5", category: "texts", scenario: "you-messed-up", text: "I don't want to lose what we have over something stupid I did. Please let me make it up to you 🌹", emoji: "😬" },
  { id: "mu6", category: "texts", scenario: "you-messed-up", text: "I'm not going to pretend it didn't happen. I messed up, and I'm taking full responsibility. I love you too much to let this come between us 💗", emoji: "😬" },
  { id: "mu7", category: "texts", scenario: "you-messed-up", text: "Actions speak louder than words, so I'm going to show you I've changed. But first — I'm truly, deeply sorry 🥺", emoji: "😬" },
  { id: "mu8", category: "texts", scenario: "you-messed-up", text: "I know sorry might not feel like enough right now. Take all the time you need. I'll be right here waiting 🕊️", emoji: "😬" },

  // Random Affection
  { id: "ra1", category: "texts", scenario: "random-affection", text: "Just randomly thinking about how lucky I am to have you in my life. That's it. That's the text 💕", emoji: "💕" },
  { id: "ra2", category: "texts", scenario: "random-affection", text: "I was just doing something boring and suddenly smiled because I thought of you 🥰", emoji: "💕" },
  { id: "ra3", category: "texts", scenario: "random-affection", text: "You know that feeling when everything just feels right? That's how I feel whenever I'm with you ✨", emoji: "💕" },
  { id: "ra4", category: "texts", scenario: "random-affection", text: "Reminder: you're beautiful, you're loved, and you make my world better just by existing 🌸", emoji: "💕" },
  { id: "ra5", category: "texts", scenario: "random-affection", text: "I saw something today that reminded me of you and I got the biggest butterflies. You still give me butterflies 🦋", emoji: "💕" },
  { id: "ra6", category: "texts", scenario: "random-affection", text: "If I had to choose between breathing and loving you, I'd use my last breath to say I love you 💗", emoji: "💕" },
  { id: "ra7", category: "texts", scenario: "random-affection", text: "Me, texting you for no reason other than the fact that you're incredible and I love you: hi 👋💕", emoji: "💕" },
  { id: "ra8", category: "texts", scenario: "random-affection", text: "Every love song suddenly makes sense because of you. Just wanted you to know that 🎶", emoji: "💕" },
  { id: "ra9", category: "texts", scenario: "random-affection", text: "You're my favorite notification, my favorite person, and my favorite everything 📱💖", emoji: "💕" },
  { id: "ra10", category: "texts", scenario: "random-affection", text: "I don't need a reason to tell you I love you. So here it is: I love you 💛", emoji: "💕" },

  // Miss You
  { id: "my1", category: "texts", scenario: "miss-you", text: "I miss you so much it physically hurts. Is that dramatic? Maybe. Is it true? Absolutely 💔", emoji: "💭" },
  { id: "my2", category: "texts", scenario: "miss-you", text: "Everything is a little less colorful when you're not around. Come back to me soon 🎨", emoji: "💭" },
  { id: "my3", category: "texts", scenario: "miss-you", text: "My arms feel so empty without you in them. Counting down until I can hold you again 🤗", emoji: "💭" },
  { id: "my4", category: "texts", scenario: "miss-you", text: "I keep looking at your photos and smiling like a complete fool. I miss your face 📸", emoji: "💭" },
  { id: "my5", category: "texts", scenario: "miss-you", text: "Distance means nothing when someone means everything. And you mean everything to me 🌍💕", emoji: "💭" },
  { id: "my6", category: "texts", scenario: "miss-you", text: "I just sprayed your perfume on my pillow. Don't judge me, I miss you that much 😭", emoji: "💭" },
  { id: "my7", category: "texts", scenario: "miss-you", text: "Every second apart is a second too long. Hurry back to me, please? 🥺", emoji: "💭" },
  { id: "my8", category: "texts", scenario: "miss-you", text: "Missing you is my full-time job apparently because I can't stop doing it 💭💕", emoji: "💭" },

  // Date Ideas
  { id: "di1", category: "dates", scenario: "date-ideas", text: "Sunset picnic at the park with homemade sandwiches, fruit, and a cozy blanket 🧺", emoji: "🌸" },
  { id: "di2", category: "dates", scenario: "date-ideas", text: "Cook dinner together at home — pick a recipe you've never tried before and make it an adventure 👩‍🍳", emoji: "🌸" },
  { id: "di3", category: "dates", scenario: "date-ideas", text: "Stargazing night — drive somewhere dark, bring blankets, and look up at the stars together 🌟", emoji: "🌸" },
  { id: "di4", category: "dates", scenario: "date-ideas", text: "Movie marathon at home — let her pick all the movies, make popcorn, build a pillow fort 🍿", emoji: "🌸" },
  { id: "di5", category: "dates", scenario: "date-ideas", text: "Take a pottery or painting class together — bonus points for making something for each other 🎨", emoji: "🌸" },
  { id: "di6", category: "dates", scenario: "date-ideas", text: "Explore a farmers market together, buy random ingredients, and challenge each other to cook with them 🥕", emoji: "🌸" },
  { id: "di7", category: "dates", scenario: "date-ideas", text: "Go on a bookstore date — pick a book for each other and read them together over the next month 📚", emoji: "🌸" },
  { id: "di8", category: "dates", scenario: "date-ideas", text: "Ice cream tasting tour — visit 3 different ice cream shops and rate them all 🍦", emoji: "🌸" },
  { id: "di9", category: "dates", scenario: "date-ideas", text: "Sunrise walk with coffee — wake up early, get her favorite drink, and watch the world wake up 🌅", emoji: "🌸" },
  { id: "di10", category: "dates", scenario: "date-ideas", text: "DIY spa night at home — face masks, candles, massage oils, soft music, and lots of love 🕯️", emoji: "🌸" },
  { id: "di11", category: "dates", scenario: "date-ideas", text: "Go thrift shopping together and find the most ridiculous outfits for each other 🛍️", emoji: "🌸" },
  { id: "di12", category: "dates", scenario: "date-ideas", text: "Have a photoshoot together in a pretty spot — take turns being each other's photographer 📷", emoji: "🌸" },

  // Compliments
  { id: "c1", category: "texts", scenario: "compliments", text: "The way you laugh makes the entire world feel lighter. Never stop laughing, baby 😊", emoji: "✨" },
  { id: "c2", category: "texts", scenario: "compliments", text: "You have this incredible ability to make everyone around you feel special. You're actual magic ✨", emoji: "✨" },
  { id: "c3", category: "texts", scenario: "compliments", text: "Your eyes are my favorite place to get lost in. I could stare at them forever 👀💕", emoji: "✨" },
  { id: "c4", category: "texts", scenario: "compliments", text: "You're not just beautiful on the outside — your heart is the most beautiful thing about you 💖", emoji: "✨" },
  { id: "c5", category: "texts", scenario: "compliments", text: "I love how passionate you are about the things you care about. It's incredibly attractive 🔥", emoji: "✨" },
  { id: "c6", category: "texts", scenario: "compliments", text: "The way you care about people is one of the million reasons I fell for you 🌷", emoji: "✨" },
  { id: "c7", category: "texts", scenario: "compliments", text: "You make even the most ordinary days feel extraordinary. You're my favorite adventure 🗺️", emoji: "✨" },
  { id: "c8", category: "texts", scenario: "compliments", text: "Every time I see you, I still get this little rush like it's the first time. You take my breath away 😍", emoji: "✨" },
  { id: "c9", category: "texts", scenario: "compliments", text: "Your smile? Literally my favorite thing in the entire universe. Not exaggerating even a little 😁💗", emoji: "✨" },
  { id: "c10", category: "texts", scenario: "compliments", text: "You're the kind of person everyone deserves in their life, and I'm so grateful you chose me 🥹", emoji: "✨" },

  // Apologies
  { id: "a1", category: "texts", scenario: "apologies", text: "I never want to be the reason you're upset. I'm sorry, and I'll work hard to earn your trust back 🤍", emoji: "🥀" },
  { id: "a2", category: "texts", scenario: "apologies", text: "You deserve someone who shows up for you perfectly, and I fell short. I'm sorry, and I'm learning 📝", emoji: "🥀" },
  { id: "a3", category: "texts", scenario: "apologies", text: "I know saying sorry isn't enough, so here's what I'm going to do differently… 💪", emoji: "🥀" },
  { id: "a4", category: "texts", scenario: "apologies", text: "The thought of losing you over my mistake terrifies me. Please let me make things right 🥺", emoji: "🥀" },
  { id: "a5", category: "texts", scenario: "apologies", text: "I'm going to keep apologizing — not because you asked me to, but because you deserve to hear it as many times as needed 💐", emoji: "🥀" },

  // Goodnight
  { id: "gn1", category: "texts", scenario: "goodnight", text: "Goodnight, my love. Sweet dreams and know that you'll be in mine tonight 🌙", emoji: "🌙" },
  { id: "gn2", category: "texts", scenario: "goodnight", text: "I wish I could fall asleep holding you. Until then, imagine my arms around you. Goodnight, baby 💤", emoji: "🌙" },
  { id: "gn3", category: "texts", scenario: "goodnight", text: "The moon is out and it's almost as beautiful as you. Almost. Goodnight, gorgeous 🌕", emoji: "🌙" },
  { id: "gn4", category: "texts", scenario: "goodnight", text: "Before you close your eyes, remember: you are deeply, completely, ridiculously loved. Sleep tight 💜", emoji: "🌙" },
  { id: "gn5", category: "texts", scenario: "goodnight", text: "Goodnight to my favorite human. May your dreams be as sweet as you are 🍯", emoji: "🌙" },
  { id: "gn6", category: "texts", scenario: "goodnight", text: "Last text of the day and it's to tell you: today was better because you're in my life. Night night 🌟", emoji: "🌙" },
  { id: "gn7", category: "texts", scenario: "goodnight", text: "Putting my phone down but not before telling you how much I love you. Sleep well, angel 😴💕", emoji: "🌙" },
  { id: "gn8", category: "texts", scenario: "goodnight", text: "One more day with you completed. One more day of being grateful. Goodnight, my everything 🤍", emoji: "🌙" },

  // Just Because
  { id: "jb1", category: "gestures", scenario: "just-because", text: "Leave a handwritten love note in her bag, jacket pocket, or somewhere she'll find it unexpectedly 💌", emoji: "🎀" },
  { id: "jb2", category: "gestures", scenario: "just-because", text: "Send her flowers to her workplace or home with no occasion — just because she deserves them 🌹", emoji: "🎀" },
  { id: "jb3", category: "gestures", scenario: "just-because", text: "Make a playlist of songs that remind you of her and share it with a sweet message 🎵", emoji: "🎀" },
  { id: "jb4", category: "gestures", scenario: "just-because", text: "Cook or order her favorite meal after a long day — she doesn't even have to ask 🍝", emoji: "🎀" },
  { id: "jb5", category: "gestures", scenario: "just-because", text: "Send her a voice note telling her something you love about her. Hearing your voice hits different 🎤", emoji: "🎀" },
  { id: "jb6", category: "gestures", scenario: "just-because", text: "Plan a surprise mini-date: even something as simple as coffee and a walk means the world 🚶‍♂️☕", emoji: "🎀" },
  { id: "jb7", category: "gestures", scenario: "just-because", text: "Remember something small she mentioned wanting and surprise her with it weeks later 🎁", emoji: "🎀" },
  { id: "jb8", category: "gestures", scenario: "just-because", text: "Take over one of her chores or responsibilities without being asked. Acts of service are love 🧹💕", emoji: "🎀" },
  { id: "jb9", category: "gestures", scenario: "just-because", text: "Write her a long paragraph about all the reasons you love her. Be specific. Details matter 📝", emoji: "🎀" },
  { id: "jb10", category: "gestures", scenario: "just-because", text: "Create a jar of 'reasons I love you' — one for each day of the month 🏺💗", emoji: "🎀" },
];

export function getIdeasByScenario(scenarioId: string): Idea[] {
  return ideas.filter(i => i.scenario === scenarioId);
}

export function getRandomIdea(scenarioId?: string): Idea {
  const pool = scenarioId ? getIdeasByScenario(scenarioId) : ideas;
  return pool[Math.floor(Math.random() * pool.length)];
}
