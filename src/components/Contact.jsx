import React from "react";

import GlassBox from "./GlassBox";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            تواصل معنا
          </h2>
          <p className="text-lg text-slate-300">
            هل لديك مشروع في ذهنك أو تريد فقط أن تقول مرحباً؟ لا تتردد في
            التواصل معنا.
          </p>
        </div>

        <GlassBox className="max-w-lg mx-auto p-8 md:p-10">
          <form
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
            dir="rtl"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                الاسم
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/5 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-500 outline-none transition-all backdrop-blur-sm"
                placeholder="اسمك الكريم"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/5 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-500 outline-none transition-all backdrop-blur-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                الرسالة
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 bg-white/5 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-500 outline-none transition-all backdrop-blur-sm"
                placeholder="اكتب رسالتك هنا..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
            >
              إرسال الرسالة
            </button>
          </form>
        </GlassBox>
      </div>
    </section>
  );
};

export default Contact;
