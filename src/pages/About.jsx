import React from "react";
import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";
import { siteData } from "../constants";
import Badge from "../components/Badge";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container min-h-[calc(100dvh-72px)] mx-auto p-4 mt-18 md:p-6 lg:p-8 flex flex-col justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xl lg:text-2xl font-medium text-black-600 hover:text-black mb-4 lg:mb-10 transition-colors snap"
        >
          <i className="fa-solid fa-arrow-left"></i>
          Back to Home
        </Link>
        
        <h2 className="text-4xl lg:text-5xl font-medium text-black-600 mb-3 lg:mb-6">
          {siteData.aboutPage.heading}
        </h2>

        <div className="max-w-5xl mb-12 lg:mb-24 m-auto">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black-900 mb-4 lg:mb-8">
            {siteData.aboutPage.greeting}
          </h3>
          <div className="flex flex-col gap-3 lg:gap-6 text-xl lg:text-2xl text-black-600 font-normal">
            {siteData.aboutPage.paragraphs.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl lg:text-5xl font-medium text-black-600 mb-3 lg:mb-6 snap">
            {siteData.aboutPage.skillsHeading}
          </h2>

          <div className="flex flex-col gap-4 sm:gap-16 md:gap-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-16 md:gap-20">
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl text-black-900 mb-4 lg:mb-8">
                  {siteData.aboutPage.development.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {siteData.aboutPage.development.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl text-black-900 mb-4 lg:mb-8">
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
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-black-900 mb-4 lg:mb-8">
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

        <div className="mt-12 lg:mt-24">
          <h2 className="text-4xl lg:text-5xl font-medium text-black-600 mb-3 lg:mb-6 snap">
            {siteData.aboutPage.certificates.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.aboutPage.certificates.list.map((cert, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-black-100 hover:bg-black-200 transition-all h-[35vh]"
              >
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
