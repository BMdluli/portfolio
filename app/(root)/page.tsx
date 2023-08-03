import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black h-full p-4" id="#home">
      <Navbar />
      <Hero />
    </main>
  );
}
