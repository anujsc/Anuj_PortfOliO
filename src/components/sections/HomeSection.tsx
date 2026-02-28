// PERF: Memoized filtered projects and optimized image loading
import { useState, useMemo, memo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import LazyImage from "@/components/LazyImage";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import profilePic from "@/assets/profilepic.jpg";

interface HomeSectionProps {
  searchQuery: string;
  onSelectProject: (project: Project) => void;
  greeting: string;
}

function HomeSection({
  searchQuery,
  onSelectProject,
  greeting,
}: HomeSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const navigate = useNavigate();

  // PERF: Memoize brick projects to avoid recalculation
  const brickProjects = useMemo(() => projects.slice(0, 8), []);

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Category filter
    if (activeFilter === "featured") {
      filtered = projects.filter((p) => p.featured);
    } else if (activeFilter !== "all") {
      filtered = projects.filter((p) => p.category === activeFilter);
    }

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q)),
      );
    }

    return filtered;
  }, [activeFilter, searchQuery]);

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "AI", value: "ai" },
    { label: "Web", value: "web" },
    { label: "Frontend/UI", value: "frontend" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* ── HERO IDENTITY BLOCK — 2-col grid on desktop ── */}
      <div className="mb-8 grid grid-cols-1 lg:grid-cols-[1fr,auto] items-center gap-6 lg:gap-10">

        {/* LEFT: Text Content */}
        <div className="min-w-0">
          {/* Pre-text label */}
          <motion.p
            className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {greeting} &mdash; Welcome to my portfolio
          </motion.p>

          {/* Main headline */}
          <motion.h1
            className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-foreground leading-tight mb-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            I&apos;m{" "}
            <span className="text-gradient-green">Anuj Chaudhari</span>
            {" "}—{" "}
            <br className="hidden sm:block" />
            Full-Stack Developer
          </motion.h1>

          {/* Sub-description */}
          <motion.p
            className="text-muted-foreground max-w-lg leading-relaxed mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            Building AI-powered web applications with{" "}
            <span className="text-foreground font-medium">React, Angular &amp; Node.js</span>.
            Currently crafting enterprise ERP solutions at{" "}
            <span className="text-foreground font-medium">Enprosys Infotech</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate("/contact"); }}
              className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 active:scale-95 transition-all glow-green-sm shadow-lg shadow-primary/20"
            >
              Let&apos;s Collaborate →
            </a>
            <a
              href="/Anuj_Chaudhari_Resume.pdf"
              download
              className="px-5 py-2.5 rounded-full border border-border text-muted-foreground text-sm font-medium hover:text-foreground hover:border-primary/50 active:scale-95 transition-all"
            >
              ↓ Download CV
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Profile photo visual — desktop only */}
        <motion.div
          className="hidden lg:flex items-center justify-center shrink-0 pr-6"
          initial={{ opacity: 0, scale: 0.88, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-[210px] h-[210px]">

            {/* Ambient glow behind photo */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />

            {/* Gradient ring + photo */}
            <div className="relative w-[210px] h-[210px] rounded-full p-[3px] bg-gradient-to-br from-primary via-primary/50 to-primary/10 shadow-xl shadow-primary/20">
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                <LazyImage
                  src={profilePic}
                  alt="Anuj Chaudhari"
                  className="w-full h-full object-cover"
                  width={210}
                  height={210}
                />
              </div>
            </div>

            {/* Floating badge: Company (top-right) */}
            <motion.div
              className="absolute -top-3 -right-12 bg-card/95 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 shadow-xl min-w-[130px]"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.35 }}
            >
              <p className="text-[10px] text-muted-foreground leading-none mb-1">Currently @</p>
              <p className="text-[11px] font-semibold text-foreground leading-tight">Enprosys Infotech</p>
            </motion.div>

            {/* Floating badge: Open to work (bottom-left) */}
            <motion.div
              className="absolute -bottom-3 -left-10 bg-primary/10 backdrop-blur-md border border-primary/30 rounded-xl px-3 py-2 shadow-xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.35 }}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                <p className="text-[11px] font-semibold text-primary leading-none whitespace-nowrap">Open to work</p>
              </div>
            </motion.div>

            {/* Floating badge: Tech stack (left-center) */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -left-16 bg-card/95 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 shadow-xl"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85, duration: 0.35 }}
            >
              <p className="text-[10px] font-mono text-primary leading-none">React · Node.js</p>
              <p className="text-[10px] font-mono text-muted-foreground leading-none mt-0.5">Angular · .NET</p>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* ── MOBILE ONLY: Spotify-style 2-col brick grid ── */}
      {!searchQuery && (
        <div className="sm:hidden mb-6">
          <div className="grid grid-cols-2 gap-2">
            {brickProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
                className="flex items-center gap-0 rounded-md bg-white/8 hover:bg-white/12 active:scale-95 transition-all overflow-hidden h-14 text-left"
                aria-label={project.title}
              >
                {/* PERF: Use LazyImage with explicit dimensions to prevent CLS */}
                <LazyImage
                  src={
                    project.images && project.images.length > 0
                      ? project.images[0]
                      : project.thumbnail
                  }
                  alt={project.title}
                  className="w-14 h-14 shrink-0"
                  width={56}
                  height={56}
                />
                <span className="px-3 text-xs font-semibold text-foreground leading-tight line-clamp-2">
                  {project.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setActiveFilter(option.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === option.value
              ? "bg-primary text-primary-foreground"
              : "bg-card text-muted-foreground hover:bg-card-hover hover:text-foreground"
              }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <section aria-label="Projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={onSelectProject}
            />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-2">No projects found</p>
            <button
              onClick={() => {
                setActiveFilter("all");
              }}
              className="text-sm text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Featured Categories */}
      {activeFilter === "all" && !searchQuery && (
        <section className="mt-12" aria-label="Categories">
          <h2 className="text-xl font-heading font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <button
              onClick={() => setActiveFilter("ai")}
              className="h-32 rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 flex items-end p-4 font-heading font-semibold text-foreground hover:scale-[1.02] transition-transform text-left"
            >
              <div>
                <div className="text-2xl mb-1"> </div>
                AI Projects
              </div>
            </button>
            <button
              onClick={() => setActiveFilter("web")}
              className="h-32 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-500/5 flex items-end p-4 font-heading font-semibold text-foreground hover:scale-[1.02] transition-transform text-left"
            >
              <div>
                <div className="text-2xl mb-1"></div>
                Web Apps
              </div>
            </button>
            <button
              onClick={() => setActiveFilter("data")}
              className="h-32 rounded-xl bg-gradient-to-br from-accent/30 to-accent/5 flex items-end p-4 font-heading font-semibold text-foreground hover:scale-[1.02] transition-transform text-left"
            >
              <div>
                <div className="text-2xl mb-1"></div>
                Frontend/Ui-Ux
              </div>
            </button>
          </div>
        </section>
      )}
    </motion.div>
  );
}

// PERF: Memoize component to prevent unnecessary re-renders
export default memo(HomeSection);
