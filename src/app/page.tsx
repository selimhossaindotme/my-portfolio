import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechToolbox } from "@/components/TechToolbox";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black"> 
    <Navbar />  
      <HeroSection />

      <AboutSection />
      
      <TechToolbox />
      
      <ProjectsSection />
      
      <EducationSection />
      
      <ContactSection />
      
      <Footer />
    </div>
  );
}
