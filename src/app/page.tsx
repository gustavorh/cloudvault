import Navigation from "@/components/layout/Navigation";
import BackgroundParticles from "@/components/ui/BackgroundParticles";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <BackgroundParticles />
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
