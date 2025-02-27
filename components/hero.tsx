import { Clover, Mail, Paperclip, Sparkle, Workflow } from "lucide-react";
import HeroCard from "./hero-card";
import Navbar from "./navbar";
import Link from "next/link";
import WiggleText from "./wiggle-text";

const Hero = () => {
  let nameStyle =
    "text-black font-bold dark:text-white text-3xl md:text-6xl tracking-widest mt-16 md:mt-36";
  let titleStyle =
    "font-medium text-black dark:text-white text-3xl md:text-6xl";
  return (
    <div className="h-[90vh]">
      <Navbar />
      {/* <h1 className="text-black font-bold dark:text-white text-3xl md:text-6xl text-center tracking-widest mt-16 md:mt-36">
        Bekithemba Mdluli <br />
      </h1> */}

      <div>
        <div className="flex gap-2 md:gap-4 justify-center ">
          <WiggleText text="Bekithemba" classes={nameStyle} />
          <WiggleText text="Mdluli" classes={nameStyle} />
        </div>

        <div className="flex gap-2 md:gap-4 justify-center">
          <WiggleText text="Developer" classes={titleStyle} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:h-[345px] w-full mt-4 md:mt-16">
        <div className="md:w-[42%]">
          <HeroCard
            section="#experience"
            title="About"
            icon={<Sparkle className="text-black" />}
            className="bg-primary text-white flex gap-3 p-3 h-[138px] md:h-full "
            iconClass="bg-white"
          />
        </div>

        <div className="md:flex md:w-[58%] md:gap-4">
          <div className="flex md:flex-col justify-between gap-4 md:w-[60%]">
            <HeroCard
              section="#projects"
              title="Projects"
              icon={<Clover className="text-black" />}
              className="bg-dark-gray text-white flex flex-col md:flex-row justify-center md:justify-start md:p-3 items-center md:items-start md:gap-3 h-[99px] md:h-full"
              iconClass="bg-white"
              delay={0.2}
            />
            <HeroCard
              section="#experience"
              title="Experience"
              icon={<Workflow className="text-white" />}
              className="bg-secondary flex flex-col md:flex-row justify-center md:justify-start md:p-3 items-center md:items-start  md:gap-3 h-[99px] md:h-full"
              iconClass="bg-black"
              delay={0.3}
            />
          </div>

          <div className="flex flex-col gap-4 mt-4 md:mt-0 md:w-[40%] ">
            <HeroCard
              section="mailto:bekithemba.mdluli.bm@gmail.com"
              title="Contact me"
              icon={<Mail className="text-white" />}
              className="bg-light-gray text-black flex gap-3  h-[98px] p-3 md:h-full"
              iconClass="bg-black"
              delay={0.4}
            />

            <HeroCard
              section="/"
              title="Blog"
              icon={<Paperclip className="text-black" />}
              className="bg-primary text-white flex gap-3  h-[99px] p-3 cursor-not-allowed md:h-full"
              iconClass="bg-white"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
