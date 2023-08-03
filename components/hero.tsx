import { Clover, Mail, Paperclip, Sparkle, Workflow } from "lucide-react";
import HeroCard from "./hero-card";

const Hero = () => {
  return (
    <div className="mt-16">
      <h1 className="text-black font-bold dark:text-white text-3xl tracking-widest">
        Bekithemba Mdluli <br />
      </h1>

      <h2 className="font-medium text-center text-black dark:text-white text-3xl mt-3">
        Developer
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <HeroCard
          title="About"
          icon={<Sparkle />}
          className="bg-primary col-span-2 text-white flex p-3 h-[138px]"
        />

        <HeroCard
          title="Projects"
          icon={<Clover />}
          className="bg-dark-gray text-white flex flex-col justify-center items-center h-[97px]"
        />

        <HeroCard
          title="Experience"
          icon={<Workflow />}
          className="bg-secondary flex flex-col justify-center items-center h-[97px]"
        />

        <HeroCard
          title="Contact me"
          icon={<Mail />}
          className="bg-white flex gap-3 col-span-2 h-[97px] p-3"
        />

        <HeroCard
          title="Blog"
          icon={<Mail />}
          className="bg-primary text-white flex gap-3 col-span-2 h-[97px] p-3 cursor-not-allowed"
        />
      </div>
    </div>
  );
};

export default Hero;
