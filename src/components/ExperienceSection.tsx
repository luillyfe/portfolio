import { forwardRef } from "react";
import { ExperienceCard } from "@/components/ExperienceCard";

const experiences = [
  {
    role: "AI and Machine Learning Engineer",
    company: "Freelance",
    period: "2023 - Present",
    achievements: [
      "Architected CV AI Coach with 40% quality improvement",
      "Engineered Resume Intelligence with 35% user growth",
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
  {
    role: "Software Engineer",
    company: "Freelance",
    period: "DECEMBER 2016 - MAY 2021",
    achievements: [
      "Developed a serverless web application for a logistics firm using AWS Lambda and API Gateway, reducing operational costs by 35% and improving scalability.",
      "Implemented GraphQL API with Apollo Server, decreasing frontend-backend data transfer by 40% and accelerating development cycles by 20%.",
      "Designed and deployed a CI/CD pipeline using Jenkins and Docker, reducing deployment errors by 60% and cutting deployment time from hours to minutes.",
      "Created a real-time monitoring system using WebSockets and React, improving client response times by 25% and increasing customer satisfaction scores by 15%.",
    ],
  },
  {
    role: "Software Engineer",
    company: "UruIT",
    period: "JUNE 2014 - NOVEMBER 2016",
    achievements: [
      "Architected and implemented a modular Node.js application structure, improving code reusability by 30% and reducing development time for new features by 25%.",
      "Optimized ElasticSearch queries, resulting in a 50% reduction in search latency and a 40% increase in search accuracy for location-based services.",
      "Implemented JSON Web Token authentication, enhancing system security and reducing unauthorized access attempts by 80%.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Ceiba Software",
    period: "DECEMBER 2014 - AUGUST 2016",
    achievements: [
      "Reduced latency by 20% and increased throughput by 15% for the Risk Locator System by optimizing database queries and implementing caching strategies.",
      "Developed a real-time websocket system for risk sharing, improving data synchronization speed by 40% and enabling instantaneous updates across multiple clients.",
      "Led the implementation of Continuous Integration practices, reducing integration issues by 70% and accelerating the release cycle from bi-weekly to weekly.",
      "Designed and implemented a cross-team communication framework, improving project delivery times by 30% and reducing misalignments between business and development teams by 50%.",
    ],
  },
];

export const ExperienceSection = forwardRef<HTMLElement>((_, ref) => (
  <section
    id="experience"
    className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900"
    ref={ref}
  >
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Professional Journey
      </h2>
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  </section>
));
