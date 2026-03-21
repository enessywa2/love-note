import mascotImg from "@/assets/mascot.png";
import { MASCOT_TIPS } from "@/data/constants";

interface MascotProps {
  message?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function getRandomTip() {
  return MASCOT_TIPS[Math.floor(Math.random() * MASCOT_TIPS.length)];
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-20 h-20",
  lg: "w-28 h-28",
};

export default function Mascot({ message, size = "md", className = "" }: MascotProps) {
  return (
    <div className={`flex items-end gap-3 ${className}`}>
      <img
        src={mascotImg}
        alt="Love Bear mascot"
        className={`${sizeClasses[size]} animate-float drop-shadow-md`}
      />
      {message && (
        <div className="relative bg-card rounded-2xl rounded-bl-sm px-4 py-3 shadow-soft max-w-[220px] border border-border/50">
          <p className="text-sm text-foreground/80 leading-relaxed">{message}</p>
        </div>
      )}
    </div>
  );
}
