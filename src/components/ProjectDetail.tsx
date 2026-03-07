import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Project } from "@/data/projects";
import { fetchReadme } from "@/data/projects";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  const [readme, setReadme] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (project?.githubUrl) {
      setLoading(true);
      setReadme(null);
      fetchReadme(project.githubUrl).then((md) => {
        setReadme(md);
        setLoading(false);
      });
    } else {
      setReadme(null);
      setLoading(false);
    }
  }, [project?.githubUrl]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-12 lg:inset-24 z-50 project-card overflow-y-auto custom-scrollbar"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                {project.title}
              </h2>
              <div className="flex items-center gap-3 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-foreground transition-colors p-1"
                  >
                    <Github size={26} />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="text-primary hover:text-foreground transition-colors p-1"
                >
                  <X size={28} strokeWidth={3} />
                </button>
              </div>
            </div>

            <p className="text-base mb-6 text-card-foreground/80">
              {project.description}
            </p>

            {loading && (
              <div className="flex items-center gap-2 text-muted-foreground py-8">
                <Loader2 size={20} className="animate-spin" />
                <span>Loading README...</span>
              </div>
            )}

            {readme && (
              <>
                <hr className="border-card-foreground/20 mb-6" />
                <div className="readme-content">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {readme}
                  </ReactMarkdown>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetail;
