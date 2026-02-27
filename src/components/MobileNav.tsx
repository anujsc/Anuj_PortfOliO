import { Home, User, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface MobileNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function MobileNav({ activeSection, onSectionChange }: MobileNavProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "contact", icon: Mail, label: "Contact" }
  ];

  return (
    <nav className="lg:hidden fixed bottom-[72px] left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-border z-40">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
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
            </button>
          );
        })}
      </div>
    </nav>
  );
}
