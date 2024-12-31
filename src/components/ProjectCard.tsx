import { ReactElement } from "react";

export const ProjectCard = ({
  title,
  description,
  metrics,
  icon,
  color,
}: {
  title: string;
  description: string;
  metrics: string;
  icon: ReactElement<string, string>;
  color: string;
}) => (
  <div className="group relative bg-gray-900 rounded-xl p-6 hover:-translate-y-2 transition-all duration-300">
    <div
      className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}
    />
    <div className="relative z-10">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <p className="text-sm font-medium text-blue-400">{metrics}</p>
    </div>
  </div>
);
