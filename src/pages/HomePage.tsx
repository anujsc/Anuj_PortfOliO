// PERF: Memoized callbacks to prevent unnecessary re-renders
import { useOutletContext } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCallback, useMemo } from "react";
import HomeSection from "@/components/sections/HomeSection";
import { useGreeting } from "@/hooks/usePortfolio";
import type { OutletContext } from "./Layout";
import type { Project } from "@/data/portfolio";

export default function HomePage() {
  const { searchQuery } = useOutletContext<OutletContext>();
  const navigate = useNavigate();

  // PERF: Memoize greeting to avoid recalculation
  const greeting = useMemo(() => useGreeting(), []);

  // PERF: Memoize callback to prevent re-renders
  const handleSelectProject = useCallback(
    (project: Project) => {
      navigate(`/projects/${project.id}`);
    },
    [navigate],
  );

  return (
    <AnimatePresence mode="wait">
      <HomeSection
        key="home"
        searchQuery={searchQuery}
        onSelectProject={handleSelectProject}
        greeting={greeting}
      />
    </AnimatePresence>
  );
}
