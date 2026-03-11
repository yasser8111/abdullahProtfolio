import Button from "../components/Button";
import { siteData } from "../constants/index";
import { Link } from "react-router-dom";

const Bio = () => {
  return (
    <section
      id="bio"
      className="container min-h-[calc(100dvh-72px)] mx-auto my-16 p-4 md:p-6 lg:p-8 flex flex-col justify-between"
    >
      <h2 className="text-4xl lg:text-5xl font-medium text-black-600">
        {siteData.bioSection.heading}
      </h2>

      <div className="flex-1 flex flex-col justify-center snap-center mt-5">
        <div className="flex flex-col lg:flex-row lg:gap-10 max-w-7xl mx-auto items-center">
          <div className="w-full lg:w-1/2 h-100 rounded-3xl bg-black-100"></div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4 mt-5">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium">
              {siteData.bioSection.greeting}
            </h3>

            <p className="text-xl lg:text-2xl text-black-600">
              {siteData.bioSection.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-end lg:justify-start">
              <Button
                variant="black"
                to="/#work"
                icon={<i className="fa-solid fa-arrow-right -rotate-45"></i>}
              >
                {siteData.bioSection.buttons.resume}
              </Button>
              <Button
                variant="outline"
                to="/about"
                icon={<i className="fa-regular fa-user text-xl"></i>}
              >
                {siteData.bioSection.buttons.about}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
