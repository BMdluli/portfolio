import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center text-white text-[8px] md:text-base">
      <Image src="/logo.svg" alt="logo" width={36} height={36} />
      <p>Copyright 2023 © Bekithemba Mdluli</p>
      <p>
        Designed by
        <Link
          className="text-secondary"
          href="https://www.behance.net/annkorshakova24"
          target="_blank"
        >
          Anna K.
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
