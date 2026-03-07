import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { projects, type Project } from "@/data/projects";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "start 0.3"],
  });

  const arrowOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const arrowY = useTransform(scrollYProgress, [0, 0.5], [0, -20]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);

  return (
    <>
      {/* Arrow indicator at bottom of hero */}
      <motion.div
        style={{ opacity: arrowOpacity, y: arrowY }}
        className="flex flex-col items-center pb-8"
      >
        <ChevronDown size={28} className="text-primary animate-bounce" />
        <span className="section-title text-lg mt-1">projects</span>
      </motion.div>

      <section ref={sectionRef} className="px-6 md:px-12 lg:px-24 pb-24">
        <motion.div
          ref={titleRef}
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold">
            projects
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
              selectedId={selectedProject?.id ?? null}
            />
          ))}
        </div>
      </section>

      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default ProjectsSection;
