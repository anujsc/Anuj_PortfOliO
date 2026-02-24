import projectAiChatbot from "@/assets/project-ai-chatbot.jpg";
import projectSpotifyStats from "@/assets/project-spotify-stats.jpg";
import projectLinktree from "@/assets/project-linktree.jpg";

export interface ProjectTrack {
  title: string;
  content: string;
  duration: string;
  type: "problem" | "solution" | "feature" | "challenge" | "future";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  category: "ai" | "web" | "mobile" | "data" | "other";
  technologies: string[];
  role: string;
  duration: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  tracks: ProjectTrack[];
}

export const projects: Project[] = [
  {
    id: "ai-portfolio-chatbot",
    title: "AI Portfolio Assistant",
    description: "RAG-powered chatbot trained on my resume and projects",
    longDescription:
      "An intelligent chatbot that uses Retrieval-Augmented Generation to answer questions about my experience, skills, and projects. Built with LangChain and OpenAI.",
    thumbnail: projectAiChatbot,
    category: "ai",
    technologies: ["React", "Python", "LangChain", "OpenAI", "Pinecone"],
    role: "Full-stack Developer",
    duration: "3 months",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    tracks: [
      { title: "Problem Statement", content: "Static portfolios fail to engage visitors and answer specific questions about a developer's experience.", duration: "2 min", type: "problem" },
      { title: "Solution Architecture", content: "Built a RAG pipeline using LangChain to index resume data and project descriptions into Pinecone vector store.", duration: "5 min", type: "solution" },
      { title: "Key Features", content: "Natural language Q&A, context-aware responses, conversation memory, and seamless UI integration.", duration: "4 min", type: "feature" },
      { title: "Challenges & Learnings", content: "Optimizing embedding quality and managing token limits while maintaining conversational context.", duration: "3 min", type: "challenge" },
      { title: "Future Roadmap", content: "Voice interaction, multi-language support, and integration with calendar for scheduling.", duration: "2 min", type: "future" },
    ],
  },
  {
    id: "spotify-wrapped-generator",
    title: "Spotify Wrapped Generator",
    description: "Generate your own Spotify Wrapped anytime",
    longDescription:
      "A web app that connects to the Spotify API to generate personalized listening statistics and beautiful visualizations anytime, not just in December.",
    thumbnail: projectSpotifyStats,
    category: "web",
    technologies: ["Next.js", "Spotify API", "Tailwind", "Recharts", "NextAuth"],
    role: "Frontend Developer",
    duration: "2 months",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    tracks: [
      { title: "API Integration", content: "Deep integration with Spotify Web API for fetching user listening history, top tracks, and audio features.", duration: "4 min", type: "solution" },
      { title: "Data Visualization", content: "Custom charts and animated graphics showing listening patterns, genre distribution, and mood analysis.", duration: "5 min", type: "feature" },
      { title: "User Authentication", content: "OAuth 2.0 flow with NextAuth.js for secure Spotify account connection.", duration: "3 min", type: "solution" },
    ],
  },
  {
    id: "linktree-for-devs",
    title: "LinkTree for Developers",
    description: "Aesthetic developer portfolio link page",
    longDescription:
      "A beautifully designed link-in-bio page specifically for developers, featuring GitHub stats, project showcases, and social links with smooth animations.",
    thumbnail: projectLinktree,
    category: "web",
    technologies: ["React", "Framer Motion", "Tailwind", "GitHub API"],
    role: "Designer & Developer",
    duration: "1 month",
    githubUrl: "https://github.com",
    featured: true,
    tracks: [
      { title: "Design System", content: "Created a cohesive design language with custom themes, animations, and responsive layouts.", duration: "3 min", type: "solution" },
      { title: "Animation Logic", content: "Orchestrated staggered animations with Framer Motion for engaging page transitions.", duration: "4 min", type: "feature" },
      { title: "Deployment", content: "Automated CI/CD pipeline with GitHub Actions and Vercel for instant deployments.", duration: "2 min", type: "solution" },
    ],
  },
  {
    id: "ml-pipeline-dashboard",
    title: "ML Pipeline Monitor",
    description: "Real-time monitoring dashboard for ML training pipelines",
    longDescription: "A comprehensive dashboard for monitoring machine learning training jobs with real-time metrics, GPU utilization, and model performance tracking.",
    thumbnail: projectAiChatbot,
    category: "data",
    technologies: ["React", "WebSocket", "D3.js", "Python", "FastAPI"],
    role: "Full-stack Developer",
    duration: "4 months",
    featured: false,
    tracks: [
      { title: "Real-time Data", content: "WebSocket integration for live metric streaming from training clusters.", duration: "4 min", type: "feature" },
      { title: "Visualization", content: "Custom D3.js charts for loss curves, accuracy metrics, and resource utilization.", duration: "5 min", type: "feature" },
    ],
  },
  {
    id: "task-flow-app",
    title: "TaskFlow Pro",
    description: "Kanban-style project management with AI prioritization",
    longDescription: "A project management tool that uses AI to automatically prioritize tasks based on deadlines, dependencies, and team workload.",
    thumbnail: projectSpotifyStats,
    category: "web",
    technologies: ["React", "Node.js", "PostgreSQL", "OpenAI", "DnD Kit"],
    role: "Lead Developer",
    duration: "5 months",
    liveUrl: "https://example.com",
    featured: false,
    tracks: [
      { title: "Drag & Drop", content: "Smooth drag and drop interface built with DnD Kit for intuitive task management.", duration: "3 min", type: "feature" },
      { title: "AI Prioritization", content: "GPT-powered task analysis that suggests optimal ordering based on context.", duration: "4 min", type: "solution" },
    ],
  },
  {
    id: "crypto-portfolio-tracker",
    title: "CryptoVault",
    description: "Multi-chain cryptocurrency portfolio tracker",
    longDescription: "Track your crypto holdings across multiple blockchains with real-time price updates and portfolio analytics.",
    thumbnail: projectLinktree,
    category: "web",
    technologies: ["React", "Web3.js", "CoinGecko API", "Chart.js"],
    role: "Frontend Developer",
    duration: "2 months",
    featured: false,
    tracks: [
      { title: "Multi-chain Support", content: "Integration with Ethereum, Polygon, and Solana for comprehensive portfolio tracking.", duration: "5 min", type: "feature" },
    ],
  },
];

