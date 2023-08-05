interface SkillProps {
  skill: string;
}

const Skill: React.FC<SkillProps> = ({ skill }) => {
  return (
    <span className="bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary px-2  py-1 font-medium rounded-full">
      {skill}
    </span>
  );
};

export default Skill;
