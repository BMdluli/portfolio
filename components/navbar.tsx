"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Menu, MoonStar, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { setTheme } = useTheme();
  const [isSelected, setSelected] = useState(false);
  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === `/`,
    },
    {
      href: "/#projects",
      label: "Projects",
      active: pathname === `#projects`,
    },
    {
      href: "/#contact",
      label: "Contact",
      active: pathname === `#contact`,
    },
  ];

  // setTheme("light");

  // const handleChange = () => {
  //   setSelected(!isSelected);

  //   if (isSelected) {
  //     setTheme("light");
  //   } else {
  //     setTheme("dark");
  //   }

  //   console.log(isSelected);
  // };

  return (
    <header className="flex bg-light-gray dark:bg-dark-gray justify-between items-center px-3 md:px-5 h-[45px] md:h-14 rounded-full">
      <Image
        className="md:h-10 md:w-10"
        src="/logo.svg"
        alt="logo"
        width={36}
        height={36}
      />

      <nav className="hidden md:block text-black dark:text-white ">
        <ul className="flex gap-14">
          {routes.map((route) => (
            <Link
              className={cn(
                route.active ? "text-secondary" : "text-black dark:text-white"
              )}
              key={route.label}
              href={route.href}
            >
              {route.label}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <MoonStar className="text-black dark:text-white" />

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={isSelected}
            onChange={() => {
              setSelected(!isSelected);
              isSelected ? setTheme("dark") : setTheme("light");
            }}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>

        <Sun className="text-black dark:text-white" />
      </div>

      <button className="md:hidden">
        <Menu className="text-white dark:text-primary" />
      </button>
    </header>
  );
};

export default Navbar;
