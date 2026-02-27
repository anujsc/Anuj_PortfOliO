import { useState } from "react";
import { Music, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SpotifyWidgetProps {
  playlistId?: string;
}

export default function SpotifyWidget({
  playlistId = import.meta.env.VITE_SPOTIFY_PLAYLIST_ID ||
    "6JhDS8XkTNYMjWVoyNMInS",
}: SpotifyWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const embedUrl = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;

  return (
    <>
      {/* Floating Button - Mobile/Tablet Only */}
      <button
        onClick={() => setIsOpen(true)}
        className="xl:hidden fixed bottom-24 right-4 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform flex items-center justify-center glow-green"
        aria-label="Open Spotify Player"
      >
        <Music className="h-6 w-6" />
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="xl:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="xl:hidden fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90%] md:max-w-md z-50 bg-card rounded-2xl shadow-2xl overflow-hidden border border-white/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
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
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>

              {/* Spotify Embed */}
              <div className="p-4">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src={embedUrl}
                  width="100%"
                  height="380"
                  frameBorder="0"
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
    </>
  );
}
