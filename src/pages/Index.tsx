import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink, Github as GithubIcon, Clock, X } from "lucide-react";
import TopNav from "@/components/TopNav";
import LibrarySidebar from "@/components/LibrarySidebar";
import RightPanel from "@/components/RightPanel";
import MobileNav from "@/components/MobileNav";
import PlayerBar from "@/components/PlayerBar";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
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
            <GithubIcon className="h-4 w-4" /> Source
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
  const [activeSection, setActiveSection] = useState<string>("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPlayerProject, setCurrentPlayerProject] = useState<Project | null>(projects[0]);

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project);
    setCurrentPlayerProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSidebarClick = useCallback((item: typeof sidebarItems[0]) => {
    setActiveSection(item.section);
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Navigate between sections with player bar buttons
  const navigateSection = useCallback(
    (direction: 1 | -1) => {
      const sections = ["home", "about", "experience", "contact"];
      const currentIndex = sections.indexOf(activeSection);
      const nextIndex = (currentIndex + direction + sections.length) % sections.length;
      setActiveSection(sections[nextIndex]);
      setSelectedProject(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [activeSection]
  );

  // Navigate between projects (when in project detail view)
  const navigateProject = useCallback(
    (direction: 1 | -1) => {
      if (selectedProject) {
        // Navigate between projects
        const idx = projects.findIndex((p) => p.id === selectedProject.id);
        const next = projects[(idx + direction + projects.length) % projects.length];
        setSelectedProject(next);
        setCurrentPlayerProject(next);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Navigate between sections
        navigateSection(direction);
      }
    },
    [selectedProject, navigateSection]
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopNav searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="flex flex-1">
        <LibrarySidebar 
          activeFilter={activeSection} 
          onFilterChange={(filter) => {
            const item = sidebarItems.find(i => i.filter === filter);
            if (item) handleSidebarClick(item);
          }} 
          items={sidebarItems} 
        />

        {/* Main Content */}
        <main className="flex-1 min-w-0 pb-24 lg:pb-24 overflow-x-hidden">
          <div className="p-4 sm:p-6 lg:p-8">
            <AnimatePresence mode="wait">
              {selectedProject ? (
                <ProjectDetail
                  key={selectedProject.id}
                  project={selectedProject}
                  onClose={() => setSelectedProject(null)}
                />
              ) : (
                <div key={activeSection}>
                  {activeSection === "home" && (
                    <HomeSection
                      searchQuery={searchQuery}
                      onSelectProject={handleSelectProject}
                      greeting={greeting}
                    />
                  )}
                  {activeSection === "about" && <AboutSection />}
                  {activeSection === "experience" && <ExperienceSection />}
                  {activeSection === "contact" && <ContactSection />}
                </div>
              )}
            </AnimatePresence>
          </div>
        </main>

        <RightPanel profile={profile} skills={skills} activeSection={activeSection} />
      </div>

      <MobileNav activeSection={activeSection} onSectionChange={setActiveSection} />

      <PlayerBar
        currentProject={currentPlayerProject}
        scrollProgress={scrollProgress}
        onNext={() => navigateProject(1)}
        onPrevious={() => navigateProject(-1)}
        activeSection={activeSection}
        isProjectView={!!selectedProject}
      />
    </div>
  );
}
