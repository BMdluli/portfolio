import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black h-full p-4" id="#home">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}
