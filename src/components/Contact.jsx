import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import GlassBox from "./GlassBox";

const ContactInfo = ({ icon: Icon, title, content, link }) => (
  <motion.a
    href={link}
    whileHover={{ y: -5, scale: 1.02 }}
    className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 group"
  >
    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div className="text-right">
      <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-0.5">
        {title}
      </h4>
      <p className="text-white font-black">{content}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden" dir="rtl">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              تواصل{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                معي
              </span>
            </h2>
            <div className="w-24 h-2 bg-linear-to-l from-primary via-accent to-transparent mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              هل لديك مشروع في بالك أو تريد فقط إلقاء التحية؟ يسعدني دائماً سماع
              ذلك والعمل معاً على أفكار إبداعية.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-black text-white mb-8 border-r-4 border-primary pr-4">
                معلومات التواصل
              </h3>

              <ContactInfo
                icon={Mail}
                title="البريد الإلكتروني"
                content="hello@yasser.com"
                link="mailto:hello@yasser.com"
              />
              <ContactInfo
                icon={Phone}
                title="رقم الهاتف"
                content="+966 50 000 0000"
                link="tel:+966500000000"
              />
              <ContactInfo
                icon={MapPin}
                title="الموقع"
                content="الرياض، المملكة العربية السعودية"
                link="#"
              />

              <div className="p-8 rounded-3xl bg-linear-to-br from-primary/10 to-accent/10 border border-white/5 mt-10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-accent"></div>
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-accent" />
                  <h4 className="text-white text-xl font-black">
                    لنتحدث عن فكرتك
                  </h4>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">
                  أنا متاح للمشاريع الجديدة والتعاون الإبداعي. لا تتردد في البدء
                  بمحادثة!
                </p>

                <div className="flex gap-4">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white hover:text-primary transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassBox className="p-8 md:p-12 relative group shadow-2xl overflow-hidden border-white/20">
                <div className="absolute top-0 left-0 w-48 h-48 bg-primary/10 blur-[80px] -translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/20 transition-colors"></div>

                <form
                  className="space-y-8 relative z-10"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-300 mr-2 block">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        placeholder="ادخل اسمك"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-slate-600 outline-none transition-all backdrop-blur-md hover:bg-white/10"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-300 mr-2 block">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-slate-600 outline-none transition-all backdrop-blur-md hover:bg-white/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-300 mr-2 block">
                      الرسالة
                    </label>
                    <textarea
                      rows="6"
                      placeholder="بماذا تفكر؟ أو صف مشروعك باختصار..."
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-slate-600 outline-none transition-all backdrop-blur-md resize-none hover:bg-white/10"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full relative group/btn flex items-center justify-center gap-3 py-5 bg-linear-to-r from-primary to-accent text-white font-black text-xl rounded-2xl shadow-2xl shadow-primary/30 overflow-hidden"
                  >
                    <span className="relative z-10">إرسال الرسالة</span>
                    <Send className="w-6 h-6 relative z-10 transform -rotate-180 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </motion.button>
                </form>
              </GlassBox>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
