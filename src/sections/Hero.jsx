import { siteData } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="container h-[calc(100vh-72px)] mx-auto my-16 p-4 md:p-6 lg:p-8 flex flex-col justify-between"
    >
      <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold">
        {siteData.heroSection.sloganLines[0]}
        <br />
        {siteData.heroSection.sloganLines[1]}
      </h1>

      <div className="flex gap-5 md:gap-20 flex-col md:flex-row">
        <p className="text-2xl lg:text-3xl text-black-400 w-full md:w-110">
          {siteData.heroSection.descriptions[0]}
        </p>
        <p className="text-2xl lg:text-3xl text-black-400 w-full md:w-110">
          {siteData.heroSection.descriptions[1]}
        </p>
      </div>

      <div className="flex justify-between items-end">
        <p className="text-black-500 font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          @{siteData.heroSection.year}
        </p>
        <p className="text-black-500 font-medium text-xl sm:text-3xl md:text-4xl">
          /{siteData.heroSection.designerCredit}
        </p>
      </div>
    </section>
  );
};

export default Hero;
