import { Briefcase } from "lucide-react";
import ExperiencCard from "./experience-card";

const Experience = () => {
  return (
    <div className="mt-4" id="experience">
      <div className="flex items-center gap-3 dark:text-white">
        <Briefcase />
        <h2>Experience</h2>
      </div>

      <div className="grid gap-2 md:grid-cols-2 mt-4">
        <ExperiencCard />
        <ExperiencCard />
      </div>
    </div>
  );
};

export default Experience;
