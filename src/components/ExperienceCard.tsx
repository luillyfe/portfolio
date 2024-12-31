import { ChevronDown } from "lucide-react";

export const ExperienceCard = ({
  role,
  company,
  period,
  achievements,
}: {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}) => (
  <div className="group relative">
    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
    <div className="pl-8">
      <h3 className="text-2xl font-semibold mb-2">{role}</h3>
      <p className="text-blue-400 mb-4">
        {company} | {period}
      </p>
      <ul className="space-y-3">
        {achievements.map((achievement: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-gray-400">
            <ChevronDown className="flex-shrink-0 mt-1" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
