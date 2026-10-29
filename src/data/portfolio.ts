// Product descriptions and links: dealrevs.com, carantee.me,
// tboxsolutionz.com/spendlio, and realhorse.com. Employment dates are kept
// only where already present in the portfolio; no TBox dates were supplied.
export const profile = {
  name: "Adnan Khattak",
  role: "Software Engineer · React Native & Mobile",
  github: "https://github.com/adnan-khattak",
  linkedin: "https://www.linkedin.com/in/addi54/",
  email: "adnanktk540@gmail.com",
  siteUrl: "https://addi-portfolio.vercel.app",
  summary: "Software engineer building and maintaining production mobile apps. My work spans React Native, native integrations, release automation, and debugging the issues that appear on real devices.",
};

type Experience = {
  company: string;
  position: string;
  period?: string;
  location?: string;
  type?: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
    {
      company: "TBox Solutionz",
      position: "Software Engineer",
      description: "Building and maintaining production mobile applications, with a focus on modernization, native integrations, release automation, and stability.",
      achievements: [
        "Migrated React Native from 0.64 to 0.81, resolving native dependencies and build compatibility across iOS and Android",
        "Automated build and distribution workflows with GitHub Actions, Xcode CLI, and Firebase App Distribution",
        "Investigated production crashes with Firebase Crashlytics and Sentry",
        "Delivered native integrations including Siri Shortcuts, OCR/text recognition, and Google Maps",
        "Used Claude Code, Cursor, and MCP tooling for codebase exploration, implementation, and debugging"
      ],
      technologies: ["React Native", "TypeScript", "GitHub Actions", "Xcode CLI", "Firebase App Distribution", "Crashlytics", "Sentry"]
    },
    {
      company: "Voultrex",
      position: "Software Engineer",
      period: "05/2025 - Present",
      location: "Doha, Qatar",
      type: "Full-time",
      description: "Building Evolve AI Fitness App with advanced features including meditation, HealthKit integration, multilingual support, and secure authentication systems.",
      achievements: [
        "Integrated OpenAI for personalized Fitness and Calories experiences",
        "Implemented secure authentication and subscription management with Stripe",
        "Developed multilingual support for global user base",
        "Built comprehensive HealthKit integration for wellness tracking",
        "Integrated Mapbox for live location tracking"
      ],
      technologies: ["React Native", "TypeScript", "OpenAI API", "HealthKit", "Firebase", "Supabase", "RevenueCat"]
    },
    {
      company: "TechCreator",
      position: "React Native Developer",
      period: "12/2024 - 05/2025",
      location: "Swabi, Pakistan",
      type: "Full-time",
      description: "Enhanced user satisfaction and feature utilization with real-time mobile features. Developed social-style service platform with advanced functionality.",
      achievements: [
        "Built Services App with social interactions (likes, comments)",
        "Integrated Google Ads and voice calling capabilities",
        "Improved user engagement through real-time features",
        "Enhanced overall app performance and user satisfaction"
      ],
      technologies: ["React Native", "Firebase", "Google Ads", "WebRTC", "Redux", "FCM"]
    },
    {
      company: "Eonlight Solution",
      position: "Full Stack Mobile Developer",
      period: "05/2024 - 12/2024",
      location: "Remote",
      type: "Full-time",
      description: "Developed fire safety application with ML-based real-time detection and push alerts for comprehensive safety management.",
      achievements: [
        "Implemented ML-powered fire detection algorithms",
        "Built real-time alert system with push notifications",
        "Developed emergency response coordination features",
        "Created comprehensive safety management dashboard"
      ],
      technologies: ["React Native", "Machine Learning", "FCM", "Firebase", "Camera API", "Push Notifications"]
    },
    {
      company: "Grey Software",
      position: "React Native Developer",
      period: "06/2023 - 05/2024",
      location: "Remote",
      type: "Full-time",
      description: "Created community cleanup app with real-time reporting and two-panel task management system for efficient community coordination.",
      achievements: [
        "Built real-time citizen reporting platform",
        "Developed two-panel task management interface",
        "Implemented Google Maps integration for location tracking",
        "Created efficient community coordination workflows"
      ],
      technologies: ["React Native", "Firebase", "Google Maps", "Redux", "Real-time Database", "Image Processing"]
    },
    {
      company: "CodSoft",
      position: "Intern",
      period: "04/2023",
      location: "Remote",
      type: "Internship",
      description: "Built and optimized mobile app features during internship program, gaining hands-on experience in React Native development.",
      achievements: [
        "Successfully completed internship program",
        "Built and optimized mobile app features",
        "Learned React Native development fundamentals",
        "Collaborated with development team on various projects"
      ],
      technologies: ["React Native", "JavaScript", "Firebase", "Git", "Agile Development"]
    }
  ];

