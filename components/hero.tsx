import { Clover, Mail, Paperclip, Sparkle, Workflow } from "lucide-react";
import HeroCard from "./hero-card";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <h1 className="text-black font-bold dark:text-white text-3xl md:text-6xl md:text-center tracking-widest mt-16">
        Bekithemba Mdluli <br />
      </h1>

      <h2 className="font-medium text-center text-black dark:text-white text-3xl md:text-6xl mt-3">
        Frontend Developer
      </h2>

      <div className="flex flex-col md:flex-row gap-4 md:h-[345px] w-full mt-4">
        <div className="md:w-[42%]">
          <HeroCard
            title="About"
            icon={<Sparkle className="text-black" />}
            className="bg-primary text-white flex gap-3 p-3 h-[138px] md:h-full "
            iconClass="bg-white"
          />
        </div>

        <div className="md:flex md:w-[58%] md:gap-4">
          <div className="flex md:flex-col justify-between gap-4 md:w-[60%]">
            <HeroCard
              title="Projects"
              icon={<Clover className="text-black" />}
              className="bg-dark-gray text-white flex md:flex-row justify-center md:justify-start md:p-3 items-center md:items-start md:gap-3 h-[99px] md:h-full"
              iconClass="bg-white"
            />

            <HeroCard
              title="Experience"
              icon={<Workflow className="text-white" />}
              className="bg-secondary flex flex-col md:flex-row justify-center md:justify-start md:p-3 items-center md:items-start  md:gap-3 h-[99px] md:h-full"
              iconClass="bg-black"
            />
          </div>

          <div className="flex flex-col gap-4 mt-4 md:mt-0 md:w-[40%] ">
            <HeroCard
              title="Contact me"
              icon={<Mail className="text-white" />}
              className="bg-light-gray text-black flex gap-3  h-[98px] p-3 md:h-full"
              iconClass="bg-black"
            />

            <HeroCard
              title="Blog"
              icon={<Paperclip className="text-black" />}
              className="bg-primary text-white flex gap-3  h-[99px] p-3 cursor-not-allowed md:h-full"
              iconClass="bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
