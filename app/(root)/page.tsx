import ContactIcons from "@/components/contact-icons";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="h-full p-4 max-w-[1440px] md:mx-auto" id="#home">
      <Hero />

      <Experience />
      <Skills />
      <Projects />
      <Footer />
      <ContactIcons />
    </main>
  );
}
