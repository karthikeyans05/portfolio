// src/data/portfolio.ts
// ALL content lives here — components never hardcode strings

export const portfolioData = {
  name: "Karthikeyan Sivakumar",
  initials: "KS",
  tagline: "Building production-grade software across mobile, web, and cloud.",
  roles: [
    "Full Stack Developer",
    "Cloud Engineer",
    "AI/ML Engineer",
  ],
  email: "karthikeyan@example.com", // TODO: replace with actual email
  location: "Puducherry, India",
  github: "https://github.com/karthikeyans05",
  linkedin: "https://www.linkedin.com/in/karthikeyasiva/",
  resumeUrl: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID", // TODO: upload to Drive

  about: {
    bio: "I'm a Full Stack Developer passionate about building applications that solve real-world problems — from AI-powered Android safety systems to production-grade web platforms deployed with Docker on cloud infrastructure. My work spans Kotlin + ML Kit for on-device mobile intelligence, Java Spring Boot for robust backends, Node.js for rapid APIs, and React on the frontend. As a second-year student, I learn fastest by shipping real things.",
    stats: [
      { label: "Projects Built", value: "6+" },
      { label: "Tech Stacks", value: "10+" },
      { label: "College Year", value: "2nd" },
      { label: "Graduation", value: "2027" },
    ],
  },

  skills: [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "Node.js", "Express.js", "PHP", "MySQL", "MongoDB"],
    },
    {
      category: "Mobile & AI/ML",
      items: ["Android (Kotlin)", "CameraX", "ML Kit", "TensorFlow Lite", "OpenCV"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Render", "Git", "GitHub"],
    },
    {
      category: "Architecture",
      items: ["MVVM", "REST APIs", "MVC", "Maven", "Gradle"],
    },
  ],

  projects: [
    {
      title: "SafeDrive Vision",
      description:
        "Production-ready Android driver drowsiness monitoring app. Uses Google ML Kit Face Detection + CameraX to detect eye closure (2s) and head tilt (3s) in real-time, firing sound and vibration alerts. Fully offline — all ML inference runs on-device with zero network calls. Built with clean MVVM architecture.",
      tech: ["Kotlin", "Android", "ML Kit", "CameraX", "TFLite", "MVVM"],
      github: "https://github.com/karthikeyans05/SafeDriveApp",
      live: null,
      badge: "AI/ML · Mobile",
    },
    {
      title: "ExpenseFlow",
      description:
        "Full-stack expense tracking platform with category donut charts, monthly trend visualizations, budget alerts, and full-text search. REST API with complete CRUD, input validation on both frontend and backend, and Docker + Render deployment.",
      tech: ["Java", "Spring Boot", "JavaScript", "HTML/CSS", "MySQL", "Docker"],
      github: "https://github.com/karthikeyans05/Smart-Expense-Tracker",
      live: null,
      badge: "Full Stack",
    },
    {
      title: "Attend IQ",
      description:
        "Smart attendance management system for educational institutions. Streamlines attendance tracking with intelligent insights and reporting, reducing manual overhead for faculty.",
      tech: ["JavaScript", "Node.js", "MySQL"],
      github: "https://github.com/karthikeyans05/Attend_IQ",
      live: null,
      badge: "Web App",
    },
    {
      title: "AI Chatbot",
      description:
        "ChatGPT-style conversational AI web app. Node.js + Express backend integrates OpenRouter LLM API with MongoDB-persisted conversation history. Full-screen dark UI, keyboard shortcuts, and real-time AI responses.",
      tech: ["Node.js", "Express", "MongoDB", "JavaScript", "OpenRouter API"],
      github: "https://github.com/karthikeyans05/AI-Chatbot",
      live: null,
      badge: "AI · Full Stack",
    },
  ],

  experience: [
    // Add internships here when available
    // {
    //   role: "Web Development Intern",
    //   company: "Company Name",
    //   duration: "Month Year – Month Year",
    //   description: "What you built and what impact it had.",
    //   type: "internship",
    // },
  ],

  education: [
    {
      degree: "B.Tech (Hons) Information Technology",
      specialization: "Advanced Web Development",
      institution: "Sri Manakula Vinayagar Engineering College",
      location: "Puducherry, India",
      duration: "2023 – 2027",
    },
  ],
} as const;

export type PortfolioData = typeof portfolioData;
