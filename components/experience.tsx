import { Briefcase } from "lucide-react";
import ExperiencCard from "./experience-card";
import CustomIcon from "./custom-icon";

const Experience = () => {
  return (
    <div className="mt-4" id="experience">
      <div className="flex items-center gap-3 dark:text-white">
        <CustomIcon
          className="bg-primary"
          icon={<Briefcase className="text-secondary" />}
        />
        <h2 className="font-medium">Experience</h2>
      </div>

      <div className="grid gap-2 md:grid-cols-2 mt-4">
        <ExperiencCard />
        <ExperiencCard />
      </div>
    </div>
  );
};

export default Experience;
