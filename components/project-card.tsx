import Image from "next/image";
import Link from "next/link";
import { Clover } from "lucide-react";
import CustomIcon from "./custom-icon";

const ProjectCard = () => {
  return (
    <div className="bg-light-gray dark:bg-dark-gray p-4 rounded-2xl md:flex md:flex-row-reverse gap-4">
      <Image
        className="w-full rounded-2xl md:w-1/2"
        src="/molomonr.png"
        alt="Molomonr"
        width={1920}
        height={1080}
      />

      <div className="md:flex md:flex-col md:w-1/2 md:justify-between">
        <div className="flex justify-between mt-4">
          <div className="text-white flex items-center gap-3">
            <CustomIcon
              className=""
              icon={<Clover className="text-secondary" />}
            />
            <h3>MOLOMO NR</h3>
          </div>

          <p className="dark: text-white">2022</p>
        </div>

        <p className=" dark:text-light-gray mt-4 text-sm">
          Molomo Nr is a steel company. The company specializes in the
          manufacturing of racking, mezzanine, shelving, and storage solutions
          that meet the needs of businesses in various industries.
        </p>

        <div className="text-secondary flex justify-between mt-4 md:items-end">
          <Link href="/" className="cursor-not-allowed">
            Private Repo
          </Link>
          <Link href="https:molomonr.co.za">View site</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
