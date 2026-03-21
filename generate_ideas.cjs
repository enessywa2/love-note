const fs = require('fs');
const path = require('path');

const scenarios = [
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
];

const data = {
  "good-morning": {
    prefixes: ["Good morning, beautiful. ", "Rise and shine, my love! ", "I woke up smiling because of you. ", "Morning, babe! ", "Hey sleepyhead. ", "Wake up, my favorite person! ", "Good morning gorgeous. ", "Hey beautiful. ", "Good morning to the person who holds my heart. ", "Sun's up, my love! ", "Good morning! Fun fact: you're amazing. ", "Morning sweetie. "],
    cores: ["You were the last thing I thought about before I fell asleep.", "I hope your day is as wonderful as you make mine.", "I get to talk to you today, and that makes me so happy.", "You shine brighter than the sun.", "Another day, another reason to be grateful for you.", "Wishing I woke up next to you today.", "I just wanted to make sure you start your day with a smile.", "You make every morning feel special.", "I can't wait to see you later.", "Just wanted to remind you how amazing you are.", "I am so incredibly lucky to have you.", "You are my entire world.", "Thinking about you makes waking up easy.", "You're my favorite thought."],
    suffixes: [" Have the best day! ☀️", " Love you! 🌅", " Can't wait to see you. 💛", " 🌷", " 💕", " ✨", " 🥰", " 🌻", " 💓", " ☕", " 🥐", " 🌞", " 💖"]
  },
  "shes-sad": {
    prefixes: ["Hey, I know things feel heavy right now. ", "I wish I could take all your sadness away. ", "You're allowed to feel everything you're feeling. ", "Bad days don't last forever. ", "I hate seeing you sad. ", "I'm so sorry you're feeling this way. ", "Whenever you're ready, I'm here. ", "Take a deep breath, my love. ", "I'm sending you so much love right now. ", "You are so strong, even when you don't feel like it. "],
    cores: ["I'm right here and I'm not going anywhere.", "Know that I love you more than words can say.", "You're still the strongest person I know.", "Want me to come over and just hold you?", "Let me treat you to your favorite comfort food today.", "I'll always be your safe space.", "We will get through this together.", "Please be gentle with yourself today.", "You don't have to carry this alone.", "My heart breaks when yours hurts.", "I am in your corner, always.", "You are safe with me.", "I admire how brave you are.", "Let me take care of you."],
    suffixes: [" 💙", " 🥺", " 🤍", " 🫂", " 🌸", " 🧸", " 🕯️", " 🤗", " 🍦", " 💕", " 🍕", " 🍫", " 🌧️"]
  },
  "you-messed-up": {
    prefixes: ["I know I hurt you and I'm truly sorry. ", "I was wrong. No excuses. ", "I've been thinking about what happened. ", "You mean everything to me. ", "I don't want to lose what we have. ", "I'm not going to pretend it didn't happen. ", "I messed up, and I'm taking full responsibility. ", "Actions speak louder than words. ", "I know sorry might not feel like enough right now. ", "I hate that I made you feel this way. "],
    cores: ["You deserve better and I'm going to do better.", "I'm sorry for how I made you feel — your feelings are completely valid.", "Can we talk? I want to make this right.", "The last thing I ever want to do is hurt you.", "Please let me make it up to you.", "I love you too much to let this come between us.", "I'm going to show you I've changed.", "Take all the time you need. I'll be right here waiting.", "I am so deeply sorry for my mistake.", "I will work every day to earn back your trust.", "I value our relationship more than anything.", "Your happiness is my priority.", "I promise to be more mindful."],
    suffixes: [" 🥀", " 😬", " 💔", " 🤍", " 😔", " 🌹", " 💗", " 🕊️", " 🥺", " 🙏", " 💌", " 🩹"]
  },
  "random-affection": {
    prefixes: ["Just randomly thinking about you. ", "I was just doing something boring and suddenly smiled. ", "You know that feeling when everything just feels right? ", "Reminder: ", "I saw something today that reminded me of you. ", "If I had to choose between breathing and loving you, ", "Me, texting you for no reason: ", "Every love song suddenly makes sense. ", "You're my favorite notification. ", "I don't need a reason to tell you I love you. "],
    cores: ["I am so lucky to have you in my life.", "I thought of you and got the biggest butterflies.", "That's how I feel whenever I'm with you.", "you're beautiful, you're loved, and you're incredible.", "You still give me butterflies every single day.", "I'd use my last breath to say I love you.", "You are the best thing that ever happened to me.", "You make my world better just by existing.", "I just wanted you to know how much you mean to me.", "My day instantly gets better when I think of you.", "I am head over heels for you.", "You are my dream come true.", "I cherish every moment with you."],
    suffixes: [" 💕", " 🥰", " ✨", " 🌸", " 🦋", " 💗", " 👋", " 🎶", " 📱", " 💛", " 💖", " 💘", " 😽"]
  },
  "miss-you": {
    prefixes: ["I miss you so much it physically hurts. ", "Everything is a little less colorful. ", "My arms feel so empty without you. ", "I keep looking at your photos. ", "Distance means nothing when someone means everything. ", "I just smelled your perfume. ", "Every second apart is a second too long. ", "Missing you is my full-time job. ", "Wish you were here right now. ", "This day is taking forever because you're not here. "],
    cores: ["Come back to me soon.", "Counting down until I can hold you again.", "I miss your face so much.", "And you mean everything to me.", "Don't judge me, I just miss you that much.", "Hurry back to me, please?", "I can't stop thinking about when I'll see you next.", "I just want to cuddle with you.", "I'm counting the minutes until we're together again.", "Life is just better when you're beside me.", "I wish I could teleport to you.", "Can't wait to kiss you again."],
    suffixes: [" 💔", " 🎨", " 🤗", " 📸", " 🌍", " 😭", " 🥺", " 💭", " 🕰️", " 🥺💕", " 🚆", " ✈️"]
  },
  "date-ideas": {
    prefixes: ["Let's go for a ", "We should plan a ", "How about a ", "I'd love to take you on a ", "Surprise! Get ready for a ", "Let's grab some ", "Let's explore a ", "We need a ", "I'm thinking of a ", "Let's do a "],
    cores: ["sunset picnic at the park", "movie marathon at home", "stargazing night", "cooking competition at home", "pottery or painting class", "farmers market visit", "bookstore date", "ice cream tasting tour", "sunrise walk with coffee", "DIY spa night", "thrift shopping adventure", "cute photoshoot in the city", "museum or art gallery visit", "scenic drive with our favorite playlist", "weekend getaway to somewhere cozy", "botanical garden stroll", "baking challenge in our kitchen", "board game marathon with takeout"],
    suffixes: [" 🧺🌸", " 🍿🛋️", " 🌟🔭", " 👩‍🍳🔪", " 🎨🖌️", " 🥕🥗", " 📚👓", " 🍦🍨", " 🌅☕", " 🕯️💆‍♀️", " 🛍️👗", " 📷✨", " 🖼️🏛️", " 🚗🎶", " 🏔️🏡", " 🌷🌿", " 🧁🎮"]
  },
  "compliments": {
    prefixes: ["The way you laugh ", "You have this incredible ability to ", "Your eyes are ", "You're not just beautiful on the outside — ", "I love how passionate you are. ", "The way you care about people ", "You make even the most ordinary days feel extraordinary. ", "Every time I see you, ", "Your smile? ", "You're the kind of person everyone deserves in their life, "],
    cores: ["makes the entire world feel lighter.", "make everyone around you feel special.", "my favorite place to get lost in.", "your heart is the most beautiful thing about you.", "It's incredibly attractive.", "is one of the million reasons I fell for you.", "You're my favorite adventure.", "I still get this little rush like it's the first time.", "Literally my favorite thing in the entire universe.", "and I'm so grateful you chose me.", "You radiate so much kindness and warmth.", "You are effortlessly gorgeous.", "Your intelligence and wit absolutely captivate me.", "There is no one else in the world like you.", "You inspire me to be a better person every day."],
    suffixes: [" 😊✨", " ✨", " 👀💕", " 💖", " 🔥", " 🌷", " 🗺️", " 😍", " 😁💗", " 🥹", " 🌟", " 💋", " 🧠💡", " 💎", " 📈💕"]
  },
  "apologies": {
    prefixes: ["I never want to be the reason you're upset. ", "You deserve someone who shows up for you perfectly. ", "I know saying sorry isn't enough. ", "The thought of losing you terrifies me. ", "I'm going to keep apologizing. ", "I'm deeply sorry for my actions. ", "I recognize where I went wrong. ", "You have every right to be mad at me. ", "I hate that I put a frown on your beautiful face. ", "Please forgive me. "],
    cores: ["I'm sorry, and I'll work hard to earn your trust back.", "I fell short, but I am learning and growing.", "Here's what I'm going to do differently.", "Please let me make things right.", "You deserve to hear it as many times as needed.", "I promise to be more mindful moving forward.", "I will reflect on this and ensure it doesn't happen again.", "I want to be the partner you truly deserve.", "I'm committed to fixing my mistake.", "I will do whatever it takes to make you smile again."],
    suffixes: [" 🤍🥀", " 📝🥀", " 💪🥀", " 🥺🥀", " 💐🥀", " 😔", " 🙏", " 💔", " 🙇‍♂️", " 🌹"]
  },
  "goodnight": {
    prefixes: ["Goodnight, my love. ", "I wish I could fall asleep holding you. ", "The moon is out and it's beautiful. ", "Before you close your eyes, ", "Goodnight to my favorite human. ", "Last text of the day: ", "Putting my phone down now. ", "One more day with you completed. ", "Sleep tight, beautiful. ", "Dream sweet dreams tonight. "],
    cores: ["Sweet dreams and know that you'll be in mine tonight.", "Imagine my arms around you.", "Almost as beautiful as you. Almost.", "Remember: you are deeply, completely, ridiculously loved.", "May your dreams be as sweet as you are.", "Today was better because you're in my life.", "Not before telling you how much I love you.", "One more day of being grateful. You are my everything.", "I can't wait to wake up and love you again tomorrow.", "I'll be dreaming of your beautiful smile."],
    suffixes: [" 🌙", " 💤", " 🌕", " 💜", " 🍯", " 🌟", " 😴💕", " 🤍", " 🌌", " 🌠"]
  },
  "just-because": {
    prefixes: ["Leave a handwritten love note ", "Send her flowers ", "Make a playlist ", "Cook or order her favorite meal ", "Send her a voice note ", "Plan a surprise mini-date: ", "Remember something small she mentioned wanting ", "Take over one of her chores ", "Write her a long paragraph ", "Create a jar of 'reasons I love you' "],
    cores: ["in her bag, jacket pocket, or somewhere she'll find it unexpectedly.", "with no occasion — just because she deserves them.", "of songs that remind you of her and share it with a sweet message.", "after a long day — she doesn't even have to ask.", "telling her something you love about her.", "even something as simple as coffee and a walk means the world.", "and surprise her with it weeks later.", "without being asked. Acts of service are love.", "about all the reasons you love her. Be specific.", "— one for each day of the month."],
    suffixes: [" 💌🎀", " 🌹🎀", " 🎵🎀", " 🍝🎀", " 🎤🎀", " 🚶‍♂️☕🎀", " 🎁🎀", " 🧹💕🎀", " 📝🎀", " 🏺💗🎀"]
  }
};

