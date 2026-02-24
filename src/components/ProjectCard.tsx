import { motion } from "framer-motion";
import { Play, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={() => onSelect(project)}
      className="group relative bg-card rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:bg-card-hover hover:shadow-xl hover:shadow-primary/5"
      role="button"
      tabIndex={0}
      aria-label={`View project: ${project.title}`}
      onKeyDown={(e) => e.key === "Enter" && onSelect(project)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Play button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg glow-green"
        >
          <Play className="h-4 w-4 text-primary-foreground ml-0.5" fill="currentColor" />
        </motion.div>

        {project.featured && (
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-accent text-accent-foreground">
            Featured
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-heading font-semibold text-foreground mb-1 truncate">{project.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-1 mb-3">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[11px] font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[11px]">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
