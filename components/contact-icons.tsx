import { Github, Mail } from "lucide-react";
import Link from "next/link";

const ContactIcons = () => {
  return (
    <div className="fixed bottom-5 right-6 flex flex-col gap-4">
      <Link href="https://github.com/PutTheTrust">
        <Github className="bg-primary h-10 w-10 p-2 rounded-lg" />
      </Link>
      <Link href="mailto:bekithemba.mdluli.bm@gmail.com">
        <Mail className="bg-primary h-10 w-10 p-2 rounded-lg" />
      </Link>
    </div>
  );
};

export default ContactIcons;