export const skills = [
  { name: "React", level: "expert" as const },
  { name: "TypeScript", level: "expert" as const },
  { name: "Python", level: "expert" as const },
  { name: "Node.js", level: "intermediate" as const },
  { name: "Tailwind CSS", level: "expert" as const },
  { name: "Next.js", level: "intermediate" as const },
  { name: "PostgreSQL", level: "intermediate" as const },
  { name: "Docker", level: "intermediate" as const },
  { name: "AWS", level: "beginner" as const },
  { name: "Figma", level: "intermediate" as const },
  { name: "GraphQL", level: "intermediate" as const },
  { name: "LangChain", level: "beginner" as const },
];

export const sidebarItems = [
  { title: "Featured Work", icon: "star", count: 6, filter: "featured", emoji: "🟣" },
  { title: "Web & Apps", icon: "globe", count: 5, filter: "web", emoji: "🌐" },
  { title: "Education", icon: "brain", count: 3, filter: "education", emoji: "🎓" },
  { title: "Experience", icon: "database", count: 4, filter: "experience", emoji: "🏢" },
];

export const profile = {
  name: "Alex Rivera",
  title: "Full-Stack Developer & AI Enthusiast",
  location: "San Francisco, CA",
  avatar: "AR",
  stats: {
    views: 12847,
    stars: 342,
    projects: projects.length,
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};
