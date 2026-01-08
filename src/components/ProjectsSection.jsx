import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Car Detailing Landing Page",
    description: "A beautiful landing page app using Wordpress and Elementor.",
    image: "/screencapture-dev-brazilian-touch-pantheonsite-io-2025-12-29-19_24_24.png",
    tags: ["WordPress", "Elementor", "BitForm"],
    demoUrl: "https://dev-brazilian-touch.pantheonsite.io/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Coding Academy website",
    description:
      "This project is a website developed using React for functionality and Tailwind CSS for responsive and modern styling.",
    image: "/screencapture-larva-academy-vercel-app-2025-12-29-19_42_48.png",
    tags: ["React", "Tailwind", "Node.js"],
    demoUrl: "https://larva-academy.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Electrician website",
    description:
      "The website was custom-built using modern web technologies to ensure fast performance, clean design, and full responsiveness.",
    image: "/screencapture-johnshopifyexpert0-wixsite-electricity-store-2026-01-08-21_12_23.png",
    tags: ["Wix", "Landing Page",],
    demoUrl: "https://johnshopifyexpert0.wixsite.com/electricity-store",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Wucares11"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
