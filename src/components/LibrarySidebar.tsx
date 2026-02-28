// PERF: Added route prefetching on hover for instant navigation
import { Link } from "react-router-dom";
import {
  LibraryBig,
  LayoutGrid,
  UserRound,
  GraduationCap,
  AtSign,
} from "lucide-react";
import { prefetchRoute } from "@/utils/routePrefetch";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  star: LayoutGrid,
  globe: UserRound,
  brain: GraduationCap,
  database: AtSign,
};

interface SidebarItemProps {
  title: string;
  iconKey: string;
  count: number;
  active: boolean;
  href: string;
}

function SidebarItem({
  title,
  iconKey,
  count,
  active,
  href,
}: SidebarItemProps) {
  const Icon = iconMap[iconKey] ?? LayoutGrid;
  return (
    <Link
      to={href}
      // PERF: Prefetch route on hover/focus for instant navigation
      onMouseEnter={() => prefetchRoute(href)}
      onFocus={() => prefetchRoute(href)}
      className={`group flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm transition-all duration-200 ${
        active
          ? "bg-white/10 text-foreground"
          : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
      }`}
      aria-label={`View ${title}`}
    >
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-md shrink-0 transition-colors ${
          active
            ? "bg-primary/20 text-primary"
            : "bg-muted text-muted-foreground group-hover:text-foreground"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex-1 text-left min-w-0">
        <p
          className={`font-medium truncate ${active ? "text-foreground" : ""}`}
        >
          {title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          Playlist &middot; {count}
        </p>
      </div>
      {active && (
        <div className="flex items-end gap-[2px] ml-1 shrink-0">
          <div className="w-[3px] h-3 bg-primary rounded-full animate-eq-1" />
          <div className="w-[3px] h-4 bg-primary rounded-full animate-eq-2" />
          <div className="w-[3px] h-2 bg-primary rounded-full animate-eq-3" />
        </div>
      )}
    </Link>
  );
}

interface LibrarySidebarProps {
  activeSection: string;
  isProjectPage?: boolean;
  items: {
    title: string;
    icon: string;
    count: number;
    filter: string;
    section: string;
  }[];
  sectionToPath: Record<string, string>;
}

export default function LibrarySidebar({
  activeSection,
  isProjectPage,
  items,
  sectionToPath,
}: LibrarySidebarProps) {
  return (
    <aside className="hidden lg:flex flex-col w-[240px] shrink-0 bg-background border-r border-border h-[calc(100vh-136px)] sticky top-16 overflow-y-auto">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <LibraryBig className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            Your Library
          </h2>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {["Playlists", "Skills", "Certs"].map((chip) => (
            <span
              key={chip}
              className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-muted-foreground hover:bg-white/10 hover:text-foreground cursor-pointer transition-colors border border-white/5"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Items */}
        <nav
          className="flex flex-col gap-1"
          role="navigation"
          aria-label="Portfolio sections"
        >
          {items.map((item) => {
            const active = !isProjectPage && activeSection === item.section;
            return (
              <SidebarItem
                key={item.filter}
                title={item.title}
                iconKey={item.icon}
                count={item.count}
                active={active}
                href={sectionToPath[item.section] ?? "/"}
              />
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
