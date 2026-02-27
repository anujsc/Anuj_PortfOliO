import { Link } from "react-router-dom";
import {
  LayoutGrid,
  UserRound,
  GraduationCap,
  AtSign,
  Music,
} from "lucide-react";
import { motion } from "framer-motion";

interface MobileNavProps {
  activeSection: string;
  sectionToPath: Record<string, string>;
}

export default function MobileNav({
  activeSection,
  sectionToPath,
}: MobileNavProps) {
  const navItems = [
    { id: "home", icon: LayoutGrid, label: "Home" },
    { id: "about", icon: UserRound, label: "About" },
    { id: "experience", icon: GraduationCap, label: "Experience" },
    { id: "spotify", icon: Music, label: "Spotify" },
    { id: "contact", icon: AtSign, label: "Contact" },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-card/95 backdrop-blur-xl border-t border-border z-50">
      <div className="flex items-center justify-around px-2 py-2 h-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <Link
              key={item.id}
              to={sectionToPath[item.id] ?? "/"}
              className="relative flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors"
              aria-label={item.label}
            >
              <Icon
                className={`h-5 w-5 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span
                className={`text-[10px] font-medium transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
