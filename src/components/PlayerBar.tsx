import {
  SkipBack,
  SkipForward,
  CirclePlay,
  ExternalLink,
  Github as GithubIcon,
  LayoutGrid,
  UserRound,
  GraduationCap,
  AtSign,
} from "lucide-react";
import type { Project } from "@/data/portfolio";
import playButtonImg from "@/assets/play-button.png";

interface PlayerBarProps {
  currentProject: Project | null;
  scrollProgress: number;
  onNext: () => void;
  onPrevious: () => void;
  activeSection?: string;
  isProjectView?: boolean;
}

const sectionMeta: Record<string, { label: string; Icon: React.FC<{ className?: string }> }> = {
  home: { label: "Web & Apps", Icon: LayoutGrid },
  about: { label: "About Me", Icon: UserRound },
  experience: { label: "Education & Experience", Icon: GraduationCap },
  contact: { label: "Contacts", Icon: AtSign },
};

export default function PlayerBar({
  currentProject,
  scrollProgress,
  onNext,
  onPrevious,
  activeSection = "home",
  isProjectView = false,
}: PlayerBarProps) {
  const meta = sectionMeta[activeSection] ?? sectionMeta.home;

  return (
    <footer className="fixed bottom-16 lg:bottom-0 left-0 right-0 h-[72px] bg-card/95 backdrop-blur-xl border-t border-border z-40 flex items-center px-4 gap-4">
      {/* Scroll progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5">
        <div
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={scrollProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {/* Left: Now playing info */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {isProjectView && currentProject ? (
          <>
            <img
              src={currentProject.thumbnail}
              alt={currentProject.title}
              className="w-12 h-12 rounded-md object-cover shrink-0 ring-1 ring-white/10"
            />
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate leading-tight">
                {currentProject.title}
              </p>
              <p className="text-xs text-muted-foreground truncate mt-0.5">
                {currentProject.category} &middot; {currentProject.role}
              </p>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <meta.Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground leading-tight">{meta.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Navigate sections</p>
            </div>
          </div>
        )}
      </div>

      {/* ── MOBILE: skip-back + play + skip-forward ── */}
      <div className="flex lg:hidden items-center gap-5 shrink-0">
        <button
          onClick={onPrevious}
          className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 active:scale-95"
          aria-label={isProjectView ? "Previous project" : "Previous section"}
        >
          <SkipBack className="h-5 w-5" fill="currentColor" />
        </button>
        <button
          className="text-primary hover:scale-110 active:scale-95 transition-all"
          aria-label="Play"
        >
          <img className="h-[25px] w-[25px]" src={playButtonImg} alt="Play" />
        </button>
        <button
          onClick={onNext}
          className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 active:scale-95"
          aria-label={isProjectView ? "Next project" : "Next section"}
        >
          <SkipForward className="h-5 w-5" fill="currentColor" />
        </button>
      </div>

      {/* ── DESKTOP: Original skip + play controls ── */}
      <div className="hidden lg:flex items-center gap-5">
        <button
          onClick={onPrevious}
          className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 active:scale-95"
          aria-label={isProjectView ? "Previous project" : "Previous section"}
        >
          <SkipBack className="h-5 w-5" fill="currentColor" />
        </button>
        <button
          className="text-primary hover:scale-110 active:scale-95 transition-all"
          aria-label="Play"
        >
          <img className="h-[35px] w-[35px]" src={playButtonImg} alt="Play" />
        </button>
        <button
          onClick={onNext}
          className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 active:scale-95"
          aria-label={isProjectView ? "Next project" : "Next section"}
        >
          <SkipForward className="h-5 w-5" fill="currentColor" />
        </button>
      </div>

      {/* Right: Project links — desktop only */}
      <div className="hidden lg:flex flex-1 items-center justify-end gap-4">
        {isProjectView && currentProject?.liveUrl && (
          <a
            href={currentProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Demo
          </a>
        )}
        {isProjectView && currentProject?.githubUrl && (
          <a
            href={currentProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            Source
          </a>
        )}
      </div>
    </footer>
  );
}

