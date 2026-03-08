export interface Project {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  githubUrl?: string;
  popuptext?: string;
  image?: string;
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
    tags: ["Deep Learning", "Image Processing", "Medical Imaging","PyTorch","TensorFlow"],
    githubUrl: "https://github.com/nishalahmedpk/generalized-nuclei-instance-seg",
  },
  {
    id: "2",
    title: "QAOA for Organ Allocation",
    description: "A hybrid quantum-classical approach to solving the logistic optimization problem in organ transportation networks.",
    tags: ["Quantum Computing", "NumericalOptimization","Pennylane"],
    githubUrl: "https://github.com/nishalahmedpk/QAOAForOrganAllocation",
  },
  {
    id: "3",
    title: "FrameStorm",
    description: "An automated video generation pipeline that takes text descriptions and produces complete short-form videos with voiceover, using LLMs, text-to-speech, and text-to-video models. Includes an agent-based chat interface for editing the generated videos.",
    tags: ["Agentic AI", "Video Generation", "LLMs"],
      githubUrl: "https://github.com/nishalahmedpk/FrameStormBackend",
  },
  {
    id: "4",
    title: "Neuro-Symbolic Medical Foundation Model for Healthcare",
    description: "Multimodal medical time-series reasoning using Knowledge-Infused Semantic Graph-RAG.",
    tags: ["Time-Series", "RAG","Deep Learning"],
    popuptext: `Abstract:
    In the rapidly evolving landscape of healthcare, the integration of multimodal medical data has become paramount for accurate diagnosis and effective treatment planning. This paper introduces a novel neuro-symbolic medical foundation model that leverages Knowledge-Infused Semantic Graph Retrieval-Augmented Generation (RAG) to enhance reasoning capabilities in healthcare applications. Our approach combines the strengths of deep learning with symbolic reasoning, enabling the model to process and interpret complex medical time-series data effectively. We demonstrate the efficacy of our model through extensive experiments on real-world healthcare datasets, showcasing its potential to revolutionize clinical decision-making and improve patient outcomes.`,
    image: '/Schematic.svg',

    // githubUrl: "https://github.com/nishal/fitness-tracker",
  },
];
