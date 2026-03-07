export interface Project {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  githubUrl?: string;
}

/** Extract owner/repo from a GitHub URL */
export function getGithubOwnerRepo(url: string): { owner: string; repo: string } | null {
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) return null;
  return { owner: match[1], repo: match[2] };
}

/** Fetch README from GitHub API (public repos, no auth needed) */
export async function fetchReadme(githubUrl: string): Promise<string | null> {
  const parsed = getGithubOwnerRepo(githubUrl);
  if (!parsed) return null;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${parsed.owner}/${parsed.repo}/readme`,
      { headers: { Accept: "application/vnd.github.v3.raw" } }
    );
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Nuclei Instance Segmentation",
    description: "A generalized deep learning approach for multi-organ nuclei segmentation using U-Net variants and Mask R-CNN with novel vague-region-aware loss weighting.",
    tags: ["Deep Learning", "Medical Imaging"],
    githubUrl: "https://github.com/nishalahmedpk/generalized-nuclei-instance-seg",
  },
  {
    id: "2",
    title: "AI Chat Assistant",
    description: "A conversational AI assistant built with transformer models and real-time streaming responses.",
    tags: ["Artificial Intelligence", "NLP"],
    githubUrl: "https://github.com/nishal/ai-chat",
  },
  {
    id: "3",
    title: "Code Review Bot",
    description: "Automated code review tool that analyzes PRs and suggests improvements using static analysis.",
    tags: ["DevTools", "Automation"],
  },
  {
    id: "4",
    title: "Fitness Tracker",
    description: "Track workouts, cycling routes, and lifting progress with detailed analytics and charts.",
    tags: ["Health", "Data Viz"],
    githubUrl: "https://github.com/nishal/fitness-tracker",
  },
];
