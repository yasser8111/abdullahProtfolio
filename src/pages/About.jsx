import React from "react";
import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";
import { siteData } from "../constants";
import Badge from "../components/Badge";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8 pt-32 pb-16 min-h-screen">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-2xl font-medium text-black-600 hover:text-black mb-10 transition-colors snap"
        >
          <i className="fa-solid fa-arrow-left "></i>
          Back to Home
        </Link>
        <h2 className="text-[52px] font-medium text-black-900 mb-16">
          {siteData.aboutPage.heading}
        </h2>

        <div className="max-w-5xl mb-24 m-auto">
          <h3 className="text-[44px] font-medium text-black-900 mb-8 tracking-tight">
            {siteData.aboutPage.greeting}
          </h3>
          <div className="flex flex-col gap-6 text-[22px] leading-[1.6] text-black-600 font-normal ">
            {siteData.aboutPage.paragraphs.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[52px] font-medium text-black-900 mb-16 snap">
            {siteData.aboutPage.skillsHeading}
          </h2>

          <div className="flex flex-col gap-16 md:gap-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-30">
              <div>
                <h3 className="text-4xl text-black-800 mb-6 font-normal">
                  {siteData.aboutPage.development.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {siteData.aboutPage.development.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-4xl text-black-800 mb-6 font-normal">
                  {siteData.aboutPage.design.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {siteData.aboutPage.design.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-4xl text-black-800 mb-6 font-normal">
                {siteData.aboutPage.ai.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {siteData.aboutPage.ai.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-[52px] font-medium text-black-900 mb-16 snap">
            {siteData.aboutPage.certificates.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.aboutPage.certificates.list.map((cert, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-black-100 hover:bg-black-200 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-black-500 font-medium text-xl">
                    {cert.year}
                  </span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square text-black-400"></i>
                  </a>
                </div>
                <h4 className="text-2xl font-medium text-black-900 mb-2">
                  {cert.name}
                </h4>
                <p className="text-xl text-black-600 font-normal">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
