import type { Project, SkillGroup, TimelineItem, Checkpoint } from "@/types";

export const OWNER = {
  name: "Khushi Baranwal",
  role: "AI Engineer",
  tagline:
    "I build things that see and decide — vision models, ML pipelines, and the web apps that put them in front of people.",
  bio: "Final-year ECE student at JIIT who got pulled into AI through a traffic project that actually had to work in real footage, not just a notebook. Since then I've been building computer vision and ML systems end-to-end — model to deployment.",
  focus: ["Computer Vision", "Machine Learning", "YOLO", "GenAI"],
  socials: {
    github: "https://github.com/KhushiBaranwal",
    linkedin: "https://www.linkedin.com/in/khushi-baranwal-633105372",
    resume: "/resume.pdf",
    email: "hello@khushibaranwal.dev",
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
      "Traffic signals that actually count vehicles instead of running on a fixed timer. Built on YOLOv8 for real-time detection, it adjusts green-light duration based on lane density and jumps the queue for ambulances and disabled pedestrians.",
    tech: ["YOLOv8", "Python", "OpenCV", "Roboflow"],
    github: "https://github.com/KhushiBaranwal",
    demo: "#",
    image: "/projects/smart-traffic.svg",
  },
  {
    id: "resume-analyzer",
    title: "AI Resume Analyzer",
    description:
      "Feed it a resume and a job description, get back a match score and the exact skill gaps — built so recruiters (and job seekers) don't have to read between the lines.",
    tech: ["Python", "NLP", "Machine Learning"],
    github: "https://github.com/KhushiBaranwal",
    demo: "#",
    image: "/projects/resume-analyzer.svg",
  },
  {
    id: "smart-attendance",
    title: "Smart Attendance System",
    description:
      "Face-recognition attendance that clocks people in as they walk past a camera, with a liveness check so a photo can't fake it, and a dashboard admins can actually read.",
    tech: ["OpenCV", "Python", "SQL"],
    github: "https://github.com/KhushiBaranwal",
    demo: "#",
    image: "/projects/smart-attendance.svg",
  },
  {
    id: "phishing-detection",
    title: "Phishing Detection",
    description:
      "A classifier that catches phishing links before you click them, trained on lexical, host, and content-level features rather than a simple blocklist.",
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

export const TIMELINE: TimelineItem[] = [
  {
    year: "2023",
    title: "Started B.Tech ECE",
    description: "Joined JIIT for Electronics & Communication Engineering.",
    type: "education",
  },
  {
    year: "2024",
    title: "Got into AI/ML",
    description: "Started building actual ML models and CV pipelines instead of just studying theory.",
    type: "education",
  },
  {
    year: "2025",
    title: "Smart Traffic Management System",
    description: "Trained and shipped a YOLOv8 traffic system on a real-world dataset — my first project that had to survive contact with real data.",
    type: "project",
  },
  {
    year: "2025",
    title: "Internship",
    description: "Applied core electronics and AI concepts in a real industry setting.",
    type: "internship",
  },
  {
    year: "2026",
    title: "Certifications & Growing Project List",
    description: "Picked up ML and CV certifications while adding to the project portfolio.",
    type: "achievement",
  },
  {
    year: "Now",
    title: "Open to Opportunities",
    description: "Looking for AI/ML Engineer roles where I can work at the intersection of hardware and intelligence.",
    type: "future",
  },
];

export const CHECKPOINTS: Checkpoint[] = [
  {
    id: "college",
    label: "College",
    title: "JIIT — B.Tech ECE",
    description:
      "Electronics & Communication Engineering, with a growing pull toward the AI side of things — I like understanding systems from the signal up.",
    tech: ["Electronics", "Signals", "Embedded Systems"],
    x: 6,
  },
  {
    id: "traffic-ai",
    label: "Traffic AI",
    title: "Smart Traffic Management System",
    description:
      "YOLOv8-based adaptive signal control that reads live traffic density and gives emergency vehicles and disabled pedestrians priority.",
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
      "Face-recognition attendance with liveness detection and a live dashboard, built to replace manual roll calls.",
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
      "A classifier that flags malicious URLs and emails using engineered lexical and host-based features — not a simple keyword filter.",
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
      "ML, CV, and cloud certifications picked up alongside the project work, not instead of it.",
    tech: ["ML", "CV", "Cloud"],
    x: 82,
  },
  {
    id: "open-for-work",
    label: "Open For Work",
    title: "Let's Build Something",
    description:
      "Open to AI/ML Engineer roles — especially ones where hardware and intelligence meet.",
    tech: ["AI Engineer", "ML Engineer"],
    x: 96,
  },
];