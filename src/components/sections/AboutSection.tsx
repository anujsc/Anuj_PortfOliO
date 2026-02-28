import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  Heart,
  Bot,
  Monitor,
  GitBranch,
  BookOpen,
  Rocket,
  Cpu,
  Link2,
  FileCode2,
  Atom,
  Zap,
  Server,
  Hash,
  TrendingUp,
  Globe,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { aboutMe } from "@/data/portfolio";
import profile from "@/assets/profilepic.jpg";

const interestIconMap: Record<string, React.FC<{ className?: string }>> = {
  "AI/ML": Bot,
  "Full-Stack Dev": Monitor,
  "Open Source": GitBranch,
  "Learning": BookOpen,
};

const factIconMap: Record<string, React.FC<{ className?: string }>> = {
  "Projects Built": Rocket,
  "Tech Stack": Cpu,
  "APIs Integrated": Link2,
  "Code Reviews": FileCode2,
};

const techIconMap: Record<string, React.FC<{ className?: string }>> = {
  "React": Atom,
  "Angular": Zap,
  "Node.js": Server,
  "TypeScript": Hash,
};

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto"
    >
      <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8">
        About Me
      </h1>

      <div className="grid lg:grid-cols-[1.5fr,1fr] gap-8">
        {/* Left Column */}
        <div className="space-y-8 order-2 lg:order-1">
          {/* Story */}
          <div className="space-y-4">
            {aboutMe.story.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pull Quote */}
          <div className="border-l-4 border-primary pl-6 py-2">
            <p className="text-xl font-heading italic text-foreground">
              "{aboutMe.pullQuote}"
            </p>
          </div>

          {/* Timeline */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              Journey Milestones
            </h2>
            <div className="space-y-3">
              {aboutMe.timeline.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-primary font-bold text-lg shrink-0 w-16">
                    {item.year}
                  </span>
                  <p className="text-muted-foreground pt-0.5">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              Beyond the Code
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutMe.interests.map((interest, i) => {
                const IIcon = interestIconMap[interest.name] ?? Sparkles;
                return (
                  <div
                    key={i}
                    className="bg-card rounded-xl p-4 hover:bg-card-hover transition-colors ring-1 ring-white/5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <IIcon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{interest.name}</h3>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fun Facts */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              By the Numbers
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {aboutMe.funFacts.map((fact, i) => {
                const FIcon = factIconMap[fact.label] ?? Sparkles;
                return (
                  <div key={i} className="bg-card rounded-xl p-4 text-center ring-1 ring-white/5">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <FIcon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-2xl font-heading font-bold text-primary mb-1">{fact.value}</p>
                    <p className="text-xs text-muted-foreground">{fact.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 order-1 lg:order-2">
          {/* Headshot */}
          <div className="bg-card rounded-xl p-6 text-center">
            <div className="w-32 h-32 rounded-full border-4 border-primary flex items-center justify-center mx-auto mb-4 overflow-hidden">
              <img src={profile} alt="profile" className="w-full h-full object-cover" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {aboutMe.availability.message}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Languages
            </h3>
            <div className="space-y-2">
              {aboutMe.languages.map((lang, i) => (
                <div key={i} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">{lang}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Influenced By */}
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
              <Award className="h-4 w-4" />
              Influenced By
            </h3>
            <div className="space-y-3">
              {aboutMe.influencedBy.map((item, i) => {
                const TIcon = techIconMap[item.name] ?? Sparkles;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0">
                      <TIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.type}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Facts */}
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
              Quick Facts
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Calendar className="h-4 w-4 text-primary shrink-0" />
                Based in {aboutMe.timeline[0]?.year || "2021"}
              </li>
              <li className="flex items-center gap-2.5">
                <TrendingUp className="h-4 w-4 text-primary shrink-0" />
                {aboutMe.timeline.length} major milestones
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-primary shrink-0" />
                {aboutMe.interests.length} hobbies outside tech
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-primary shrink-0" />
                Speaks {aboutMe.languages.length} languages
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
