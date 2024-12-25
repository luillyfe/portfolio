import { useState, useEffect, useRef } from "react";
import {
  Mail,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  Code,
  Cloud,
  Cpu,
  Link,
} from "lucide-react";
import debounce from "lodash/debounce";
import gitHubIcon from "./assets/github-white.svg";
import linkedInIcon from "./assets/linkedin.png";
import profile from "./assets/profile.png";

const Portfolio = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = (section: string) => {
    if (sectionRefs.current[section]) {
      sectionRefs.current[section].scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  const projects = [
    {
      title: "CV AI Coach",
      description: "AI-powered resume analysis tool using Gemini 1.5 Pro",
      metrics: "40% increase in quality scores",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Resume Intelligence",
      description:
        "Quickly gain actionable insights about potential candidates",
      metrics: "35% increase in daily active users",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI-Driven Certification",
      description: "GCP Professional Data Engineer exam prep platform",
      metrics: "25% improvement in study efficiency",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const sections: string[] = [
    "hero",
    "projects",
    "experience",
    "skills",
    "publications",
  ];

  const debouncedHandleScroll = debounce(() => {
    const totalScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentProgress = Math.min((window.scrollY / totalScroll) * 100, 100); // Enforce limit of 0-100
    setScrollProgress(currentProgress);

    // Update active section using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        const newActiveSection = entries.find((entry) => entry.isIntersecting);
        if (newActiveSection && newActiveSection.target.id) {
          setActiveSection(newActiveSection.target.id);
        }
      },
      {
        root: null, // Use viewport as root
        rootMargin: "-100px 0px 0px 0px", // Triggering the callback when the bottom of the current section enters the viewport
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, 100); // Adjust debounce time as needed (ms)

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [debouncedHandleScroll]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 space-y-4 z-50">
        {["hero", "projects", "experience", "skills", "publications"].map(
          (section) => (
            <div
              key={section}
              onClick={() => scrollToSection(section)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                activeSection === section
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            />
          )
        )}
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        ref={(el) => (sectionRefs.current["hero"] = el)}
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 to-black" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/30 relative z-10">
                <img
                  src={profile}
                  alt="Fermin Blanco"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative gradient circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 z-0" />
            </div>

            {/* Content */}
            <div className="max-w-4xl text-center lg:text-left">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Fermin Blanco
              </h1>
              <h2 className="text-3xl mb-8 text-gray-300">
                AI and Cloud Engineer
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                Building the future with AI and Cloud technologies. 12+ years of
                experience crafting scalable, intelligent solutions that drive
                real business impact.
              </p>
              <div className="flex gap-6 justify-center lg:justify-start">
                <button className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full hover:opacity-90 transition-all">
                  View Projects
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-full hover:border-blue-500 transition-colors">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={(el) => (sectionRefs.current["projects"] = el)}
        className="min-h-screen py-20 bg-black"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-900 rounded-xl p-6 hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}
                />
                <div className="relative z-10">
                  <div className="mb-4">{project.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <p className="text-sm font-medium text-blue-400">
                    {project.metrics}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={(el) => (sectionRefs.current["experience"] = el)}
        className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Professional Journey
          </h2>
          <div className="space-y-12">
            {[
              {
                role: "AI and Machine Learning Engineer",
                company: "Freelance",
                period: "2023 - Present",
                achievements: [
                  "Architected CV AI Coach with 40% quality improvement",
                  "Engineered La Silla AI with 35% user growth",
                ],
              },
              {
                role: "Engineer Lead",
                company: "Streamlit",
                period: "2021 - 2022",
                achievements: [
                  "Led team of 6 engineers, 25% sprint velocity increase",
                  "3% conversion rate improvement",
                ],
              },
            ].map((experience, index) => (
              <div key={index} className="group relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                <div className="pl-8">
                  <h3 className="text-2xl font-semibold mb-2">
                    {experience.role}
                  </h3>
                  <p className="text-blue-400 mb-4">
                    {experience.company} | {experience.period}
                  </p>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-400"
                      >
                        <ChevronDown className="flex-shrink-0 mt-1" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={(el) => (sectionRefs.current["skills"] = el)}
        className="min-h-screen py-20 bg-black"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Cloud & Infrastructure",
                skills: ["AWS", "GCP", "Kubernetes", "Docker"],
                icon: <Cloud className="w-6 h-6" />,
              },
              {
                category: "AI & Machine Learning",
                skills: ["TensorFlow", "PyTorch", "NLP", "MLOps"],
                icon: <Cpu className="w-6 h-6" />,
              },
              {
                category: "Development",
                skills: ["React", "Node.js", "Go", "Python"],
                icon: <Code className="w-6 h-6" />,
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors"
              >
                <div className="text-blue-400 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & External Links */}
      <section
        id="publications"
        ref={(el) => (sectionRefs.current["publications"] = el)}
        className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Publications & Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <ExternalLink className="text-blue-400" />
                Technical Writing
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Advanced AI Techniques in Cloud Computing",
                    platform: "Medium",
                    link: "https://medium.com/@luillyfe",
                  },
                  {
                    title: "Building Scalable ML Systems",
                    platform: "Google Cloud Publications",
                    link: "#",
                  },
                ].map((publication, index) => (
                  <a
                    key={index}
                    href={publication.link}
                    className="block group p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium mb-2">
                          {publication.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {publication.platform}
                        </p>
                      </div>
                      <Link className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <ExternalLink className="text-blue-400" />
                Community Contributions
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Stack Overflow",
                    metric: "6000+ reputation",
                    link: "https://stackoverflow.com/users/2640467/luillyfe",
                  },
                  {
                    title: "Google Developers",
                    metric: "Community Lead",
                    link: "https://gdg.community.dev/gdg-cucuta/",
                  },
                  {
                    title: "Technical Blog",
                    metric: "Featured in The Startup",
                    link: "https://medium.com/@luillyfe",
                  },
                ].map((contribution, index) => (
                  <a
                    key={index}
                    href={contribution.link}
                    className="block group p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium mb-2">
                          {contribution.title}
                        </h4>
                        <p className="text-sm text-blue-400">
                          {contribution.metric}
                        </p>
                      </div>
                      <Link className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Let's Connect
              </h3>
              <p className="text-gray-400 mt-2">Open to new opportunities</p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/ferminblanco"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <img
                  src={linkedInIcon}
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://github.com/luillyfe"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <img
                  src={gitHubIcon}
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  alt="GitHub"
                />
              </a>
              <a
                href="mailto:luillyfe89@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
