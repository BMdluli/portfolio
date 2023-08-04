import Image from "next/image";
const SkillCard = () => {
  return (
    <div className="flex gap-3 items-center font-semibold bg-light-gray dark:bg-dark-gray p-3 rounded-2xl">
      <Image src="/icon-react.svg" alt="react" width={28} height={28} />
      <p>React</p>
    </div>
  );
};

export default SkillCard;