let allIdeas = [];

for (const scenarioId in data) {
  const parts = data[scenarioId];
  const { prefixes, cores, suffixes } = parts;
  let counter = 1;
  const targetPerCategory = 300; 
  
  const combinations = new Set();
  const emoji = scenarios.find(scn => scn.id === scenarioId).emoji;
  const category = (scenarioId === 'date-ideas') ? 'dates' : (scenarioId === 'just-because' ? 'gestures' : 'texts');

  let attempts = 0;
  // Fallback to prevent infinite loops if combinations < target
  const maxPossible = prefixes.length * cores.length * suffixes.length;
  const actualTarget = Math.min(targetPerCategory, maxPossible);

  while (combinations.size < actualTarget && attempts < 5000) {
    attempts++;
    const p = prefixes[Math.floor(Math.random() * prefixes.length)];
    const c = cores[Math.floor(Math.random() * cores.length)];
    const s = suffixes[Math.floor(Math.random() * suffixes.length)];
    const comboText = p + c + s;
    
    if (!combinations.has(comboText)) {
      combinations.add(comboText);
      allIdeas.push({
        id: scenarioId + '-' + counter,
        category,
        scenario: scenarioId,
        text: comboText,
        emoji
      });
      counter++;
    }
  }
}

const fileContent = `export interface Idea {
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

export const ideas: Idea[] = ${JSON.stringify(allIdeas, null, 2)};

export function getIdeasByScenario(scenarioId: string): Idea[] {
  return ideas.filter(i => i.scenario === scenarioId);
}

export function getRandomIdea(scenarioId?: string): Idea {
  const pool = scenarioId ? getIdeasByScenario(scenarioId) : ideas;
  return pool[Math.floor(Math.random() * pool.length)];
}`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'ideas.ts'), fileContent);
console.log('Successfully generated', allIdeas.length, 'ideas!');
