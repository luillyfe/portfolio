import { ExternalLink, Link } from "lucide-react";
import { forwardRef } from "react";

const publications = [
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
];

export const PublicationsSection = forwardRef<HTMLElement>((_, ref) => (
  <section
    id="publications"
    ref={ref}
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
                title: "Resume Insights with LlamaIndex",
                platform: "Medium",
                link: "https://medium.com/google-cloud/resume-insights-with-llamaindex-structured-data-extraction-from-unstructured-documents-28c3ff4546a8",
              },
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
              {
                title:
                  "Securing Customer Data in the Cloud: A Multi-Layered Approach",
                platform: "Medium",
                link: "https://medium.com/google-cloud/securing-customer-data-in-the-cloud-a-multi-layered-approach-for-bean-there-brewed-that-ffca8452bf1d",
              },
            ].map((publication, index) => (
              <a
                key={index}
                href={publication.link}
                className="block group p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium mb-2">{publication.title}</h4>
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
            {publications.map((contribution, index) => (
              <a
                key={index}
                href={contribution.link}
                className="block group p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium mb-2">{contribution.title}</h4>
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
));
