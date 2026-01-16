import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description:
        "A brief description of the project and the core technologies used. Explain the problem solved and the value delivered.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Project Two",
      description:
        "A showcase of modern UI/UX principles applied to a real-world scenario. Focuses on responsiveness and accessibility.",
      tags: ["Tailwind", "Vite", "Framer Motion"],
      link: "#",
    },
    {
      title: "Project Three",
      description:
        "An interactive dashboard showing data visualization and real-time updates using WebSockets.",
      tags: ["React", "D3.js", "Firebase"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              <div className="h-48 bg-slate-700 flex items-center justify-center text-slate-500">
                <span>Project Preview {index + 1}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-accent bg-slate-900 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-white hover:text-accent font-medium transition-colors"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
