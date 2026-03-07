import { siteData } from "../constants";
import { HashLink } from 'react-router-hash-link';

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-[calc(100vh-72px)] w-full py-16 px-8  bg-black text-white"
    >
      <div className="container mx-auto flex flex-col justify-between">
        <div className="flex">
          <div className="flex-1">
            <h2 className="text-5xl font-medium text-white mb-5">
              /Quick links
            </h2>
            <ul>
              {siteData.navLinks.map((link) => (
                <li key={link.id}>
                  <HashLink smooth to={`/#${link.id}`} className="text-4xl text-black-400">
                    {link.title}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-5xl font-medium text-white mb-5">
              {siteData.contactSection.heading}
            </h2>
            <ul>
              <li className="text-4xl text-black-400">
                Email/{siteData.personalInfo.email}
              </li>
              <li className="text-4xl text-black-400">
                Phone/{siteData.personalInfo.phone}
              </li>
              <li className="text-4xl text-black-400">
                LinkedIn/{siteData.socialLinks.linkedin}
              </li>
              <li className="text-4xl text-black-400">
                GitHub/{siteData.socialLinks.github}
              </li>
              <li className="text-4xl text-black-400">
                Instagram/{siteData.socialLinks.instagram}
              </li>
              <li className="text-4xl text-black-400">
                Twitter/{siteData.socialLinks.twitter}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <h1 className="text-9xl font-semibold">
            {siteData.contactSection.sloganLines[0]}
            <br />
            {siteData.contactSection.sloganLines[1]}
          </h1>
          <HashLink
          smooth
          to="/#home"
           className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black text-2xl">
            <i className="fa-solid fa-caret-up"></i>
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default Contact;
