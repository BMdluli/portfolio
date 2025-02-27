"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }} // Start above screen
          animate={{ y: "0%", opacity: 1 }} // Slide into place
          exit={{ y: "-100%", opacity: 0 }} // Slide out when closed
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-black dark:bg-white text-white dark:text-black h-[30%] shadow-lg"
        >
          <X
            className="text-white dark:text-black h-10 w-10 ml-auto mt-4 mr-4 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />

          <ul className="font-semibold space-y-4 text-lg ml-4 mt-8">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:bekithemba.mdluli.bm@gmail.com">Contact</a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
