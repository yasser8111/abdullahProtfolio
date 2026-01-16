import React from "react";
import GlassBox from "./GlassBox";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 min-h-screen flex items-center justify-center mb-20"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <GlassBox className="p-10 md:p-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            من نحن
          </h2>
          <div
            className="space-y-6 text-lg text-slate-300 leading-relaxed text-center"
            dir="rtl"
          >
            <p>
              نحن فريق متكامل من المطورين والمصممين الشغوفين ببناء تجارب رقمية
              استثنائية. نؤمن بأن التصميم الجيد لا يقتصر فقط على الشكل الجمالي،
              بل يتعداه ليشمل سهولة الاستخدام وكفاءة الأداء.
            </p>
            <p>
              هدفنا هو تحويل الأفكار المعقدة إلى حلول برمجية بسيطة وأنيقة تساعد
              عملاءنا على النمو والنجاح في عالم رقمي متسارع.
            </p>
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm transition-all text-white font-medium">
              اقرأ المزيد
            </button>
          </div>
        </GlassBox>
      </div>
    </section>
  );
};

export default About;
