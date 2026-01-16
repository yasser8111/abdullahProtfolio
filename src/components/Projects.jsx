import React from "react";

import GlassBox from "./GlassBox";

const Projects = () => {
  const projects = [
    {
      title: "منصة التجارة الإلكترونية",
      description:
        "متجر إلكتروني متكامل يدعم الدفع اللامركزي وتجربة مستخدم سلسة وعصرية.",
      tags: ["React", "Express", "Stripe"],
      link: "#",
    },
    {
      title: "تطبيق إدارة المهام الذكي",
      description:
        "نظام متقدم لإدارة المشاريع والمهام مدعوم بالذكاء الاصطناعي لتحليل الإنتاجية.",
      tags: ["Next.js", "AI Integration", "Tailwind"],
      link: "#",
    },
    {
      title: "لوحة تحكم البيانات الضخمة",
      description:
        "لوحة معلومات تفاعلية تعرض تحليلات البيانات الحية باستخدام رسوم بيانية ديناميكية.",
      tags: ["Vue.js", "D3.js", "Firebase"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            أبرز المشاريع
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto rounded opacity-80"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GlassBox
              key={index}
              className="group hover:bg-white/5 transition-all duration-300"
            >
              <div className="h-48 bg-slate-900/50 flex items-center justify-center text-slate-500 rounded-t-2xl border-b border-white/5 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="group-hover:scale-110 transition-transform duration-500">
                  معاينة المشروع {index + 1}
                </span>
              </div>
              <div className="p-6 text-right" dir="rtl">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6 justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-cyan-200 bg-cyan-900/30 border border-cyan-500/20 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-white hover:text-cyan-300 font-medium transition-colors"
                >
                  مشاهدة التفاصيل &larr;
                </a>
              </div>
            </GlassBox>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
