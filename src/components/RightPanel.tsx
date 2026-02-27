import { MapPin, Github, Linkedin, Twitter, Eye, Star, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import type { profile as ProfileType } from "@/data/portfolio";

interface RightPanelProps {
  profile: typeof ProfileType;
  skills: { name: string; level: "beginner" | "intermediate" | "expert" }[];
  activeSection?: string;
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

export default function RightPanel({ profile, skills, activeSection = "home" }: RightPanelProps) {
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

      {/* Context-Aware Content */}
      {activeSection === "home" && (
        <>
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
        </>
      )}

      {activeSection === "about" && (
        <div className="space-y-4">
          <div className="bg-card rounded-lg p-4">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Quick Facts</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>🎂 Developer since 2021</li>
              <li>💼 5+ years experience</li>
              <li>🌍 15 countries visited</li>
              <li>📸 Photography enthusiast</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-4">
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Currently</h3>
            <p className="text-sm text-foreground">Building AI-powered tools & exploring generative art</p>
          </div>
        </div>
      )}

      {activeSection === "experience" && (
        <div className="space-y-4">
          <div className="bg-card rounded-lg p-4">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Top Skills</h3>
            <div className="space-y-2">
              {skills.filter(s => s.level === "expert").slice(0, 5).map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{skill.name}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-4 text-center">
            <p className="text-3xl font-heading font-bold text-primary mb-1">5+</p>
            <p className="text-xs text-muted-foreground">Years Experience</p>
          </div>
        </div>
      )}

      {activeSection === "contact" && (
        <div className="space-y-4">
          <div className="bg-card rounded-lg p-4">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Quick Response</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-foreground">Available now</span>
            </div>
            <p className="text-xs text-muted-foreground">Usually responds within 24 hours</p>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-4">
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Best Time</h3>
            <p className="text-sm text-foreground">9 AM - 6 PM IST</p>
            <p className="text-xs text-muted-foreground mt-1">GMT+5:30</p>
          </div>
        </div>
      )}

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
