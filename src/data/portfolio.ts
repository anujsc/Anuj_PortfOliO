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
  { title: "Web & Apps", icon: "star", count: 6, filter: "home", emoji: "🟣", section: "home" },
  { title: "About Me", icon: "globe", count: 5, filter: "about", emoji: "🌐", section: "about" },
  { title: "Education & Experience", icon: "brain", count: 3, filter: "experience", emoji: "🎓", section: "experience" },
  { title: "Contacts", icon: "database", count: 4, filter: "contact", emoji: "🏢", section: "contact" },
];

export const profile = {
  name: "Anuj chaudhari",
  title: "Full-Stack Developer & AI Enthusiast",
  location: "Pune, Maharashtra",
  avatar: "AC",
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

// Experience & Education Data
export interface Experience {
  company: string;
  role: string;
  period: string;
  current: boolean;
  achievements: string[];
  technologies: string[];
  promoted?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  highlights: string[];
  type: 'degree' | 'certification';
  logo?: string;
  gpa?: string;
  credentialUrl?: string;
}

export const experiences: Experience[] = [
  {
    company: "Tech Innovations Inc",
    role: "Senior Full-Stack Developer",
    period: "2024 - Present",
    current: true,
    achievements: [
      "Led development of AI-powered analytics platform, increasing user engagement by 45%",
      "Architected microservices infrastructure serving 100K+ daily active users",
      "Mentored team of 5 junior developers, improving code quality metrics by 60%",
      "Reduced API response time by 70% through optimization and caching strategies"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"]
  },
  {
    company: "Digital Solutions Co",
    role: "Full-Stack Developer",
    period: "2022 - 2024",
    current: false,
    promoted: true,
    achievements: [
      "Built real-time collaboration features used by 50K+ users",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
      "Developed RESTful APIs handling 1M+ requests daily",
      "Promoted to Senior Developer after 18 months"
    ],
    technologies: ["React", "Python", "MongoDB", "Redis", "GraphQL"]
  },
  {
    company: "StartupXYZ",
    role: "Frontend Developer",
    period: "2021 - 2022",
    current: false,
    achievements: [
      "Created responsive web applications with 98% mobile compatibility",
      "Improved page load speed by 50% through code splitting and lazy loading",
      "Collaborated with designers to implement pixel-perfect UI components"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  }
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2021",
    type: "degree",
    gpa: "3.8/4.0",
    highlights: [
      "Specialized in Artificial Intelligence and Machine Learning",
      "Thesis: 'Deep Learning Approaches for Natural Language Processing'",
      "Dean's List all semesters",
      "President of Computer Science Club"
    ]
  },
  {
    degree: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services",
    year: "2023",
    type: "certification",
    credentialUrl: "https://aws.amazon.com/certification/",
    highlights: [
      "Validated expertise in designing distributed systems on AWS",
      "Scored 920/1000 on certification exam"
    ]
  },
  {
    degree: "Meta Frontend Developer Professional Certificate",
    institution: "Meta (Coursera)",
    year: "2022",
    type: "certification",
    credentialUrl: "https://coursera.org",
    highlights: [
      "Completed 9-course series covering React, JavaScript, and UI/UX",
      "Built capstone project: E-commerce platform with 95% performance score"
    ]
  },
  {
    degree: "Google Cloud Professional Data Engineer",
    institution: "Google Cloud",
    year: "2023",
    type: "certification",
    credentialUrl: "https://cloud.google.com/certification",
    highlights: [
      "Expertise in designing and building data processing systems",
      "Hands-on experience with BigQuery, Dataflow, and Pub/Sub"
    ]
  }
];

// About Me Data
export const aboutMe = {
  story: [
    "I'm a full-stack developer who fell in love with code during a high school robotics competition. What started as curiosity about 'how websites work' turned into a passion for building digital experiences that make people's lives easier.",
    "Over the past 5 years, I've worked with startups and established companies, wearing many hats—from crafting pixel-perfect UIs to architecting scalable backend systems. I believe the best solutions come from understanding both the technical constraints and the human needs behind every project.",
    "When I'm not coding, you'll find me exploring new coffee shops with my camera, contributing to open-source projects, or experimenting with generative AI art. I'm always learning, always building, and always excited about what's next in tech."
  ],
  pullQuote: "Code is poetry written for machines but read by humans.",
  timeline: [
    { year: "2021", event: "Graduated with CS degree, started first dev job" },
    { year: "2022", event: "Built first viral side project (50K users)" },
    { year: "2023", event: "Promoted to Senior Developer, earned AWS certification" },
    { year: "2024", event: "Led team of 5, launched AI-powered platform" }
  ],
  interests: [
    { icon: "📸", name: "Photography", description: "Street & landscape photography" },
    { icon: "🎵", name: "Music Production", description: "Electronic & lo-fi beats" },
    { icon: "🌱", name: "Open Source", description: "Contributing to React ecosystem" },
    { icon: "✈️", name: "Travel", description: "15 countries and counting" }
  ],
  funFacts: [
    { label: "Coffee consumed", value: "2,847 cups", icon: "☕" },
    { label: "GitHub commits", value: "12,453", icon: "💻" },
    { label: "Side projects", value: "23", icon: "🚀" },
    { label: "Stack Overflow rep", value: "8,942", icon: "📚" }
  ],
  influencedBy: [
    { name: "React", type: "Technology", icon: "⚛️" },
    { name: "Vercel", type: "Company", icon: "▲" },
    { name: "Kent C. Dodds", type: "Mentor", icon: "👨‍🏫" },
    { name: "Tailwind CSS", type: "Technology", icon: "🎨" }
  ],
  availability: {
    status: "available",
    message: "Available for freelance projects"
  },
  languages: ["English (Native)", "Hindi (Fluent)", "Spanish (Conversational)"],
  headshot: "AC"
};

// Contact Data
export const contactInfo = {
  headline: "Let's create something together 🎧",
  availability: {
    status: "available",
    message: "Available for work"
  },
  responseTime: "Usually responds in 24h",
  bestTime: "9 AM - 6 PM IST (GMT+5:30)",
  preferredMethod: "Email or LinkedIn",
  email: "hello@example.com",
  socials: {
    github: {
      url: "https://github.com",
      username: "@yourusername",
      contributions: "1,234 contributions last year"
    },
    linkedin: {
      url: "https://linkedin.com",
      username: "Your Name",
      badge: "500+ connections"
    },
    twitter: {
      url: "https://twitter.com",
      username: "@yourusername",
      latestTweet: "Just shipped a new feature! 🚀"
    }
  }
};
