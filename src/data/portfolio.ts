import projectAiChatbot from "@/assets/project-ai-chatbot.jpg";
import projectSpotifyStats from "@/assets/project-spotify-stats.jpg";
import projectLinktree from "@/assets/project-linktree.jpg";
import ImgenhancerImg from "@/assets/ImgEnhancer.png";
import ImgenhancerImg2 from "@/assets/Screenshot_2.png";
import Reelmind1 from "@/assets/Reelmind-1.jfif";
import Reelmind2 from "@/assets/Reelmind-2.jfif";
import Reelmind3 from "@/assets/Reelmind-3.jfif";
import Reelmind4 from "@/assets/Reelmind-4.jfif";
import AiChatbot1 from "@/assets/AiChatbot-1.jfif";
import AiChatbot2 from "@/assets/AiChatbot-2.jfif";
import AiChatbot3 from "@/assets/AiChatbot-3.jfif";
import AiChatbot4 from "@/assets/AiChatbot-4.jfif";
import Shortly1 from "@/assets/shortly-1.jfif";
import Shortly2 from "@/assets/shortly-2.jfif";
import tv1 from "@/assets/TV1.png";
import tv2 from "@/assets/tv2.png";
import tv3 from "@/assets/tv3.png";
import tv4 from "@/assets/tv4.png";
import tv5 from "@/assets/tv5.png";
import tv6 from "@/assets/tv6.png";
import portfolio1 from "@/assets/pORTFOLIO1.png";

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
  images?: string[]; // optional carousel images (falls back to thumbnail)
  category: "ai" | "web" | "mobile" | "data" | "frontend" | "other";
  technologies: string[];
  role: string;
  duration: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  tracks: ProjectTrack[];
}

