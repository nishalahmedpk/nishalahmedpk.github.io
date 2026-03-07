import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  selectedId: string | null;
}

const ProjectCard = ({ project, index, onClick, selectedId }: ProjectCardProps) => {
  const isSelected = selectedId === project.id;
  const isOtherSelected = selectedId !== null && !isSelected;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      animate={
        isOtherSelected
          ? { scale: 0.9, opacity: 0, transition: { duration: 0.3 } }
          : { scale: 1, opacity: 1 }
      }
      onClick={onClick}
      className="project-card"
    >
      <h3 className="text-xl md:text-2xl font-bold font-display mb-2">
        {project.title}
      </h3>
      {project.tags && (
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-muted px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <p className="text-sm text-card-foreground/80">{project.description}</p>
    </motion.div>
  );
};

export default ProjectCard;
