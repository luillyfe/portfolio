import {
  BrainIcon,
  Cloud,
  Code,
  Cpu,
  DatabaseIcon,
  PlayCircleIcon,
} from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { forwardRef } from "react";

const projects = [
  {
    title: "CV AI Coach",
    description: "AI-powered resume analysis tool using Gemini 1.5 Pro",
    metrics: "40% increase in quality scores",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Resume Insights",
    description: "Quickly gain actionable insights about potential candidates",
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
  {
    title: "Resume Intelligence Platform With Roe AI",
    description:
      "An Multi-Agent system designed to automate resume parsing, skill extraction, and candidate-job matching through specialized AI agents. It leverages natural language processing (NLP) and machine learning to analyze and extract meaningful insights from unstructured resume data.",
    metrics:
      "Extracts key details with 95% accuracy, reduces resume screening time by 70%, supports multiple file formats (PDF, DOCX).",
    icon: <BrainIcon className="w-6 h-6" />,
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Video Streaming with Range Requests",
    description:
      "A video streaming platform using HTTP range requests. The client sends a request for a specific byte range of a video file. The server (Fastify Server) parses this range request and retrieves the corresponding chunk from storage.  Successful requests result in the server streaming 4MB chunks back to the client.",
    metrics:
      "Successful streaming of video chunks, handling of range requests, and error management for common streaming issues.",
    icon: <PlayCircleIcon className="w-6 h-6" />,
    color: "from-green-500 to-green-700",
  },
  {
    title: "Contextual Data Augmentation",
    description:
      "Empower your free-response questions with intelligent transformations using our LLM-powered pipeline. This project leverages the capabilities of Large Language Models, specifically Anthropic's Claude API, to contextually enrich free-response questions by converting them into insightful multiple-choice formats. Built with Apache Beam, the pipeline offers scalable and parallel processing for large datasets, ensuring efficient data augmentation for various educational and assessment needs.",
    metrics:
      "Number of questions augmented, Quality of generated multiple-choice options (e.g., relevance, difficulty), Processing time for large question sets, Successful integration with Firestore.",
    icon: <DatabaseIcon className="w-6 h-6" />,
    color: "from-purple-500 to-purple-700",
  },
];

export const ProjectsSection = forwardRef<HTMLElement>((_, ref) => (
  <section id="projects" className="min-h-screen py-20 bg-black" ref={ref}>
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  </section>
));
