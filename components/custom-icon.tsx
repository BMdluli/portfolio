interface CustomItemProps {
  icon: any;
}

const CustomIcon: React.FC<CustomItemProps> = ({ icon }) => {
  return (
    <span className="bg-purple-500 h-8 w-8 flex flex-items-center justify-center">
      {icon}
    </span>
  );
};

export default CustomIcon;
