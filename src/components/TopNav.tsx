import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface TopNavProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function TopNav({ searchQuery, onSearchChange }: TopNavProps) {
  return (
    <header className="h-16 bg-background/80 backdrop-blur-xl border-b border-border sticky top-0 z-50 flex items-center px-4 gap-4">
      {/* Logo */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading text-sm font-bold">
          AR
        </div>
      </div>

      {/* Nav buttons */}
      <div className="flex items-center gap-1">
        <button onClick={() => window.history.back()} className="w-8 h-8 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" aria-label="Go back">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button onClick={() => window.history.forward()} className="w-8 h-8 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" aria-label="Go forward">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects, skills, tech..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-9 pl-10 pr-4 rounded-full bg-card border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            aria-label="Search projects"
          />
        </div>
      </div>

      {/* CTA */}
      <motion.a
        href="mailto:hello@example.com"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all glow-green-sm"
      >
        Hire Me
      </motion.a>
    </header>
  );
}
