import Image from "next/image";

interface SkillCardProps {
  text: string;
  image: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ text, image }) => {
  return (
    <div className="flex gap-3 items-center font-semibold bg-light-gray dark:bg-dark-gray p-3 rounded-2xl">
      <Image src={image} alt="react" width={28} height={28} />
      <p>{text}</p>
    </div>
  );
};

export default SkillCard;
