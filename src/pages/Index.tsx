import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import { projects } from "@/data/projects";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const projectId = searchParams.get("project");

  const handleOpenProject = (id: string | null) => {
    if (id) {
      setSearchParams({ project: id });
    } else {
      setSearchParams({});
    }
  };

  // Scroll to projects section when a project is opened via URL
  useEffect(() => {
    if (projectId) {
      const projectsSection = document.querySelector('[data-projects-section]');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [projectId]);

  const selectedProject = projectId 
    ? projects.find(p => p.id === projectId) ?? null
    : null;

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProjectsSection 
        selectedProject={selectedProject}
        onOpenProject={handleOpenProject}
      />
    </main>
  );
};

export default Index;
