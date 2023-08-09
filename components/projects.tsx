import { Clover } from "lucide-react";
import React from "react";
import ProjectCard from "./project-card";
import CustomIcon from "./custom-icon";
import projects from "@/public/data/projects";

const Projects = () => {
  return (
    <>
      <div
        className="flex items-center gap-3 dark:text-white mt-8"
        id="projects"
      >
        <CustomIcon
          className="bg-black dark:bg-white"
          icon={<Clover className="text-secondary" />}
        />
        <h2 className="font-medium ">Projects</h2>
      </div>

      <div className="space-y-4 mt-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            text={project.text}
            repo={project.repo}
            live={project.live}
            image={project.image}
            second={project.second}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
