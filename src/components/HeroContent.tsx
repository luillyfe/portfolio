import { ArrowRight } from "lucide-react";

export const HeroContent = () => (
  <div className="max-w-4xl text-center lg:text-left">
    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient">
      Fermin Blanco
    </h1>
    <h2 className="text-3xl mb-8 text-gray-300 transition-all duration-300 hover:text-blue-400">
      AI and Cloud Engineer
    </h2>
    <p className="text-xl text-gray-400 mb-12 max-w-2xl transition-all duration-300 hover:text-gray-300">
      Building the future with AI and Cloud technologies. 12+ years of
      experience crafting scalable, intelligent solutions that drive real
      business impact.
    </p>
    <div className="flex gap-6 justify-center lg:justify-start">
      <a
        href="https://github.com/luillyfe"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full overflow-hidden transition-all duration-300 hover:shadow-glow"
      >
        <span className="relative z-10 flex items-center gap-2">
          View Projects
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
      <a
        href="https://linkedin.com/in/ferminblanco"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-full hover:border-blue-500 transition-all duration-300 hover:shadow-glow"
      >
        Get in Touch
        <div className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 animate-ping" />
      </a>
    </div>
  </div>
);
