import { Clover } from "lucide-react";
import React from "react";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <div>
      <div className="flex items-center gap-3 text-white">
        <Clover />
        <h2 className=" text-2xl font-semibold">Projects</h2>
      </div>

      <div className="space-y-4">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
