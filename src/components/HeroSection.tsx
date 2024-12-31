import { forwardRef } from "react";
import { ProfileImage } from "@/components/ProfileImage";
import { HeroContent } from "@/components/HeroContent";

interface HeroSectionProps {
  mousePosition: { x: number; y: number };
}

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ mousePosition }, ref) => {
    return (
      <section
        id="hero"
        className="min-h-screen flex items-center relative overflow-hidden"
        ref={ref}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div
            className="flex flex-col lg:flex-row items-center lg:items-start gap-12"
            style={{
              transform: `translate3d(${mousePosition.x}px, ${
                mousePosition.y
              }px, 0) 
                         rotateX(${mousePosition.y * 0.1}deg) 
                         rotateY(${mousePosition.x * 0.1}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <ProfileImage />
            <HeroContent />
          </div>
        </div>
      </section>
    );
  }
);
