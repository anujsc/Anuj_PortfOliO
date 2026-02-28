// PERF: Optimized for instant page load - content shows immediately, only iframe has skeleton
import { useState } from "react";
import { motion } from "framer-motion";
import { Music, ExternalLink } from "lucide-react";

export default function SpotifyPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const playlistId =
    import.meta.env.VITE_SPOTIFY_PLAYLIST_ID || "6JhDS8XkTNYMjWVoyNMInS";
  const embedUrl = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;
  const spotifyUrl = `https://open.spotify.com/playlist/${playlistId}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      {/* PERF: Content shows immediately - no waiting for iframe */}
      <div>
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
              <Music className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                Coding Vibes
              </h1>
              <p className="text-muted-foreground mt-1">
                My focus playlist for deep work sessions
              </p>
            </div>
          </div>
        </div>

        {/* Spotify Player Card */}
        <div className="bg-card rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          {/* Player */}
          <div className="p-6 relative">
            {/* PERF: Skeleton only for iframe, not entire page */}
            {!iframeLoaded && (
              <div className="absolute inset-6 rounded-xl bg-gradient-to-r from-muted via-card-hover to-muted bg-[length:200%_100%] animate-pulse" />
            )}

            {/* PERF: Iframe loads in background while skeleton shows */}
            <iframe
              style={{ borderRadius: "12px", border: "none" }}
              src={embedUrl}
              width="100%"
              height="450"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="eager"
              title="Spotify Playlist"
              className={`w-full transition-opacity duration-300 ${
                iframeLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIframeLoaded(true)}
            />
          </div>

          {/* Footer */}
          <div className="px-6 pb-6">
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all glow-green-sm"
            >
              <ExternalLink className="h-4 w-4" />
              Open in Spotify
            </a>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-card rounded-xl p-4 border border-white/5">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              🎵 Playlist Info
            </h3>
            <p className="text-xs text-muted-foreground">
              Curated tracks for maximum productivity and focus during coding
              sessions
            </p>
          </div>
          <div className="bg-card rounded-xl p-4 border border-white/5">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              🎧 Best For
            </h3>
            <p className="text-xs text-muted-foreground">
              Deep work, debugging, learning new technologies, and late-night
              coding
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
          <h3 className="text-lg font-heading font-bold text-foreground mb-3">
            Why Music Matters
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The right music can transform your coding experience. This playlist
            is carefully curated to help you enter flow state, maintain focus,
            and boost productivity. Whether you're tackling complex algorithms
            or building beautiful UIs, these tracks will keep you in the zone.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
