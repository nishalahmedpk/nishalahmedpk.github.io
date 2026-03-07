export interface Project {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  githubUrl?: string;
  readme?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Chat Assistant",
    description: "A conversational AI assistant built with transformer models and real-time streaming responses.",
    tags: ["Artificial Intelligence", "NLP"],
    githubUrl: "https://github.com/nishal/ai-chat",
    readme: `# AI Chat Assistant\n\nA conversational AI assistant powered by transformer models.\n\n## Features\n\n- Real-time streaming responses\n- Context-aware conversations\n- Multi-language support\n- Custom model fine-tuning\n\n## Tech Stack\n\n- Python / FastAPI\n- React / TypeScript\n- WebSocket streaming\n- Docker deployment\n\n## Getting Started\n\n\`\`\`bash\nnpm install\nnpm run dev\n\`\`\`\n\n## Architecture\n\nThe system uses a microservices architecture with separate services for:\n\n1. **API Gateway** - Handles routing and auth\n2. **Model Service** - Runs inference\n3. **Chat Service** - Manages conversation state\n\n> Built with ❤️ by Nishal Ahmed`,
  },
  {
    id: "2",
    title: "Trail Mapper",
    description: "GPS-based hiking trail recorder with elevation profiles and offline map support.",
    tags: ["Mobile", "Maps"],
    githubUrl: "https://github.com/nishal/trail-mapper",
    readme: `# Trail Mapper\n\nRecord and share your hiking adventures.\n\n## Features\n\n- GPS trail recording\n- Elevation profiles\n- Offline map tiles\n- Trail sharing\n\n## Usage\n\nOpen the app, hit record, and start hiking!`,
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
    readme: `# Fitness Tracker\n\nTrack your fitness journey.\n\n## Features\n\n- Workout logging\n- Progress charts\n- Route mapping for cycling\n- Personal records tracking`,
  },
];
