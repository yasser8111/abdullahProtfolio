import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-300">
            Have a project in mind or just want to say hi? Feel free to reach
            out.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-slate-900 p-8 rounded-2xl shadow-xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-slate-500 outline-none transition-all"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-slate-500 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-slate-500 outline-none transition-all"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-sky-300 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
