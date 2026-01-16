import React from "react";
import GlassBox from "./GlassBox";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Visual/Image Placeholder */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <GlassBox className="aspect-square w-full max-w-md mx-auto overflow-hidden border-white/20 p-2">
              <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden group">
                {/* Abstract Visual Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
                <div className="text-8xl filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-50 group-hover:opacity-100 scale-90 group-hover:scale-100">
                  👤
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-border rounded-lg bg-black/40 backdrop-blur-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-sm font-medium text-white text-center">
                    Software Engineer & UI/UX Expert
                  </p>
                </div>
              </div>
            </GlassBox>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-0 lg:-right-6">
              <GlassBox className="px-6 py-4 border-primary/50 bg-primary/5">
                <span className="block text-3xl font-bold text-white">5+</span>
                <span className="text-xs text-primary font-bold uppercase tracking-wider">
                  Years Experience
                </span>
              </GlassBox>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-500">
                About Me
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl italic">
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

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-sm text-slate-500">Projects Finished</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-white">20+</p>
                <p className="text-sm text-slate-500">Happy Clients</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-sm text-slate-500">Tech Stacks</p>
              </div>
            </div>

            <div className="pt-8">
              <button className="relative group p-px font-semibold rounded-full bg-gradient-to-r from-primary to-accent transition-all hover:shadow-[0_0_20px_rgba(105,201,243,0.4)]">
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
