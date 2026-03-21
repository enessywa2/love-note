import { useEffect, useState } from "react";

const heartEmojis = ["💕", "💗", "💖", "💓", "🩷", "💘", "✨", "🌸"];

interface FloatingHeart {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function FloatingHearts({ count = 6 }: { count?: number }) {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generated: FloatingHeart[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      left: Math.random() * 90 + 5,
      delay: Math.random() * 4,
      duration: 6 + Math.random() * 6,
      size: 12 + Math.random() * 14,
    }));
    setHearts(generated);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-up opacity-0"
          style={{
            left: `${h.left}%`,
            bottom: "-20px",
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
}
