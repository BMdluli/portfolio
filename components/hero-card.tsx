import { cn } from "@/lib/utils";

interface HeroCardProps {
  title: string;
  icon: any;
  className: string;
  iconClass: string;
}

const HeroCard: React.FC<HeroCardProps> = ({
  title,
  icon,
  className,
  iconClass,
}) => {
  return (
    <div className={cn("rounded-2xl w-full", className)}>
      <div
        className={cn(
          "bg-white h-9 w-9 flex justify-center items-center rounded-lg it",
          iconClass
        )}
      >
        {icon}
      </div>
      <p>{title}</p>
    </div>
  );
};

export default HeroCard;
