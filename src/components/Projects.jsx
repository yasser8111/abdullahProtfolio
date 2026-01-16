import React from "react";

import GlassBox from "./GlassBox";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A comprehensive online store supporting decentralized payments and a modern user experience.",
      tags: ["React", "Express", "Stripe"],
      link: "#",
    },
    {
      title: "Smart Task Manager",
      description:
        "An advanced project management system powered by AI for productivity analysis.",
      tags: ["Next.js", "AI Integration", "Tailwind"],
      link: "#",
    },
    {
      title: "Big Data Dashboard",
      description:
        "An interactive dashboard displaying live data analytics with dynamic charts.",
      tags: ["Vue.js", "D3.js", "Firebase"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-80"></div>
          <p className="text-slate-400 max-w-xl mx-auto">
            A selection of my recent work, built with modern technologies and a
            focus on scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <GlassBox
              key={index}
              className="group hover:bg-white/5 transition-all duration-500 flex flex-col h-full"
            >
              <div className="h-56 bg-slate-900/80 flex items-center justify-center text-slate-500 rounded-t-2xl border-b border-white/5 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-4xl filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500">
                  🚀
                </div>
                <div className="absolute top-4 right-4 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                  <span className="bg-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 backdrop-blur-md uppercase tracking-tighter">
                    Live Demo
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-white font-bold group/link transition-all"
                  >
                    <span>View Project</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </GlassBox>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
