import { MapPin, Github, Linkedin, Twitter, Eye, Star, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import type { profile as ProfileType } from "@/data/portfolio";

interface RightPanelProps {
  profile: typeof ProfileType;
  skills: { name: string; level: "beginner" | "intermediate" | "expert" }[];
}

function SkillPill({ name, level }: { name: string; level: string }) {
  const colorMap: Record<string, string> = {
    expert: "bg-primary/20 text-primary border-primary/30",
    intermediate: "bg-accent/15 text-accent border-accent/30",
    beginner: "bg-muted text-muted-foreground border-border",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium border ${colorMap[level] || colorMap.beginner}`}
      title={`${name} — ${level}`}
    >
      {name}
    </span>
  );
}

function StatItem({ icon: Icon, label, value }: { icon: React.FC<{ className?: string }>; label: string; value: number }) {
  return (
    <div className="text-center">
      <Icon className="h-4 w-4 text-muted-foreground mx-auto mb-1" />
      <p className="text-lg font-heading font-bold text-foreground">{value.toLocaleString()}</p>
      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function RightPanel({ profile, skills }: RightPanelProps) {
  return (
    <aside className="hidden xl:flex flex-col w-[280px] shrink-0 border-l border-border h-[calc(100vh-136px)] sticky top-16 overflow-y-auto p-4 gap-6">
      {/* Profile Card */}
      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
          <span className="text-2xl font-heading font-bold text-primary">{profile.avatar}</span>
        </div>
        <h2 className="font-heading font-bold text-foreground">{profile.name}</h2>
        <p className="text-sm text-muted-foreground mt-0.5">{profile.title}</p>
        <div className="flex items-center justify-center gap-1 mt-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          {profile.location}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 py-3 border-y border-border">
        <StatItem icon={Eye} label="Views" value={profile.stats.views} />
        <StatItem icon={Star} label="Stars" value={profile.stats.stars} />
        <StatItem icon={FolderOpen} label="Projects" value={profile.stats.projects} />
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Skills & Genres</h3>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <SkillPill key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Connect</h3>
        <div className="flex flex-col gap-2">
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-4 w-4" /> Follow on LinkedIn
          </a>
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-4 w-4" /> GitHub Profile
          </a>
          <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="h-4 w-4" /> Twitter / X
          </a>
        </div>
      </div>

      {/* CTA */}
      <motion.a
        href="mailto:hello@example.com"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all glow-green-sm"
      >
        Start a Session
      </motion.a>
    </aside>
  );
}