export const projects: Project[] = [
  // AI Projects
  {
    id: "ai-portfolio-chatbot",
    title: "AI Portfolio Query Assistant",
    description: "AI-powered portfolio chatbot with natural language queries",
    longDescription:
      "Designed and launched an AI-powered portfolio chatbot using React, TypeScript, TailwindCSS, and Groq Cloud, enabling users to query skills, experience, and projects through dynamic natural-language responses.",
    thumbnail: projectAiChatbot,
    images: [AiChatbot1, AiChatbot2, AiChatbot3, AiChatbot4],
    category: "ai",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Groq Cloud"],
    role: "Full-stack Developer",
    duration: "2 months",
    liveUrl: "https://anujassist.netlify.app/",
    githubUrl: "https://github.com/anujsc/Anuj_ChatBot",
    featured: true,
    tracks: [
      {
        title: "Problem Statement",
        content:
          "Traditional portfolios lack interactivity and don't allow visitors to ask specific questions about a developer's experience.",
        duration: "2 min",
        type: "problem",
      },
      {
        title: "Solution Architecture",
        content:
          "Built an AI chatbot using Groq Cloud (OpenAI-compatible) for dynamic natural-language responses about skills, experience, and projects.",
        duration: "4 min",
        type: "solution",
      },
      {
        title: "Performance Optimization",
        content:
          "Achieved 35% faster load time and 20% higher Lighthouse score through code-splitting, image lazy-loading, and preloading techniques.",
        duration: "3 min",
        type: "feature",
      },
      {
        title: "GitHub Integration",
        content:
          "Intelligent project summarization by fetching and parsing GitHub README content with reusable utilities and modular components.",
        duration: "3 min",
        type: "feature",
      },
    ],
  },
  // Web Applications
  {
    id: "reelmind-ai-assistant",
    title: "ReelMind – AI Study Assistant",
    description: "AI-powered Instagram Reel knowledge extraction platform",
    longDescription:
      "Architected an AI-powered Instagram Reel knowledge extraction platform using MERN + TypeScript, integrating Gemini AI and Groq AI through a 7-stage automated processing pipeline with strong fault tolerance.",
    thumbnail: projectAiChatbot,
    images: [Reelmind1, Reelmind2, Reelmind3, Reelmind4],
    category: "web",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Gemini AI",
      "Groq AI",
    ],
    role: "Full-stack Developer",
    duration: "4 months",
    liveUrl: "https://reel-workspace-frontend.onrender.com/",
    githubUrl: "https://github.com/anujsc/Reel_Workspace",
    featured: true,
    tracks: [
      {
        title: "Problem Statement",
        content:
          "Users need a way to extract and summarize knowledge from Instagram Reels efficiently with multilingual support.",
        duration: "2 min",
        type: "problem",
      },
      {
        title: "Solution Architecture",
        content:
          "Built a 7-stage automated processing pipeline integrating Gemini AI for audio transcription and Groq AI for multilingual summarization OCR.",
        duration: "5 min",
        type: "solution",
      },
      {
        title: "Performance Optimization",
        content:
          "Boosted reel processing performance by 40-50% through parallel execution, optimized FFmpeg audio extraction, singleton Puppeteer browser pool, and MongoDB compound + full-text indexes.",
        duration: "4 min",
        type: "feature",
      },
      {
        title: "Production Features",
        content:
          "JWT-based authentication, bcrypt hashing, centralized error handling, React Context + TanStack Query state management, and MongoDB aggregation pipelines.",
        duration: "3 min",
        type: "feature",
      },
    ],
  },
  {
    id: "url-shortener",
    title: "URL-Shortner",
    description: "Full-stack URL shortening service with click tracking",
    longDescription:
      "Built a full-stack URL shortening service using Node.js, Express.js, and MongoDB, enabling users to generate and manage short links with real-time redirection and click tracking.",
    thumbnail: projectLinktree,
    images: [Shortly2, Shortly1],
    category: "web",
    technologies: ["Node.js", "Express.js", "MongoDB", "React.js"],
    role: "Full-stack Developer",
    duration: "2 months",
    liveUrl: "https://url-shortner-f-vwjq.onrender.com/",
    githubUrl: "https://github.com/anujsc/URL_SHORTNER",
    featured: true,
    tracks: [
      {
        title: "Problem Statement",
        content:
          "Users need a simple way to shorten URLs and track their usage with click analytics.",
        duration: "2 min",
        type: "problem",
      },
      {
        title: "Backend Architecture",
        content:
          "Created RESTful APIs with modular controller-service architecture for improved maintainability and scalability.",
        duration: "4 min",
        type: "solution",
      },
      {
        title: "Key Features",
        content:
          "Real-time redirection, click tracking, and responsive React.js frontend with clean UI.",
        duration: "3 min",
        type: "feature",
      },
      {
        title: "Best Practices",
        content:
          "Collaborated during code reviews to maintain clean, well-documented code with responsive design.",
        duration: "2 min",
        type: "feature",
      },
    ],
  },
  {
    id: "img-enhancer",
    title: "Img Enhancer & BG Removal",
    description: "Image enhancement and background removal web app",
    longDescription:
      "A React-based web app for enhancing images and removing backgrounds using external APIs. Built with Firebase authentication, Vite, TailwindCSS, and various performance optimizations.",
    thumbnail: projectSpotifyStats,
    images: [ImgenhancerImg, ImgenhancerImg2],
    category: "frontend",
    technologies: [
      "React.js",
      "Firebase Auth",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "Framer Motion",
    ],
    role: "Frontend Developer",
    duration: "1 month",
    liveUrl: "https://img-enhancer.netlify.app/",
    githubUrl: "https://github.com/anujsc/img-enhancer",
    featured: true,
    tracks: [
      {
        title: "Problem Statement",
        content:
          "Users need an easy way to enhance images and remove backgrounds without complex software.",
        duration: "2 min",
        type: "problem",
      },
      {
        title: "Key Features",
        content:
          "Firebase Authentication (Email/Password & Google), Dark/Light Theme Toggle, Image Background Removal using Aoscdn Visual Segmentation API.",
        duration: "4 min",
        type: "feature",
      },
      {
        title: "UX Features",
        content:
          "Drag & Drop File Upload with Preview, Responsive Dashboard with Protected Routes.",
        duration: "3 min",
        type: "feature",
      },
      {
        title: "Performance",
        content:
          "Optimized with Brotli/Gzip compression, minified JavaScript, tree-shaking, lazy loading, and LCP below 2.5s.",
        duration: "3 min",
        type: "solution",
      },
    ],
  },
  {
    id: "scsdb-movies-app",
    title: "SCSDB – TV & Movies App",
    description: "Discover trending movies, TV shows, and actors",
    longDescription:
      "Dive into the world of movies, TV shows, and your favorite actors! Discover trending titles, explore detailed information, and read insightful reviews. Built with ReactJS, Redux Toolkit, and TMDB API.",
    thumbnail: projectSpotifyStats,
    images: [tv1, tv2, tv3, tv4, tv5, tv6],
    category: "frontend",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "TMDB API",
    ],
    role: "Frontend Developer",
    duration: "2 months",
    liveUrl: "https://scsdb.netlify.app/",
    githubUrl: "https://github.com/anujsc/SCSDB",
    featured: true,
    tracks: [
      {
        title: "Problem Statement",
        content:
          "Movie enthusiasts need a clean, fast way to discover and explore movies, TV shows, and actors.",
        duration: "2 min",
        type: "problem",
      },
      {
        title: "Solution Architecture",
        content:
          "Built with ReactJS for efficient UI, Redux Toolkit for state management, and Axios for fetching data from TMDB API.",
        duration: "4 min",
        type: "solution",
      },
      {
        title: "Key Features",
        content:
          "Trending titles, detailed information pages, insightful reviews, and seamless navigation with React Router Dom.",
        duration: "3 min",
        type: "feature",
      },
      {
        title: "Styling & Deployment",
        content:
          "Rapid styling with Tailwind CSS, Remix Icons for visual appeal, and Netlify for robust hosting.",
        duration: "2 min",
        type: "feature",
      },
    ],
  },
  {
    id: "spotify-portfolio",
    title: "Spotify-Style Portfolio",
    description: "Creative portfolio website with Spotify-inspired UI",
    longDescription:
      "A unique portfolio website featuring a Spotify-inspired design with smooth animations, dark theme, and interactive project showcases. Built with React, TypeScript, and Tailwind CSS.",
    thumbnail: projectLinktree,
    images: [portfolio1, portfolio1],
    category: "frontend",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
    role: "Full-stack Developer",
    duration: "1 month",
    featured: false,
    tracks: [
      {
        title: "Design Concept",
        content:
          "Spotify-inspired UI with familiar navigation patterns, player bar, and library sidebar for showcasing projects.",
        duration: "3 min",
        type: "solution",
      },
      {
        title: "Key Features",
        content:
          "Animated transitions, responsive design, project filtering, and detailed project views with track-like information.",
        duration: "4 min",
        type: "feature",
      },
      {
        title: "Tech Stack",
        content:
          "Modern stack with React, TypeScript for type safety, Tailwind CSS for styling, and Framer Motion for animations.",
        duration: "3 min",
        type: "feature",
      },
    ],
  },
];

