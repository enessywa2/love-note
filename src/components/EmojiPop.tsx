import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  scale: number;
  delay: number;
}

export default function EmojiPop({ emoji }: { emoji: string }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 40 + Math.random() * 30;
      return {
        id: i,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        scale: 0.6 + Math.random() * 0.6,
        delay: Math.random() * 0.15,
      };
    });
    setParticles(generated);
  }, [emoji]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-emoji-burst text-2xl"
          style={{
            "--tx": `${p.x}px`,
            "--ty": `${p.y}px`,
            animationDelay: `${p.delay}s`,
            transform: `scale(${p.scale})`,
          } as React.CSSProperties}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
