import { SkipBack, SkipForward, Play, Pause, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

interface PlayerBarProps {
  currentProject: Project | null;
  scrollProgress: number;
  onNext: () => void;
  onPrevious: () => void;
}

export default function PlayerBar({ currentProject, scrollProgress, onNext, onPrevious }: PlayerBarProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[72px] bg-card/95 backdrop-blur-xl border-t border-border z-50 flex items-center px-4 gap-4">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-muted">
        <div
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={scrollProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {/* Left: Current project */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {currentProject ? (
          <>
            <img
              src={currentProject.thumbnail}
              alt={currentProject.title}
              className="w-12 h-12 rounded object-cover shrink-0"
            />
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{currentProject.title}</p>
              <p className="text-xs text-muted-foreground truncate">{currentProject.category} • {currentProject.role}</p>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded bg-muted" />
            <div>
              <p className="text-sm text-muted-foreground">Select a project</p>
            </div>
          </div>
        )}
      </div>

      {/* Center: Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={onPrevious}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Previous project"
        >
          <SkipBack className="h-4 w-4" fill="currentColor" />
        </button>
        <button className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background hover:scale-105 transition-transform" aria-label="Play">
          <Play className="h-3.5 w-3.5 ml-0.5" fill="currentColor" />
        </button>
        <button
          onClick={onNext}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Next project"
        >
          <SkipForward className="h-4 w-4" fill="currentColor" />
        </button>
      </div>

      {/* Right: Links */}
      <div className="flex-1 flex items-center justify-end gap-3">
        {currentProject?.liveUrl && (
          <a
            href={currentProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Demo
          </a>
        )}
        {currentProject?.githubUrl && (
          <a
            href={currentProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            Source
          </a>
        )}
      </div>
    </footer>
  );
}
