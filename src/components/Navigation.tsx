import { FC, useEffect, useState } from "react";
import debounce from "lodash/debounce";

interface NavigationProps {
  sections: string[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollToSection: (section: string) => void;
}

export const Navigation: FC<NavigationProps> = ({
  sections,
  activeSection,
  setActiveSection,
  scrollToSection,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress calculation
  const handleScroll = debounce(() => {
    const totalScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentProgress = Math.min((window.scrollY / totalScroll) * 100, 100);
    setScrollProgress(currentProgress);
  }, 100);

  // IntersectionObserver setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, // Use viewport as root
        rootMargin: "-100px 0px 0px 0px", // Triggering the callback when the bottom of the current section enters the viewport
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, [sections, setActiveSection]);

  // Scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      handleScroll.cancel(); // Cancel any pending debounced calls
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-blue-900/10 to-black animate-gradient-shift pointer-events-none" />
      {/* Progress Bar with glowing effect */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 z-50 transition-all duration-300 shadow-glow"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 space-y-4 z-50">
        {sections.map((section) => (
          <div
            key={section}
            onClick={() => scrollToSection(section)}
            className={`group relative w-3 h-3 rounded-full cursor-pointer transition-all duration-300 
            ${activeSection === section ? "scale-125" : "hover:scale-110"}`}
          >
            <div
              className={`absolute inset-0 rounded-full ${
                activeSection === section
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"
                  : "bg-gray-500 group-hover:bg-gray-400"
              }`}
            />
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-50 blur-sm transition-opacity`}
            />
          </div>
        ))}
      </div>
    </>
  );
};
