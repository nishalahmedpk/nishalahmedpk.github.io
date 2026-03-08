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
    description: `Abstract: 
    Foundations models demonstrate potential in modeling multi-modal medical time
series, however, they lack interpretability therefore reliability required for complex
decision systems. These models tend to prioritize statistical correlations which may
result in clinically questionable predictions. This paper proposes a Neurosymbolic
framework that leverages Mixture-of-Experts and GraphRAG. It maps raw signals
with structured medical logic from PrimeKG for semantic reasoning. A hierarchical
agent system is implemented for traversing the knowledge graphs and retrieving
subgraphs that aid in the MoE routing. Experiments on the MIMIC-IV for dataset
shows superior forecasting accuracy compared to existing state of the art methods.
    `,
    tags: ["Time-Series", "RAG","Deep Learning"],
    // githubUrl: "https://github.com/nishal/fitness-tracker",
  },
];
