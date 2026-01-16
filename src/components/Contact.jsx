import React from "react";

import GlassBox from "./GlassBox";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Get in Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full opacity-80"></div>
          <p className="text-lg text-slate-400">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </div>

        <GlassBox className="max-w-xl mx-auto p-10 md:p-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[inherit] blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <form
            className="space-y-8 relative z-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-bold text-slate-400 uppercase tracking-widest ml-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-slate-600 outline-none transition-all backdrop-blur-md"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-slate-400 uppercase tracking-widest ml-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-slate-600 outline-none transition-all backdrop-blur-md"
                placeholder="name@example.com"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-bold text-slate-400 uppercase tracking-widest ml-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-slate-600 outline-none transition-all backdrop-blur-md resize-none"
                placeholder="What are you thinking about?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full group/btn relative p-px font-bold rounded-xl bg-gradient-to-r from-primary to-accent overflow-hidden shadow-lg shadow-primary/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="py-4 bg-slate-950 rounded-[inherit] group-hover/btn:bg-transparent transition-all duration-300">
                <span className="text-white group-hover/btn:text-black transition-colors">
                  Send Message
                </span>
              </div>
            </button>
          </form>
        </GlassBox>
      </div>
    </section>
  );
};

export default Contact;
