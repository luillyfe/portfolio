import { Cloud, Code, Cpu } from "lucide-react";
import { forwardRef } from "react";

const skills = [
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
];

export const SkillsSection = forwardRef<HTMLElement>((_, ref) => (
  <section id="skills" className="min-h-screen py-20 bg-black" ref={ref}>
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Skills & Expertise
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors"
          >
            <div className="text-blue-400 mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
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
));