type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: string;
  company?: string;
  year?: string;
  url?: string;
};

export const projects: Project[] = [
    {
      title: "DealRevs",
      description: "Automotive trade-in and valuation app that helps dealerships appraise vehicles and make informed buying and selling decisions.",
      technologies: ["React Native", "TypeScript", "Mobile APIs"],
      category: "Automotive",
      status: "Production",
      url: "https://dealrevs.com/"
    },
    {
      title: "Carantee",
      description: "Vehicle inspection app for service teams to document condition, capture photos, appraise vehicles, and prepare listings.",
      technologies: ["React Native", "Vehicle inspections", "Camera integration"],
      category: "Automotive",
      status: "Production",
      url: "https://carantee.me/"
    },
    {
      title: "Spendlio",
      description: "Private iOS expense tracker with voice entry, on-device receipt scanning, bill reminders, and offline money management.",
      technologies: ["iOS", "OCR/text recognition", "Voice input", "Offline storage"],
      category: "Personal Finance",
      status: "Production",
      url: "https://tboxsolutionz.com/spendlio/"
    },
    {
      title: "Real Horse",
      description: "Equine movement analysis app that uses computer vision to help horse owners and professionals monitor gait symmetry over time.",
      technologies: ["iOS", "Mobile development", "Computer vision"],
      category: "Equestrian",
      status: "Production",
      url: "https://realhorse.com/"
    },
    {
      title: "Evolve",
      description: "AI-powered food and wellness tracker with smart meal logging, nutrition insights, hydration goals, workout tracking, habit building, and Apple Health integration.",
      technologies: ["React Native", "TypeScript", "OpenAI API","HealthKit", "Supabase", "RevenueCat"],
      category: "Health & Fitness",
      status: "Production",
      company: "Voultrex",
      year: "2025"
    },
    {
      title: "OXI Task",
      description: "Social-style service platform featuring ads integration, voice calling capabilities, and social interactions with likes and comments system for service providers and clients.",
      technologies: ["React Native", "Firebase", "Google Ads", "WebRTC", "Redux", "FCM"],
      category: "Social Platform",
      status: "Production",
      company: "TechCreator",
      year: "2024-2025"
    },
    {
      title: "Rideshare App",
      description: "Real-time ride booking application with Google Maps integration, live tracking, payment processing, and efficient ride matching algorithms.",
      technologies: ["React Native", "Google Maps API", "Firebase", "Stripe", "Redux", "WebSocket"],
      category: "Transportation",
      status: "Completed",
      company: "Personal Project",
      year: "2024"
    },
    {
      title: "Fire Safety App",
      description: "ML-powered fire detection system with real-time alerts, emergency notifications, and comprehensive safety management for residential and commercial properties.",
      technologies: ["React Native", "Machine Learning", "FCM", "Firebase", "Camera API", "Push Notifications"],
      category: "Safety & Security",
      status: "Completed",
      company: "Eonlight Solution",
      year: "2024"
    },
    {
      title: "Community Cleanup App",
      description: "Real-time citizen reporting platform with task management system featuring two-panel interface for efficient community cleanup coordination and monitoring.",
      technologies: ["React Native", "Firebase", "Google Maps", "Redux", "Real-time Database", "Image Processing"],
      category: "Community",
      status: "Completed",
      company: "Grey Software",
      year: "2023-2024"
    }
  ];