export const skills = [
  { name: "TypeScript", level: "expert" as const },
  { name: "JavaScript", level: "expert" as const },
  { name: "React.js", level: "expert" as const },
  { name: "Angular.js", level: "expert" as const },
  { name: "Node.js", level: "expert" as const },
  { name: "Express.js", level: "expert" as const },
  { name: "Tailwind CSS", level: "expert" as const },
  { name: "MongoDB", level: "intermediate" as const },
  { name: "PostgreSQL", level: "intermediate" as const },
  { name: "MySQL", level: "intermediate" as const },
  { name: ".NET Core", level: "intermediate" as const },
  { name: "Redux Toolkit", level: "intermediate" as const },
  { name: "C++", level: "intermediate" as const },
  { name: "GSAP", level: "intermediate" as const },
  { name: "Framer Motion", level: "intermediate" as const },
  { name: "Firebase", level: "beginner" as const },
];

export const sidebarItems = [
  {
    title: "Web & Apps",
    icon: "star",
    count: 6,
    filter: "home",
    emoji: "🟣",
    section: "home",
  },
  {
    title: "About Me",
    icon: "globe",
    count: 5,
    filter: "about",
    emoji: "🌐",
    section: "about",
  },
  {
    title: "Education & Experience",
    icon: "brain",
    count: 3,
    filter: "experience",
    emoji: "🎓",
    section: "experience",
  },
  {
    title: "Coding Vibes",
    icon: "music",
    count: 1,
    filter: "spotify",
    emoji: "🎵",
    section: "spotify",
  },
  {
    title: "Contacts",
    icon: "database",
    count: 4,
    filter: "contact",
    emoji: "🏢",
    section: "contact",
  },
];

