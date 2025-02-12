import ProjectCard from "@/components/shared/ProjectCard";
import React from "react";

const ProjectsPage = async () => {
  const res = await fetch("http://localhost:5000/projects");
  const projects = await res.json();
  return (
    <div>
      <h1 className="text-4xl font-semibold text-sky-400 text-center py-3">
        Welcome to my project page
      </h1>
      <div className="grid grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
