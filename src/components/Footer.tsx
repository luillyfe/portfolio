import { Mail } from "lucide-react";
import gitHubIcon from "@/assets/github-white.svg";
import linkedInIcon from "@/assets/linkedin.png";

export const Footer = () => (
  <footer className="bg-gray-900 py-12 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Let's Connect
          </h3>
          <p className="text-gray-400 mt-2 hover:text-gray-300 transition-colors">
            Open to new opportunities
          </p>
        </div>
        <div className="flex gap-6">
          {[
            {
              icon: linkedInIcon,
              href: "https://linkedin.com/in/ferminblanco",
              alt: "LinkedIn",
            },
            {
              icon: gitHubIcon,
              href: "https://github.com/luillyfe",
              alt: "GitHub",
            },
            {
              href: "mailto:luillyfe89@gmail.com",
              component: Mail,
              alt: "Email",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="group relative p-2 hover:scale-110 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity" />
              {social.component ? (
                <social.component className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
              ) : (
                <img
                  src={social.icon}
                  className="w-6 h-6 transition-transform group-hover:scale-110"
                  width={24}
                  height={24}
                  alt={social.alt}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
