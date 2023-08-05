import { Briefcase } from "lucide-react";
import ExperiencCard from "./experience-card";
import CustomIcon from "./custom-icon";
import experience from "@/public/data/experience";

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
        {experience.map((xp) => (
          <ExperiencCard
            date={xp.date}
            role={xp.role}
            text={xp.text}
            technologies={xp.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
