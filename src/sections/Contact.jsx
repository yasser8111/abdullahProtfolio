import { siteData } from "../constants";
import { HashLink } from "react-router-hash-link";

const platformConfigs = {
  instagram: {
    label: "Instagram",
    icon: "fa-brands fa-instagram w-8",
    urlPrefix: "https://instagram.com/",
  },
  facebook: {
    label: "Facebook",
    icon: "fa-brands fa-facebook w-8",
    urlPrefix: "https://facebook.com/",
  },
  linkedin: {
    label: "LinkedIn",
    icon: "fa-brands fa-linkedin w-8",
    urlPrefix: "https://linkedin.com/in/",
  },
  github: {
    label: "GitHub",
    icon: "fa-brands fa-github w-8",
    urlPrefix: "https://github.com/",
  },
  twitter: {
    label: "Twitter",
    icon: "fa-brands fa-x-twitter w-8",
    urlPrefix: "https://twitter.com/",
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[calc(100dvh-72px)] w-full p-6 sm:p-8 pt-12 bg-black text-white flex flex-col"
    >
      <div className="container mx-auto flex-1 flex flex-col justify-between gap-10 lg:gap-0">
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-0">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-medium text-white mb-3 lg:mb-5">
              {siteData.contactSection.links}
            </h2>
            <ul className="flex flex-col gap-2 text-xl lg:text-2xl text-black-400 ">
              {siteData.links.contact.map((link) => (
                <li key={link.id}>
                  <HashLink
                    smooth
                    to={`/#${link.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {link.title}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-medium text-white mb-3 lg:mb-5">
              {siteData.contactSection.social}
            </h2>
            <ul className="flex flex-col gap-4 text-xl lg:text-2xl text-black-400">
              <li>
                <a
                  href={`mailto:${siteData.personalInfo.email}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <i className="fa-solid fa-envelope w-8"></i>
                  <span>{siteData.personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteData.personalInfo.phone}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <i className="fa-solid fa-phone w-8"></i>
                  <span>{siteData.personalInfo.phone}</span>
                </a>
              </li>
              {Object.entries(siteData.socialLinks).map(([platform, username]) => {
                const config = platformConfigs[platform];
                if (!username || !config) return null;
                const href = username.startsWith("http://") || username.startsWith("https://")
                  ? username
                  : `${config.urlPrefix}${username}`;
                return (
                  <li key={platform}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-white transition-colors"
                    >
                      <i className={config.icon}></i>
                      <span>{config.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold leading-[0.9]">
            {siteData.contactSection.sloganLines[0]}
            <br />
            {siteData.contactSection.sloganLines[1]}
          </h1>
          <HashLink
            smooth
            to="/#home"
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black text-2xl"
          >
            <i className="fa-solid fa-angle-up"></i>
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default Contact;
