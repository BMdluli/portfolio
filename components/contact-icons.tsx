import { Github, Mail } from "lucide-react";
import Link from "next/link";

const ContactIcons = () => {
  return (
    <div className="fixed bottom-5 right-6 flex flex-col gap-4">
      <a href="https://github.com/PutTheTrust">
        <Github className="bg-secondary h-10 w-10 p-2 rounded-lg" />
      </a>
      <a href="mailto:bekithemba.mdluli.bm@gmail.com">
        <Mail className="bg-secondary h-10 w-10 p-2 rounded-lg" />
      </a>
    </div>
  );
};

export default ContactIcons;
