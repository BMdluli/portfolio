import Skill from "./skill";

interface ExperienceProps {
  date: string;
  role: string;
  text: string;
  technologies: string[];
}

const ExperiencCard: React.FC<ExperienceProps> = ({
  date,
  role,
  text,
  technologies,
}) => {
  return (
    <div className="bg-light-gray dark:bg-dark-gray p-4 rounded-2xl">
      <div>
        <p className="text-dark-gray dark:text-light-gray text-sm">{date}</p>
        <h3 className="dark:text-white mt-3 font-bold">{role}</h3>
      </div>
      <p className="text-dark-gray dark:text-light-gray mt-4 text-sm">{text}</p>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {technologies.map((tech, idx) => (
          <Skill key={idx} skill={tech} />
        ))}
      </div>
    </div>
  );
};

export default ExperiencCard;