export const productionProjects = projects.filter(project =>
  ["DealRevs", "Carantee", "Spendlio", "Real Horse", "Evolve"].includes(project.title)
);

export const engineeringHighlights = [
  {
    title: "React Native 0.64→0.81 migration",
    description: "Modernized a legacy app across React Native versions, working through native dependency changes and iOS/Android build compatibility.",
  },
  {
    title: "CI/CD & release automation",
    description: "Built delivery workflows with GitHub Actions, Xcode CLI, and Firebase App Distribution to make builds and tester distribution repeatable.",
  },
  {
    title: "Production crash debugging",
    description: "Used Firebase Crashlytics and Sentry to investigate device crashes, trace failures, and validate fixes in production apps.",
  },
  {
    title: "Native features & integrations",
    description: "Worked with Siri Shortcuts, OCR/text recognition, Google Maps, HealthKit, notifications, and subscriptions to connect mobile apps with platform capabilities.",
  },
  {
    title: "AI-assisted engineering",
    description: "Used Claude Code, Cursor, and Model Context Protocol (MCP) tooling to explore codebases, implement changes, and support debugging, with review and validation before release.",
  },
];

export const skills = [
  { name: "React Native", category: "Mobile", description: "Production iOS and Android apps, native modules, performance work, and React Native 0.64→0.81 migration." },
  { name: "TypeScript & JavaScript", category: "Mobile", description: "Typed application code, reusable components, and maintainable mobile features." },
  { name: "Redux & React", category: "Mobile", description: "Application state, component architecture, and responsive interfaces." },
  { name: "Siri Shortcuts", category: "Native & Integrations", description: "Connecting app actions with iOS shortcuts and system workflows." },
  { name: "OCR/text recognition", category: "Native & Integrations", description: "Extracting text from camera images and receipts for mobile workflows." },
  { name: "Google Maps", category: "Native & Integrations", description: "Maps, geolocation, and location-aware mobile experiences." },
  { name: "HealthKit & subscriptions", category: "Native & Integrations", description: "Health data integrations and payment workflows with Stripe and RevenueCat." },
  { name: "OpenAI & ElevenLabs APIs", category: "Native & Integrations", description: "AI and voice features in wellness applications." },
  { name: "Firebase & FCM", category: "Backend & Cloud", description: "Authentication, real-time data, analytics, and push notifications." },
  { name: "Supabase & REST APIs", category: "Backend & Cloud", description: "Backend services, API integrations, and real-time application data." },
  { name: "GitHub Actions", category: "Delivery & Reliability", description: "CI/CD workflows for repeatable mobile builds and releases." },
  { name: "Xcode CLI", category: "Delivery & Reliability", description: "Command-line iOS builds, archives, and release automation." },
  { name: "Firebase App Distribution", category: "Delivery & Reliability", description: "Distributing test builds and supporting release validation." },
  { name: "Crashlytics & Sentry", category: "Delivery & Reliability", description: "Production crash investigation, error monitoring, and debugging." },
  { name: "Git & code review", category: "Tools & Workflow", description: "Version control, collaborative development, and reviewed changes." },
  { name: "Claude Code & Cursor", category: "Tools & Workflow", description: "AI-assisted codebase exploration, implementation, and debugging." },
  { name: "MCP tooling", category: "Tools & Workflow", description: "Model Context Protocol tools that connect development workflows with relevant context." },
];

export const skillCategories = ["All", ...new Set(skills.map(skill => skill.category))];

export const portfolioStats = [
  { value: "5", label: "Featured Production Apps", color: "text-primary" },
  { value: "iOS + Android", label: "Mobile Platforms", color: "text-accent" },
  { value: "0.64→0.81", label: "React Native Migration", color: "text-honey" },
  { value: "CI/CD", label: "Release Automation", color: "text-primary-glow" },
];
