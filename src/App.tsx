// PERF: Code-split routes using React.lazy for better initial load performance
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingSkeleton from "@/components/LoadingSkeleton";

// PERF: Lazy load route components
const Layout = lazy(() => import("./pages/Layout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const SpotifyPage = lazy(() => import("./pages/SpotifyPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* PERF: Suspense boundary with skeleton fallback */}
        <Suspense
          fallback={
            <div className="min-h-screen bg-background p-8">
              <LoadingSkeleton variant="card" count={3} />
            </div>
          }
        >
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/spotify" element={<SpotifyPage />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
