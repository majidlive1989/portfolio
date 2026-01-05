import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CertificationsSection from "@/components/sections/Certifications";
import ContactSection from "@/components/sections/Contact";
import EducationSection from "@/components/sections/Education";
import ExperienceSection from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
