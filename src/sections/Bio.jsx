import React from "react";
import Button from "../components/Button";
import { siteData } from "../constants";

const Bio = () => {
  return (
    <section
      id="bio"
      className="container h-[calc(100vh-72px)] mx-auto px-8 flex flex-col justify-center gap-8"
    >
      <h2 className="text-5xl font-medium text-black-600">
        {siteData.bioSection.heading}
      </h2>

      <div className="snap-center">
        <div className="flex gap-15 max-w-7xl mx-auto items-center">
          <div className="w-1/2 h-100 rounded-3xl bg-black-100"></div>
          <div className="w-1/2 flex flex-col gap-4">
            <h3 className="text-5xl font-medium">
              {siteData.bioSection.greeting}
            </h3>

            <p className="text-2xl text-black-600">
              {siteData.bioSection.description}
            </p>

            <div className="flex gap-3">
              <Button variant="primary">
                {siteData.bioSection.buttons.resume}
              </Button>
              <Button variant="outline">
                {siteData.bioSection.buttons.about}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* <h2 className="text-5xl font-medium text-black-600">/Skills</h2>

      <div className="flex gap-30">
        <div>
          <h3 className="text-4xl text-black-600 mb-2">Development</h3>
          <div className="flex flex-wrap gap-3">
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              HTML5
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              CSS3
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              JavaScript
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              React
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              Next.js
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              Tailwind CSS
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              Responsive Design
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              Git & GitHub
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              REST APIs
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              Firebase
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-4xl text-black-600 mb-2">Design</h3>
          <div className="flex flex-wrap gap-3">
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              Figma
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              UI Design
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              UX Principles
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              Wireframing
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              Prototyping
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              Typography
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              Design Systems
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              User Research
            </span>
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              Color Theory
            </span>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Bio;