export const profile = {
  name: "Anuj Chaudhari",
  title: "Software Developer | Full-Stack (MERN, Angular, .NET)",
  location: "Indore, India",
  avatar: "AC",
  stats: {
    views: 12847,
    stars: 342,
    projects: projects.length,
  },
  socials: {
    github: "https://github.com/anujsc",
    linkedin: "https://www.linkedin.com/in/anuj-chaudhari-78a0a9256/",
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
  type: "degree" | "certification";
  logo?: string;
  gpa?: string;
  credentialUrl?: string;
}

export const experiences: Experience[] = [
  {
    company: "Enprosys Infotech",
    role: "Software Developer-Trainee",
    period: "September 2025 - Present",
    current: true,
    achievements: [
      "Developed comprehensive Master Data Management modules using Angular and React with TypeScript, creating dynamic forms and CRUD interfaces for properties, user rights, country master, accounts, and inventory data",
      "Reduced error rates by 15% through enhanced validation logic and type-safe implementations",
      "Built scalable, reusable component libraries with strictly typed interfaces to ensure maintainability across large-scale ERP applications",
      "Implemented reactive forms with custom validators and error handling to improve data quality and user experience",
      "Integrated frontend applications with RESTful APIs, managing complex state transitions using Redux Toolkit and RxJS",
      "Developed .NET Core backend endpoints when required to support frontend functionality and ensure seamless data flow",
    ],
    technologies: [
      "Angular",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RxJS",
      ".NET Core",
      "REST APIs",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "Sinhgad Institute Of Technology, Lonavala",
    year: "June 2021 - July 2025",
    type: "degree",
    gpa: "7.51 CGPA",
    highlights: [
      "Focused on software development and web technologies",
      "Built multiple full-stack projects during coursework",
      "Active participant in technical events and hackathons",
    ],
  },
  {
    degree: "Debugging JS / NodeJS",
    institution: "Udemy",
    year: "2024",
    type: "certification",
    credentialUrl: "https://udemy.com",
    highlights: [
      "Advanced debugging techniques for JavaScript and Node.js applications",
      "Proficient in using Chrome DevTools and Node.js debugging tools",
    ],
  },
  {
    degree: "UX Design Virtual Experience",
    institution: "Forage",
    year: "2024",
    type: "certification",
    credentialUrl: "https://forage.com",
    highlights: [
      "Completed virtual experience program focused on UX design principles",
      "Gained hands-on experience with user research and design thinking",
    ],
  },
];

// About Me Data
export const aboutMe = {
  story: [
    "I'm Anuj Chaudhari, a Software Developer based in Indore, India. I'm passionate about building scalable web applications and crafting exceptional user experiences using modern technologies like React, Angular, Node.js, and .NET Core.",
    "Currently working at Enprosys Infotech, I develop comprehensive Master Data Management modules and reusable component libraries for large-scale ERP applications. My focus is on writing clean, type-safe code with TypeScript and implementing robust validation systems.",
    "I love exploring the intersection of AI and web development, which led me to build projects like ReelMind (an AI-powered study assistant) and an AI Portfolio Query Assistant. When I'm not coding, I'm constantly learning new technologies and contributing to the developer community.",
  ],
  pullQuote:
    "Building scalable solutions with clean code and great user experience.",
  timeline: [
    {
      year: "2021",
      event: "Started B.E. in Computer Engineering at Sinhgad Institute",
    },
    {
      year: "2024",
      event: "Built AI-powered projects: ReelMind & Portfolio Assistant",
    },
    { year: "2025", event: "Graduated with B.E., Joined Enprosys Infotech" },
    {
      year: "2025",
      event: "Working on enterprise ERP applications with Angular & React",
    },
  ],
  interests: [
    {
      icon: "🤖",
      name: "AI/ML",
      description: "Building AI-powered applications",
    },
    {
      icon: "💻",
      name: "Full-Stack Dev",
      description: "MERN, Angular, .NET Core",
    },
    {
      icon: "🌱",
      name: "Open Source",
      description: "Contributing to web ecosystem",
    },
    { icon: "📚", name: "Learning", description: "Always exploring new tech" },
  ],
  funFacts: [
    { label: "Projects Built", value: "10+", icon: "🚀" },
    { label: "Tech Stack", value: "15+", icon: "💻" },
    { label: "APIs Integrated", value: "20+", icon: "🔗" },
    { label: "Code Reviews", value: "100+", icon: "📝" },
  ],
  influencedBy: [
    { name: "React", type: "Technology", icon: "⚛️" },
    { name: "Angular", type: "Technology", icon: "🅰️" },
    { name: "Node.js", type: "Technology", icon: "🟢" },
    { name: "TypeScript", type: "Technology", icon: "📘" },
  ],
  availability: {
    status: "available",
    message: "Open to opportunities",
  },
  languages: ["English (Fluent)", "Hindi (Native)", "Marathi (Native)"],
  headshot: "AC",
};

// Contact Data
export const contactInfo = {
  headline: "Let's build something amazing together",
  availability: {
    status: "available",
    message: "Open to opportunities",
  },
  responseTime: "Usually responds in 24h",
  bestTime: "9 AM - 6 PM IST (GMT+5:30)",
  preferredMethod: "Email or LinkedIn",
  email: "anujpvt@gmail.com",
  phone: "8308791653",
  socials: {
    github: {
      url: "https://github.com/anujsc",
      username: "@anujsc",
      contributions: "Active contributor",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/anuj-chaudhari-78a0a9256/",
      username: "Anuj Chaudhari",
      badge: "Software Developer",
    },
    twitter: {
      url: "https://twitter.com",
      username: "@anujchaudhari",
      latestTweet: "Building cool stuff with React & Node.js! 🚀",
    },
  },
};
