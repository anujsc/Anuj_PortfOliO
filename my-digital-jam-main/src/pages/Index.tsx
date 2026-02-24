import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink, Github, Clock, X } from "lucide-react";
import TopNav from "@/components/TopNav";
import LibrarySidebar from "@/components/LibrarySidebar";
import RightPanel from "@/components/RightPanel";
import ProjectCard from "@/components/ProjectCard";
import PlayerBar from "@/components/PlayerBar";
import { useScrollProgress, useGreeting } from "@/hooks/usePortfolio";
import { projects, skills, sidebarItems, profile } from "@/data/portfolio";
import type { Project, ProjectTrack } from "@/data/portfolio";

function TrackItem({ track, index }: { track: ProjectTrack; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left group"
      aria-expanded={open}
    >
      <div className="flex items-center gap-4 px-4 py-3 rounded-md hover:bg-card-hover transition-colors">
        <span className="text-sm text-muted-foreground w-5 text-right">{index + 1}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground">{track.title}</p>
          {open && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="text-sm text-muted-foreground mt-2 leading-relaxed"
            >
              {track.content}
            </motion.p>
          )}
        </div>
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {track.duration}
        </span>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </div>
    </button>
  );
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.35 }}
      className="max-w-3xl mx-auto"
    >
      {/* Hero */}
      <div className="relative rounded-xl overflow-hidden mb-6">
        <img src={project.thumbnail} alt={project.title} className="w-full aspect-[21/9] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-card/80 flex items-center justify-center text-foreground hover:bg-card transition-colors"
          aria-label="Close project detail"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="absolute bottom-6 left-6">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-1">{project.title}</h1>
          <p className="text-sm text-muted-foreground">{project.role} • {project.duration}</p>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {project.technologies.map((t) => (
          <span key={t} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">{t}</span>
        ))}
        <div className="flex-1" />
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-primary hover:underline">
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <Github className="h-4 w-4" /> Source
          </a>
        )}
      </div>

      <p className="text-muted-foreground leading-relaxed mb-8">{project.longDescription}</p>

      {/* Tracks */}
      <div>
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Tracklist</h2>
        <div className="flex flex-col divide-y divide-border rounded-lg bg-card overflow-hidden">
          {project.tracks.map((track, i) => (
            <TrackItem key={track.title} track={track} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Index() {
  const greeting = useGreeting();
  const scrollProgress = useScrollProgress();
  const [activeFilter, setActiveFilter] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPlayerProject, setCurrentPlayerProject] = useState<Project | null>(projects[0]);

  const filteredProjects = useMemo(() => {
    let filtered = projects;
    if (activeFilter === "featured") filtered = projects.filter((p) => p.featured);
    else if (activeFilter !== "all") filtered = projects.filter((p) => p.category === activeFilter);

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q))
      );
    }
    return filtered;
  }, [activeFilter, searchQuery]);

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project);
    setCurrentPlayerProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // When sidebar filter changes, clear selected project so grid shows
  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
    setSelectedProject(null);
  }, []);

  const navigateProject = useCallback(
    (direction: 1 | -1) => {
      const idx = projects.findIndex((p) => p.id === currentPlayerProject?.id);
      const next = projects[(idx + direction + projects.length) % projects.length];
      setCurrentPlayerProject(next);
      if (selectedProject) setSelectedProject(next);
    },
    [currentPlayerProject, selectedProject]
  );

  const categoryCards = [
    { label: "AI & ML", filter: "ai", color: "from-primary/30 to-primary/5" },
    { label: "Web Apps", filter: "web", color: "from-accent/30 to-accent/5" },
    { label: "Data", filter: "data", color: "from-blue-500/30 to-blue-500/5" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopNav searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="flex flex-1">
        <LibrarySidebar activeFilter={activeFilter} onFilterChange={handleFilterChange} items={sidebarItems} />

        {/* Main Content */}
        <main className="flex-1 min-w-0 pb-24 overflow-x-hidden">
          <div className="p-6 lg:p-8">
            <AnimatePresence mode="wait">
              {selectedProject ? (
                <ProjectDetail
                  key={selectedProject.id}
                  project={selectedProject}
                  onClose={() => setSelectedProject(null)}
                />
              ) : (
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Greeting */}
                  <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">
                    {greeting}
                  </h1>

                  {/* Project Grid */}
                  <section aria-label="Projects">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {filteredProjects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} onSelect={handleSelectProject} />
                      ))}
                    </div>
                    {filteredProjects.length === 0 && (
                      <p className="text-center text-muted-foreground py-20">No projects match your search.</p>
                    )}
                  </section>

                  {/* Made For You */}
                  <section className="mt-12" aria-label="Categories">
                    <h2 className="text-xl font-heading font-bold text-foreground mb-4">Made For You</h2>
                    <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2">
                      {categoryCards.map((cat) => (
                        <button
                          key={cat.filter}
                          onClick={() => { setActiveFilter(cat.filter); setSelectedProject(null); }}
                          className={`shrink-0 w-44 h-28 rounded-lg bg-gradient-to-br ${cat.color} flex items-end p-4 font-heading font-semibold text-foreground hover:scale-[1.02] transition-transform`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </section>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        <RightPanel profile={profile} skills={skills} />
      </div>

      <PlayerBar
        currentProject={currentPlayerProject}
        scrollProgress={scrollProgress}
        onNext={() => navigateProject(1)}
        onPrevious={() => navigateProject(-1)}
      />
    </div>
  );
}
