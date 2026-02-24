import { Library, Plus, Maximize2 } from "lucide-react";

interface SidebarItemProps {
  title: string;
  emoji: string;
  count: number;
  active: boolean;
  onClick: () => void;
}

function SidebarItem({ title, emoji, count, active, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-start gap-3 rounded-md px-3 py-3 text-sm transition-all duration-200 ${
        active
          ? "bg-card-hover text-foreground"
          : "text-muted-foreground hover:bg-card hover:text-foreground"
      }`}
      aria-label={`View ${title}`}
    >
      <span className="text-base leading-none mt-0.5">{emoji}</span>
      <div className="flex-1 text-left min-w-0">
        <p className="font-medium text-foreground truncate">{title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">Playlist · {count}</p>
      </div>
      {active && (
        <div className="flex items-end gap-[2px] ml-1 mt-1">
          <div className="w-[3px] bg-primary rounded-full animate-eq-1" />
          <div className="w-[3px] bg-primary rounded-full animate-eq-2" />
          <div className="w-[3px] bg-primary rounded-full animate-eq-3" />
        </div>
      )}
    </button>
  );
}

interface LibrarySidebarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  items: { title: string; icon: string; count: number; filter: string; emoji: string }[];
}

export default function LibrarySidebar({ activeFilter, onFilterChange, items }: LibrarySidebarProps) {
  return (
    <aside className="hidden lg:flex flex-col w-[240px] shrink-0 bg-background border-r border-border h-[calc(100vh-136px)] sticky top-16 overflow-y-auto">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Library className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Your Library</h2>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card transition-colors" aria-label="Add new">
              <Plus className="h-4 w-4" />
            </button>
            <button className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card transition-colors" aria-label="Expand">
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["Playlists", "Skills", "Certs"].map((chip) => (
            <span
              key={chip}
              className="px-3 py-1 rounded-full bg-card text-xs font-medium text-muted-foreground hover:bg-card-hover hover:text-foreground cursor-pointer transition-colors"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Items */}
        <nav className="flex flex-col gap-1" role="navigation" aria-label="Project categories">
          {items.map((item) => (
            <SidebarItem
              key={item.filter}
              title={item.title}
              emoji={item.emoji}
              count={item.count}
              active={activeFilter === item.filter}
              onClick={() => onFilterChange(item.filter)}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}
