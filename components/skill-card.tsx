import Image from "next/image";

interface SkillCardProps {
  text: string;
  image: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ text, image }) => {
  return (
    <div className="flex gap-3 items-center font-semibold bg-light-gray dark:bg-dark-gray p-3 rounded-2xl">
      <div className=" dark:bg-white p-1 rounded-lg">
        <Image
          className="icons"
          src={image}
          alt="react"
          width={28}
          height={28}
        />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default SkillCard;
