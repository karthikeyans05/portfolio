// src/data/portfolio.ts
// ALL content lives here — components never hardcode strings

export const portfolioData = {
  name: "Karthikeyan S",
  initials: "KS",
  tagline: "Building production-grade software across mobile, web, and cloud.",
  roles: [
    "Full Stack Developer",
    "Cloud Engineer",
    "AI/ML Engineer",
  ],
  email: "karthikeyansivakumar192005@gmail.com", // TODO: replace with actual email
  location: "Cuddalore, India",
  github: "https://github.com/karthikeyans05",
  linkedin: "https://www.linkedin.com/in/karthikeyasiva/",
  resumeUrl: "https://drive.google.com/uc?export=download&id=19jFY9zuQX9LmUA5wT5U4-z_pL3gRCHJQ",

  about: {
    bio: "I'm a Full Stack Developer passionate about building applications that solve real-world problems — from AI-powered Android safety systems to production-grade web platforms deployed with Docker on cloud infrastructure. My work spans Kotlin + ML Kit for on-device mobile intelligence, Java Spring Boot for robust backends, Node.js for rapid APIs, and React on the frontend. I learn fastest by shipping real things.",
    stats: [
      { label: "Projects Built", value: "6+" },
      { label: "Tech Stacks", value: "10+" },
      { label: "College Year", value: "Final" },
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
        "Cloud-based smart attendance risk prediction system with GenAI chatbot and ML risk engine. Role-based access for Admin, Faculty, and HOD. Predicts at-risk students using a rule-based ML model (simulates Random Forest + XGBoost), visualizes 8-week trends and department-wise stats, and includes a Claude-powered chatbot for attendance insights with smart fallback.",
      tech: ["React 18", "Node.js", "Express", "MongoDB", "Recharts", "Claude API", "JWT", "AWS"],
      github: "https://github.com/karthikeyans05/Attend_IQ",
      live: null,
      badge: "Cloud · GenAI · ML",
    },
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
    {
      role: "Generative AI Intern",
      company: "Flaunch Technologies",
      duration: "Sep 2024 – Oct 2024",
      description:
        "Part of the Flaunch Emerging Tech Internship program on Gen AI & XR, in collaboration with AICTE, NEAT, and 1M1B. Worked on real-world Generative AI projects, gained hands-on experience with open-source LLMs like LLaMA, and built portfolio projects alongside industry professionals.",
      type: "internship",
    },
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
