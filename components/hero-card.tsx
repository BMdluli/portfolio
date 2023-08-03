import { cn } from "@/lib/utils";

interface HeroCardProps {
  title: string;
  icon: any;
  className: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, icon, className }) => {
  return (
    <div className={cn("rounded-2xl", className)}>
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default HeroCard;
