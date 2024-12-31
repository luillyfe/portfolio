import { useEffect, useRef, useState, useCallback } from "react";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { Footer } from "@/components/Footer";

function useSectionRefs<T extends HTMLElement>() {
  const sectionRefs = useRef<Record<string, T | null>>({});

  const setSectionRef = (sectionName: string) => (element: T | null) => {
    sectionRefs.current[sectionName] = element;
  };

  return { sectionRefs: sectionRefs.current, setSectionRef };
}

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { sectionRefs, setSectionRef } = useSectionRefs<HTMLElement>();
  const throttleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const parallaxMultiplier = 20;

  const sections = ["hero", "projects", "experience", "skills", "publications"];

  const scrollToSection = useCallback(
    (section: string) => {
      if (sectionRefs[section]) {
        sectionRefs[section]!.scrollIntoView({ behavior: "smooth" });
      }
    },
    [sectionRefs]
  );

  // Mouse parallax effect for hero section
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (throttleTimeoutRef.current) return; // Access the current value

      throttleTimeoutRef.current = setTimeout(() => {
        // Assign to current
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * parallaxMultiplier,
          y: (e.clientY / window.innerHeight - 0.5) * parallaxMultiplier,
        });
        throttleTimeoutRef.current = null; // Clear the timeout
      }, 16);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current); // Clear in cleanup
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrollToSection={scrollToSection}
      />
      <HeroSection ref={setSectionRef("hero")} mousePosition={mousePosition} />
      <ProjectsSection ref={setSectionRef("projects")} />
      <ExperienceSection ref={setSectionRef("experience")} />
      <SkillsSection ref={setSectionRef("skills")} />
      <PublicationsSection ref={setSectionRef("publications")} />
      <Footer />
    </div>
  );
};

export default Portfolio;
