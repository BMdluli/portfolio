import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex ">
      <Image src="/logo.svg" alt="logo" width={32} height={32} />

      <button>
        <Image src="/icon-menu.svg" alt="menu" width={32} height={32} />
      </button>
    </header>
  );
};

export default Navbar;
