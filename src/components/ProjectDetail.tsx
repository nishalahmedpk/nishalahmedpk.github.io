import { motion, AnimatePresence } from "framer-motion";
import { X, Github } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
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
              <div className="flex items-center gap-3">
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

            {project.readme && (
              <>
                <hr className="border-card-foreground/20 mb-6" />
                <div className="readme-content">
                  <ReactMarkdown>{project.readme}</ReactMarkdown>
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
