import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroCardProps {
  title: string;
  icon: any;
  className: string;
  iconClass: string;
  section: string;
}

const HeroCard: React.FC<HeroCardProps> = ({
  title,
  icon,
  className,
  iconClass,
  section,
}) => {
  return (
    <Link href={section} className={cn("rounded-2xl w-full", className)}>
      <div
        className={cn(
          "bg-white h-9 w-9 flex justify-center items-center rounded-lg it",
          iconClass
        )}
      >
        {icon}
      </div>
      <p>{title}</p>
    </Link>
  );
};

export default HeroCard;
