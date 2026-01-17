import React from "react";
import GlassBox from "./GlassBox";
import Grids from "./grids";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 min-h-screen flex items-center justify-center "
    >
      <Grids side="right" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Visual/Image Placeholder */}
          <div className="relative group">
            <GlassBox className="aspect-square w-full max-w-md mx-auto overflow-hidden border-white/20 p-2"></GlassBox>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-0 lg:-right-6">
              <GlassBox className="px-6 py-4 border-primary/50 bg-primary/5">
                <span className="block text-3xl font-bold text-white">5+</span>
                <span className="text-xs text-accent font-bold uppercase tracking-wider">
                  Years Experience
                </span>
              </GlassBox>
            </div>

            <div className="absolute top-20 -left-6 md:left-0 lg:-left-6">
              <GlassBox className="px-6 py-4 border-primary/50 bg-primary/5">
                <span className="block text-3xl font-bold text-white">50+</span>
                <span className="text-xs text-accent font-bold uppercase tracking-wider">
                  Projects Completed
                </span>
              </GlassBox>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl ">
              "Focusing on crafting seamless digital experiences that combine
              innovative code with stunning visual design."
            </p>

            <div className="space-y-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
              <p>
                Hello! I'm a passionate developer dedicated to building
                high-performance web applications. My journey is fueled by a
                relentless curiosity and a drive to create solutions that are as
                beautiful as they are functional.
              </p>
              <p>
                Specializing in React and modern CSS architectures, I transform
                complex requirements into intuitive user interfaces. I believe
                every pixel should serve a purpose and every interaction should
                feel natural.
              </p>
            </div>

            <div className="pt-8">
              <button className="cursor-pointer relative group p-px font-semibold rounded-full bg-gradient-to-r from-primary to-accent transition-all hover:shadow-[0_0_20px_rgba(105,201,243,0.4)]">
                <div className="px-10 py-4 bg-slate-950 rounded-full group-hover:bg-transparent transition-all duration-300">
                  <span className="text-white group-hover:text-black transition-colors">
                    Download Résumé
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
