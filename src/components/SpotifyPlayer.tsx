import { useState } from "react";
import { Music, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SpotifyPlayerProps {
  playlistId?: string;
  title?: string;
  description?: string;
}

export default function SpotifyPlayer({
  playlistId = import.meta.env.VITE_SPOTIFY_PLAYLIST_ID ||
    "6JhDS8XkTNYMjWVoyNMInS",
  title = "My Playlist",
  description = "Coding vibes & focus music",
}: SpotifyPlayerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const embedUrl = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;

  return (
    <div className="bg-card rounded-xl overflow-hidden border border-white/5">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
            <Music className="h-5 w-5 text-primary" />
          </div>
          <div className="text-left">
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </button>

      {/* Spotify Embed */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0">
              <iframe
                style={{ borderRadius: "8px", border: "none" }}
                src={embedUrl}
                width="100%"
                height="352"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist"
                className="w-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
