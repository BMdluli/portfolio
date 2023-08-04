import { Clover } from "lucide-react";
import React from "react";
import ProjectCard from "./project-card";
import CustomIcon from "./custom-icon";

const Projects = () => {
  return (
    <div>
      <div className="flex items-center gap-3 text-white mt-8" id="projects">
        <CustomIcon
          className="bg-black dark:bg-white"
          icon={<Clover className="text-secondary" />}
        />
        <h2 className=" font-medium">Projects</h2>
      </div>

      <div className="space-y-4 mt-4">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
