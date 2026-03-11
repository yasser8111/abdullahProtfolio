import { siteData } from "../constants";
import { HashLink } from "react-router-hash-link";

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
              <li>
                <a
                  href={`https://linkedin.com/in/${siteData.socialLinks.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-linkedin w-8"></i>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://github.com/${siteData.socialLinks.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-github w-8"></i>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${siteData.socialLinks.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-instagram w-8"></i>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://twitter.com/${siteData.socialLinks.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-x-twitter w-8"></i>
                  <span>Twitter</span>
                </a>
              </li>
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
