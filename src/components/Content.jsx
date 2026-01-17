import React from "react";
import GlassBox from "./GlassBox";

function Content() {
  const items = [
    {
      title: "Introduction",
      desc: "The beginning of my journey toward digital excellence.",
    },
    { title: "About Me", desc: "My vision and values that drive me forward." },
    {
      title: "Services",
      desc: "Innovative solutions designed for your business growth.",
    },
    {
      title: "Projects",
      desc: "A showcase of our most prominent past achievements.",
    },
    {
      title: "Team",
      desc: "Creative experts working with passion for your success.",
    },
    { title: "Contact Us", desc: "We are here to answer all your inquiries." },
  ];

  return (
    <section id="services" className="relative py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {items.map((item, index) => (
          <GlassBox
            key={index}
            className="p-10 hover:bg-white/10 transition-all duration-500 group cursor-pointer overflow-hidden relative"
          >
            <div className="flex flex-col items-start text-left relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                {item.desc}
              </p>
            </div>

            <span className="absolute -bottom-12 -right-6 text-9xl font-black text-white/[0.03] group-hover:text-white/[0.07] transition-colors select-none">
              {index + 1}
            </span>
          </GlassBox>
        ))}
      </div>

      <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-100 w-96 h-96 bg-accent/30 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}

export default Content;
