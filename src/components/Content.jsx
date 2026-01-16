import React from "react";
import GlassBox from "./GlassBox";

function Content() {
  const items = [
    { title: "المقدمة", desc: "نبذة تعريفية ومختصرة" },
    { title: "عن الشركة", desc: "تاريخنا ورؤيتنا للمستقبل" },
    { title: "الخدمات", desc: "ما نقدمه لعملائنا من جودة" },
    { title: "المشاريع", desc: "سابقة أعمالنا وإنجازاتنا" },
    { title: "الفريق", desc: "نخبة من الخبراء والمبدعين" },
    { title: "اتصل بنا", desc: "تواصل معنا لبدء النجاح" },
  ];

  return (
    <section
      id="services"
      className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-4 inline-block">
          خدماتنا ومجالاتنا
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto rounded-full opacity-70"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {items.map((item, index) => (
          <GlassBox
            key={index}
            className="p-8 hover:bg-white/5 transition-all duration-300 group cursor-pointer hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 rounded-full bg-slate-800/50 flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-cyan-300">✦</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          </GlassBox>
        ))}
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>
    </section>
  );
}

export default Content;
