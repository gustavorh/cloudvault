import Navigation from "@/components/layout/Navigation";
import BackgroundParticles from "@/components/ui/BackgroundParticles";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <BackgroundParticles />
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
