import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import TopNav from "@/components/TopNav";
import LibrarySidebar from "@/components/LibrarySidebar";
import RightPanel from "@/components/RightPanel";
import MobileNav from "@/components/MobileNav";
import PlayerBar from "@/components/PlayerBar";
import { useScrollProgress } from "@/hooks/usePortfolio";
import { projects, skills, sidebarItems, profile } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

const pathToSection: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/experience": "experience",
  "/contact": "contact",
};

const sectionToPath: Record<string, string> = {
  home: "/",
  about: "/about",
  experience: "/experience",
  contact: "/contact",
};

const sectionOrder = ["/", "/about", "/experience", "/contact"];

export interface OutletContext {
  searchQuery: string;
}

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollProgress = useScrollProgress();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPlayerProject, setCurrentPlayerProject] = useState<Project | null>(projects[0]);

  const isProjectPage = location.pathname.startsWith("/projects/");
  const projectId = isProjectPage ? location.pathname.replace("/projects/", "") : null;
  const currentRouteProject = projectId ? projects.find((p) => p.id === projectId) ?? null : null;

  const activeSection = isProjectPage
    ? "home"
    : pathToSection[location.pathname] ?? "home";

  // Sync player project with route
  useEffect(() => {
    if (currentRouteProject) setCurrentPlayerProject(currentRouteProject);
  }, [currentRouteProject]);

  const handleNext = useCallback(() => {
    if (isProjectPage && currentRouteProject) {
      const idx = projects.findIndex((p) => p.id === currentRouteProject.id);
      const next = projects[(idx + 1) % projects.length];
      navigate(`/projects/${next.id}`);
    } else {
      const idx = sectionOrder.indexOf(location.pathname);
      const next = sectionOrder[(idx + 1) % sectionOrder.length];
      navigate(next);
    }
  }, [isProjectPage, currentRouteProject, location.pathname, navigate]);

  const handlePrevious = useCallback(() => {
    if (isProjectPage && currentRouteProject) {
      const idx = projects.findIndex((p) => p.id === currentRouteProject.id);
      const prev = projects[(idx - 1 + projects.length) % projects.length];
      navigate(`/projects/${prev.id}`);
    } else {
      const idx = sectionOrder.indexOf(location.pathname);
      const prev = sectionOrder[(idx - 1 + sectionOrder.length) % sectionOrder.length];
      navigate(prev);
    }
  }, [isProjectPage, currentRouteProject, location.pathname, navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopNav searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="flex flex-1">
        <LibrarySidebar
          activeSection={activeSection}
          isProjectPage={isProjectPage}
          items={sidebarItems}
          sectionToPath={sectionToPath}
        />

        <main className="flex-1 min-w-0 pb-[136px] lg:pb-24 overflow-x-hidden">
          <div className="p-4 sm:p-6 lg:p-8">
            <Outlet context={{ searchQuery } satisfies OutletContext} />
          </div>
        </main>

        <RightPanel profile={profile} skills={skills} activeSection={activeSection} />
      </div>

      <MobileNav activeSection={activeSection} sectionToPath={sectionToPath} />

      <PlayerBar
        currentProject={isProjectPage ? currentRouteProject : currentPlayerProject}
        scrollProgress={scrollProgress}
        onNext={handleNext}
        onPrevious={handlePrevious}
        activeSection={activeSection}
        isProjectView={isProjectPage}
      />
    </div>
  );
}
