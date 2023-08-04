import { cn } from "@/lib/utils";

interface CustomItemProps {
  icon: any;
  className: string;
}

const CustomIcon: React.FC<CustomItemProps> = ({ icon, className }) => {
  return (
    <span
      className={cn(
        "h-8 w-8 flex items-center justify-center rounded-lg",
        className
      )}
    >
      {icon}
    </span>
  );
};

export default CustomIcon;
