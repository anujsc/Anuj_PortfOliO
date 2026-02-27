import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

interface HomeSectionProps {
  searchQuery: string;
  onSelectProject: (project: Project) => void;
  greeting: string;
}

export default function HomeSection({ searchQuery, onSelectProject, greeting }: HomeSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

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
          p.technologies.some((t) => t.toLowerCase().includes(q))
      );
    }
    
    return filtered;
  }, [activeFilter, searchQuery]);

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "AI", value: "ai" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
    { label: "Data", value: "data" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Greeting */}
      <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
        {greeting}
      </h1>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setActiveFilter(option.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === option.value
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
                <div className="text-2xl mb-1">🤖</div>
                AI Projects
              </div>
            </button>
            <button
              onClick={() => setActiveFilter("web")}
              className="h-32 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-500/5 flex items-end p-4 font-heading font-semibold text-foreground hover:scale-[1.02] transition-transform text-left"
            >
              <div>
                <div className="text-2xl mb-1">🌐</div>
                Web Apps
              </div>
            </button>
            <button
              onClick={() => setActiveFilter("data")}
              className="h-32 rounded-xl bg-gradient-to-br from-accent/30 to-accent/5 flex items-end p-4 font-heading font-semibold text-foreground hover:scale-[1.02] transition-transform text-left"
            >
              <div>
                <div className="text-2xl mb-1">📊</div>
                Data & Analytics
              </div>
            </button>
          </div>
        </section>
      )}
    </motion.div>
  );
}
