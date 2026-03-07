import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { projects, type Project } from "@/data/projects";

interface ProjectsSectionProps {
  selectedProject: Project | null;
  onOpenProject: (id: string | null) => void;
}

const ProjectsSection = ({ selectedProject, onOpenProject }: ProjectsSectionProps) => {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-24 pb-24" data-projects-section>
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold">
            projects
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => onOpenProject(project.id)}
              selectedId={selectedProject?.id ?? null}
            />
          ))}
        </div>
      </section>

      <ProjectDetail
        project={selectedProject}
        onClose={() => onOpenProject(null)}
      />
    </>
  );
};

export default ProjectsSection;
