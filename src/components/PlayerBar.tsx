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
  Music,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/portfolio";

interface PlayerBarProps {
  currentProject: Project | null;
  scrollProgress: number;
  onNext: () => void;
  onPrevious: () => void;
  activeSection?: string;
  isProjectView?: boolean;
}

const sectionMeta: Record<
  string,
  { label: string; Icon: React.FC<{ className?: string }> }
> = {
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
  const [isSpotifyOpen, setIsSpotifyOpen] = useState(false);

  const playlistId =
    import.meta.env.VITE_SPOTIFY_PLAYLIST_ID || "6JhDS8XkTNYMjWVoyNMInS";
  const embedUrl = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;

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
              <p className="text-sm font-medium text-foreground leading-tight">
                {meta.label}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Navigate sections
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ── MOBILE: skip-back + Spotify + skip-forward ── */}
      <div className="flex lg:hidden items-center gap-5 shrink-0">
        <button
          onClick={onPrevious}
          className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 active:scale-95"
          aria-label={isProjectView ? "Previous project" : "Previous section"}
        >
          <SkipBack className="h-5 w-5" fill="currentColor" />
        </button>
        <button
          onClick={() => setIsSpotifyOpen(true)}
          className="w-10 h-10 rounded-full bg-primary text-primary-foreground hover:scale-110 active:scale-95 transition-all flex items-center justify-center glow-green-sm"
          aria-label="Open Spotify Player"
        >
          <Music className="h-5 w-5" />
        </button>
        <button
          onClick={onNext}
          className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 active:scale-95"
          aria-label={isProjectView ? "Next project" : "Next section"}
        >
          <SkipForward className="h-5 w-5" fill="currentColor" />
        </button>
      </div>

      {/* ── DESKTOP: skip-back + Spotify + skip-forward ── */}
      <div className="hidden lg:flex items-center gap-5">
        <button
          onClick={onPrevious}
          className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 active:scale-95"
          aria-label={isProjectView ? "Previous project" : "Previous section"}
        >
          <SkipBack className="h-5 w-5" fill="currentColor" />
        </button>
        <button
          onClick={() => setIsSpotifyOpen(true)}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:scale-110 active:scale-95 transition-all flex items-center justify-center glow-green"
          aria-label="Open Spotify Player"
        >
          <Music className="h-6 w-6" />
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

      {/* Spotify Modal - All Screens */}
      <AnimatePresence mode="wait">
        {isSpotifyOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsSpotifyOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 400,
                mass: 0.8,
              }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-lg z-[101] bg-card rounded-2xl shadow-2xl overflow-hidden border border-white/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-card/95 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <Music className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Coding Vibes
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      My focus playlist
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsSpotifyOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <span className="text-muted-foreground text-2xl leading-none">
                    ×
                  </span>
                </button>
              </div>

              {/* Spotify Embed */}
              <div className="p-4 bg-card">
                <iframe
                  style={{ borderRadius: "12px", border: "none" }}
                  src={embedUrl}
                  width="100%"
                  height="380"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Playlist"
                  className="w-full"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
}
