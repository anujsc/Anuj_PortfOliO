import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Clock,
  ChevronDown,
  Layers,
  Wrench,
  Lightbulb,
  Zap,
  Flag,
} from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/portfolio";
import type { ProjectTrack } from "@/data/portfolio";
import ProjectCarousel from "@/components/ProjectCarousel";

const trackIconMap: Record<string, React.FC<{ className?: string }>> = {
  problem: Flag,
  solution: Lightbulb,
  feature: Zap,
  challenge: Wrench,
  future: Layers,
};

function TrackItem({
  track,
  index,
  open,
  onToggle,
}: {
  track: ProjectTrack;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const Icon = trackIconMap[track.type] ?? Layers;

  return (
    <div className="w-full" role="button" aria-expanded={open}>
      {/* Top row: icon + number + title + duration + chevron */}
      <div
        onClick={onToggle}
        className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 transition-colors cursor-pointer select-none"
      >
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-muted shrink-0">
          <Icon className="h-3 w-3 text-muted-foreground" />
        </span>
        <span className="text-xs text-muted-foreground w-4 text-right shrink-0 tabular-nums">
          {index + 1}
        </span>
        <p className="flex-1 text-sm font-medium text-foreground text-left min-w-0 truncate">
          {track.title}
        </p>
        <span className="text-xs text-muted-foreground flex items-center gap-1 shrink-0">
          <Clock className="h-3 w-3" />
          {track.duration}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="shrink-0"
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.span>
      </div>
      {/* Expanded content row */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground leading-relaxed px-4 pb-4 pl-14">
              {track.content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [openTrackIndex, setOpenTrackIndex] = useState<number | null>(null);

  const toggleTrack = (i: number) =>
    setOpenTrackIndex((prev) => (prev === i ? null : i));

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center py-32">
        <p className="text-2xl font-heading font-bold text-foreground mb-2">Project not found</p>
        <Link to="/" className="text-primary hover:underline text-sm">← Back to projects</Link>
      </div>
    );
  }

  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="max-w-3xl mx-auto"
    >
      {/* Back breadcrumb */}
      <div className="flex items-center justify-between mb-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          All Projects
        </Link>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span>{projectIndex + 1}</span>
          <span>/</span>
          <span>{projects.length}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="group relative rounded-xl overflow-hidden mb-6 ring-1 ring-white/10">
        {project.images && project.images.length > 1 ? (
          <ProjectCarousel
            images={project.images}
            alt={project.title}
            aspectClass="aspect-[21/9]"
            intervalMs={5000}
            overlay={
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                  <h1 className="text-3xl font-heading font-bold text-foreground mb-1">
                    {project.title}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {project.role} &middot; {project.duration}
                  </p>
                </div>
              </>
            }
          />
        ) : (
          <>
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full aspect-[21/9] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-3xl font-heading font-bold text-foreground mb-1">
                {project.title}
              </h1>
              <p className="text-sm text-muted-foreground">
                {project.role} &middot; {project.duration}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-3 mb-8">
        {/* Tech badges — full row, wrap naturally */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
        {/* Links row — only shown if present */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                Source
              </a>
            )}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-10 text-base">
        {project.longDescription}
      </p>

      {/* Tracklist */}
      <div className="mb-10">
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
          Tracklist
        </h2>
        <div className="flex flex-col divide-y divide-border rounded-xl bg-card overflow-hidden ring-1 ring-white/5">
          {project.tracks.map((track, i) => (
            <TrackItem
              key={track.title}
              track={track}
              index={i}
              open={openTrackIndex === i}
              onToggle={() => toggleTrack(i)}
            />
          ))}
        </div>
      </div>

      {/* Prev / Next project navigation */}
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
        <button
          onClick={() => navigate(`/projects/${prevProject.id}`)}
          className="flex items-center gap-3 p-4 rounded-xl bg-card hover:bg-card-hover transition-colors text-left group ring-1 ring-white/5"
        >
          <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:-translate-x-0.5 transition-transform shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Previous</p>
            <p className="text-sm font-medium text-foreground truncate">{prevProject.title}</p>
          </div>
        </button>
        <button
          onClick={() => navigate(`/projects/${nextProject.id}`)}
          className="flex items-center gap-3 p-4 rounded-xl bg-card hover:bg-card-hover transition-colors text-right group ring-1 ring-white/5 justify-end"
        >
          <div className="min-w-0">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Next</p>
            <p className="text-sm font-medium text-foreground truncate">{nextProject.title}</p>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform shrink-0" />
        </button>
      </div>
    </motion.div>
  );
}
