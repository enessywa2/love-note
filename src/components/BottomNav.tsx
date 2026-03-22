import { NavLink, useLocation } from "react-router-dom";
import { Heart, Lightbulb, HeartHandshake, CalendarHeart, Image as ImageIcon } from "lucide-react";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: Heart, label: "You" },
    { to: "/ideas", icon: Lightbulb, label: "Ideas" },
    { to: "/notes", icon: HeartHandshake, label: "Notes" },
    { to: "/calendar", icon: CalendarHeart, label: "Dates" },
    { to: "/gallery", icon: ImageIcon, label: "Gallery" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-t border-border/50 px-2 pb-[env(safe-area-inset-bottom)] animate-slide-up">
      <div className="flex items-center justify-around max-w-lg mx-auto h-16">
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <NavLink
              key={to}
              to={to}
              className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 active:scale-90"
            >
              <div className={`p-1.5 rounded-xl transition-all duration-400 ${isActive ? "bg-primary/15 shadow-glow -translate-y-1 scale-110" : "hover:-translate-y-0.5"}`}>
                <Icon
                  size={22}
                  className={`transition-all duration-300 ${isActive ? "text-primary animate-bounce-gentle" : "text-muted-foreground"}`}
                  fill={isActive ? "hsl(var(--primary))" : "none"}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </div>
              <span className={`text-[10px] font-semibold transition-all duration-300 ${isActive ? "text-primary scale-105" : "text-muted-foreground"}`}>
                {label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
