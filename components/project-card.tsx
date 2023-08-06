import Image from "next/image";
import Link from "next/link";
import { Clover } from "lucide-react";
import CustomIcon from "./custom-icon";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  text: string;
  repo: string;
  live: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  text,
  repo,
  live,
  image,
}) => {
  return (
    <div className="bg-light-gray dark:bg-dark-gray p-4 rounded-2xl md:flex md:flex-row-reverse gap-4">
      <Image
        className="w-full rounded-2xl md:w-1/2 object-cover"
        src={image}
        alt={title}
        width={500}
        height={50}
      />

      <div className="md:flex md:flex-col md:w-1/2 md:justify-between">
        <div className="flex justify-between mt-4">
          <div className="dark:text-white flex items-center gap-3">
            <CustomIcon
              className=""
              icon={<Clover className="text-secondary" />}
            />
            <h3>{title}</h3>
          </div>

          {/* <p className="dark: text-white">2022</p> */}
        </div>

        <p className=" dark:text-light-gray mt-4 text-sm">{text}</p>

        <div className="text-secondary flex justify-between mt-4 md:items-end">
          <Link
            href={repo === "" ? "/" : repo}
            className={cn(repo === "" ? "cursor-not-allowed" : "")}
          >
            {repo === "" ? "Private Repo" : "Github"}
          </Link>
          <Link
            href={live}
            className={cn(live === "" ? "cursor-not-allowed" : "")}
          >
            {live === "" ? "SOON" : "View site"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
