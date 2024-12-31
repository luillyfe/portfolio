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

  const rafRef = useRef<number>();
  const lastMousePosition = useRef({ x: 0, y: 0 });
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
      lastMousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          setMousePosition({
            x:
              (lastMousePosition.current.x / window.innerWidth - 0.5) *
              parallaxMultiplier,
            y:
              (lastMousePosition.current.y / window.innerHeight - 0.5) *
              parallaxMultiplier,
          });
          rafRef.current = undefined;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
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
