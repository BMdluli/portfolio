"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={cn(
        isOpen
          ? "fixed inset-0 bg-black dark:bg-white text-white dark:text-black h-[30%]"
          : "hidden"
      )}
    >
      <X
        className="text-white dark:text-black h-10 w-10 ml-auto mt-4"
        onClick={() => setIsOpen(false)}
      />

      <ul className="font-semibold space-y-4 text-lg ml-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>

        <li>
          <Link href="mailto:bekithemba.mdluli.bm@gmail.com">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
