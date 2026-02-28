// PERF: Route prefetching utility to preload pages on hover/focus
const prefetchedRoutes = new Set<string>();

export function prefetchRoute(routePath: string) {
  // Avoid prefetching the same route multiple times
  if (prefetchedRoutes.has(routePath)) return;

  // Mark as prefetched
  prefetchedRoutes.add(routePath);

  // PERF: Dynamically import the route component to trigger code-splitting prefetch
  switch (routePath) {
    case "/spotify":
      import("@/pages/SpotifyPage");
      break;
    case "/about":
      import("@/pages/AboutPage");
      break;
    case "/experience":
      import("@/pages/ExperiencePage");
      break;
    case "/contact":
      import("@/pages/ContactPage");
      break;
    default:
      break;
  }
}
