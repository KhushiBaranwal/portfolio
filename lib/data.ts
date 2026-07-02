import type { Project, SkillGroup, TimelineItem, Checkpoint, Certification } from "@/types";

export const OWNER = {
  name: "Khushi Baranwal",
  role: "ECE Student | AI/ML & Data Enthusiast",
  tagline:
    "Where hardware meets intelligence — I like building things that sense, learn, and respond.",
  bio: "Final-year Electronics & Communication Engineering student at JIIT with a foot in both worlds — the physical systems side of ECE and the data-driven side of AI/ML. I work with Python across machine learning, data science, and computer vision, always drawn to projects where the hardware and the intelligence layer have to work together.",
  focus: ["AI", "ML", "YOLO", "Computer Vision", "GenAI", "Future AI Engineer"],
  socials: {
    github: "https://github.com/KhushiBaranwal",
    linkedin: "https://www.linkedin.com/in/khushi-baranwal-633105372",
    resume: "/resume.pdf",
    email: "khushibaranwal2005@gmail.com",
  },
  roles: ["AI Engineer", "Machine Learning", "Computer Vision", "Generative AI"],
};

export const AI_STACK = [
  "Python",
  "YOLOv8",
  "OpenCV",
  "Machine Learning",
  "SQL",
  "Next.js",
  "Generative AI",
];

export const PROJECTS: Project[] = [
  {
    id: "smart-traffic",
    title: "Smart Traffic Management",
    description:
      "Real-time adaptive traffic signal system using YOLOv8 for vehicle detection, dual-lane density-based timing, emergency vehicle override and disabled-person priority logic.",
    tech: ["YOLOv8", "Python", "OpenCV", "Roboflow"],
    github: "https://github.com/KhushiBaranwal",
    demo: "#",
    image: "/projects/smart-traffic.svg",
  },
  {
    id: "resume-analyzer",
    title: "AI Resume Analyzer",
    description:
      "NLP-powered resume screening tool that scores resumes against job descriptions, extracts key skills and highlights gaps for candidates and recruiters.",
    tech: ["Python", "NLP", "Machine Learning"],
    github: "https://github.com/KhushiBaranwal",
    demo: "#",
    image: "/projects/resume-analyzer.svg",
  },
  {
    id: "smart-attendance",
    title: "Smart Attendance System",
    description:
      "Face-recognition based attendance system with real-time detection, liveness checks and an analytics dashboard for administrators.",
    tech: ["OpenCV", "Python", "SQL"],
    github: "https://github.com/KhushiBaranwal",
    demo: "#",
    image: "/projects/smart-attendance.svg",
  },
  {
    id: "phishing-detection",
    title: "Phishing Detection",
    description:
      "Machine learning classifier that flags phishing URLs and emails using feature engineering across lexical, host-based and content signals.",
    tech: ["Scikit-learn", "Python", "ML"],
    github: "https://github.com/KhushiBaranwal",
    demo: "#",
    image: "/projects/phishing-detection.svg",
  },
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Programming",
    items: ["Python", "C++", "SQL"],
  },
  {
    category: "AI / Machine Learning",
    items: [
      "Machine Learning",
      "Computer Vision",
      "YOLO",
      "OpenCV",
      "Scikit-learn",
      "TensorFlow",
      "GenAI",
    ],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "MATLAB", "Figma", "Google Colab"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure (OCI) Certification",
    issuer: "Oracle",
    year: "2025",
  },
  {
    title: "AI/ML Certification",
    issuer: "Infosys Springboard",
    year: "2025",
  },
  {
    title: "Advanced Computing Certification",
    issuer: "CDAC",
    year: "2025",
  },
];


export const TIMELINE: TimelineItem[] = [
  {
    year: "2023",
    title: "Started B.Tech ECE",
    description: "Began Electronics & Communication Engineering, JIIT.",
    type: "education",
  },
  {
    year: "2024",
    title: "Foundations in AI/ML",
    description: "Built first machine learning models and computer vision pipelines.",
    type: "education",
  },
  {
    year: "2025",
    title: "Smart Traffic Management System",
    description: "Shipped a YOLOv8-based adaptive traffic system with real-world dataset training.",
    type: "project",
  },
  {
    year: "2026",
    title: "Internship",
    description: "Summer Internship trainee at BHEL, Varanasi",
    type: "internship",
  },
  {
    year: "Now",
    title: "Open for Opportunities",
    description: "Looking for AI Engineer / ML Engineer roles where hardware meets intelligence.",
    type: "future",
  },
];

export const CHECKPOINTS: Checkpoint[] = [
  {
    id: "college",
    label: "College",
    title: "JIIT — B.Tech ECE",
    description:
      "Electronics & Communication Engineering student building a bridge between hardware fundamentals and applied AI.",
    tech: ["Electronics", "Signals", "Embedded Systems"],
    x: 6,
  },
  {
    id: "traffic-ai",
    label: "Traffic AI",
    title: "Smart Traffic Management System",
    description:
      "YOLOv8-powered adaptive signal control with emergency vehicle override and priority logic for disabled pedestrians.",
    tech: ["YOLOv8", "Python", "OpenCV"],
    github: "https://github.com/KhushiBaranwal",
    demo: "#",
    x: 24,
  },
  {
    id: "attendance",
    label: "Attendance System",
    title: "Smart Attendance System",
    description:
      "Face-recognition attendance tracking with a live analytics dashboard for administrators.",
    tech: ["OpenCV", "Python", "SQL"],
    github: "https://github.com/KhushiBaranwal",
    demo: "#",
    x: 44,
  },
  {
    id: "phishing",
    label: "Phishing Detection",
    title: "Phishing Detection Engine",
    description:
      "Classifier flagging malicious URLs and emails via engineered lexical and host-based features.",
    tech: ["Scikit-learn", "Python"],
    github: "https://github.com/KhushiBaranwal",
    demo: "#",
    x: 64,
  },
  {
    id: "certificates",
    label: "Certificates",
    title: "Certifications",
    description:
      "A growing collection of ML, computer vision and cloud certifications backing up the project work.",
    tech: ["ML", "CV", "Cloud"],
    x: 82,
  },
  {
    id: "open-for-work",
    label: "Open For Work",
    title: "Let's Build Something",
    description:
      "Currently open to AI Engineer and ML Engineer roles — especially ones where hardware and intelligence meet.",
    tech: ["AI Engineer", "ML Engineer"],
    x: 96,
  },
];
