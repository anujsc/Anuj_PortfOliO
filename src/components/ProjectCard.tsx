// PERF: Memoized component to prevent unnecessary re-renders
import { motion } from "framer-motion";
import { Play, ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import type { Project } from "@/data/portfolio";
import ProjectCarousel from "@/components/ProjectCarousel";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect?: (project: Project) => void;
}

function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onSelect) onSelect(project);
    navigate(`/projects/${project.id}`);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={handleClick}
      className="group relative bg-card rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:bg-card-hover hover:shadow-2xl hover:shadow-primary/10 ring-1 ring-white/5 hover:ring-white/10"
      role="button"
      tabIndex={0}
      aria-label={`View project: ${project.title}`}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      {/* Thumbnail / Carousel */}
      <ProjectCarousel
        images={
          project.images && project.images.length > 0
            ? project.images
            : [project.thumbnail]
        }
        alt={project.title}
        aspectClass="aspect-video"
        intervalMs={5000}
        autoPlay={project.images && project.images.length > 1}
        overlay={
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-3 right-3 z-20 w-11 h-11 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-xl glow-green"
            >
              <Play
                className="h-4 w-4 text-primary-foreground ml-0.5"
                fill="currentColor"
              />
            </motion.div>
          </>
        }
      />

      {/* Info */}
      <div className="p-4">
        <h3 className="font-heading font-semibold text-foreground mb-1 truncate">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1 mb-3">
          {project.description}
        </p>

        {/* Tags row */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-muted-foreground text-[11px] font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-muted-foreground text-[11px]">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Quick links */}
        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-3 w-3" />
              Source
            </a>
          )}
          <span className="ml-auto text-[10px] text-muted-foreground/60">
            {project.duration}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

// PERF: Memoize component to prevent unnecessary re-renders
export default memo(ProjectCard);
