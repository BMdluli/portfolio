import { CloudLightning } from "lucide-react";
import SkillCard from "./skill-card";
import CustomIcon from "./custom-icon";

const Skills = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between dark:text-white">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <CustomIcon
          className="bg-black dark:bg-white"
          icon={<CloudLightning className="text-primary" />}
        />
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 mt-4 dark:text-white">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
};

export default Skills;
