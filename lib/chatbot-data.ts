import { OWNER, PROJECTS, SKILLS, TIMELINE } from "@/lib/data";

export interface FaqEntry {
  keywords: string[];
  answer: string;
}

const projectNames = PROJECTS.map((p) => p.title).join(", ");
const skillList = SKILLS.flatMap((g) => g.items).join(", ");
const latestMilestone = TIMELINE[TIMELINE.length - 1];

/**
 * Simple keyword-scored FAQ bank. No API calls — every answer is built
 * from the same content that already powers the rest of the site
 * (lib/data.ts), so editing that file keeps the bot in sync automatically.
 */
export const FAQ_BANK: FaqEntry[] = [
  {
    keywords: ["who", "about", "yourself", "intro", "khushi"],
    answer: `I'm ${OWNER.name}'s portfolio assistant. ${OWNER.bio}`,
  },
  {
    keywords: ["project", "projects", "work", "built", "portfolio"],
    answer: `Khushi has built ${PROJECTS.length} featured projects: ${projectNames}. Scroll to the Projects section for details, screenshots and GitHub links.`,
  },
  {
    keywords: ["skill", "skills", "tech", "stack", "technologies", "language", "languages"],
    answer: `Core skills include: ${skillList}. Check the Skills section for the full breakdown by category.`,
  },
  {
    keywords: ["experience", "timeline", "journey", "background", "education", "college", "jiit"],
    answer: `Khushi is currently: "${latestMilestone.title}" — ${latestMilestone.description} See the full Journey and Experience sections for the complete timeline.`,
  },
  {
    keywords: ["contact", "email", "reach", "hire", "connect", "message"],
    answer: `You can reach out at ${OWNER.socials.email}, or use the Contact section at the bottom of the page.`,
  },
  {
    keywords: ["resume", "cv"],
    answer: `You can download the resume here: ${OWNER.socials.resume}`,
  },
  {
    keywords: ["github", "code", "repo", "repository"],
    answer: `Here's the GitHub profile: ${OWNER.socials.github}`,
  },
  {
    keywords: ["linkedin"],
    answer: `Here's the LinkedIn profile: ${OWNER.socials.linkedin}`,
  },
  {
    keywords: ["available", "opportunity", "job", "opportunities", "open", "hiring", "role"],
    answer: `Yes — Khushi is currently open to AI Engineer and Machine Learning opportunities. Feel free to reach out via the Contact section!`,
  },
  {
    keywords: ["ai", "ml", "machine learning", "computer vision", "genai", "yolo"],
    answer: `Khushi's focus areas are: ${OWNER.focus.join(", ")}. The Smart Traffic Management project is a great example — it uses YOLOv8 for real-time vehicle detection.`,
  },
];

export const QUICK_REPLIES = [
  "Tell me about Khushi",
  "What projects has she built?",
  "What are her skills?",
  "How do I contact her?",
];

const FALLBACK_ANSWER =
  "I'm just a simple FAQ bot, so I might not have that one! Try asking about projects, skills, experience, or how to get in touch — or use the Contact section directly.";

export function getFaqAnswer(userMessage: string): string {
  const message = userMessage.toLowerCase();

  let bestMatch: FaqEntry | null = null;
  let bestScore = 0;

  for (const entry of FAQ_BANK) {
    const score = entry.keywords.reduce(
      (acc, kw) => (message.includes(kw) ? acc + 1 : acc),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestMatch ? bestMatch.answer : FALLBACK_ANSWER;
}