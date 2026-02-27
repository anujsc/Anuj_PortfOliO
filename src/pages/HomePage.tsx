import { useOutletContext } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import HomeSection from "@/components/sections/HomeSection";
import { useGreeting } from "@/hooks/usePortfolio";
import type { OutletContext } from "./Layout";
import type { Project } from "@/data/portfolio";

export default function HomePage() {
  const { searchQuery } = useOutletContext<OutletContext>();
  const greeting = useGreeting();
  const navigate = useNavigate();

  const handleSelectProject = useCallback(
    (project: Project) => {
      navigate(`/projects/${project.id}`);
    },
    [navigate]
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
