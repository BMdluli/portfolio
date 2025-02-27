"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HeroCardProps {
  title: string;
  icon: any;
  className: string;
  iconClass: string;
  section: string;
  delay?: number;
}

const HeroCard: React.FC<HeroCardProps> = ({
  title,
  icon,
  className,
  iconClass,
  section,
  delay = 0,
}) => {
  return (
    <motion.a
      href={section}
      className={cn("rounded-2xl w-full flex flex-col gap-3 p-4", className)}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <div
        className={cn(
          "bg-white h-9 w-9 flex justify-center items-center rounded-lg",
          iconClass
        )}
      >
        {icon}
      </div>
      <p>{title}</p>
    </motion.a>
  );
};

export default HeroCard;
