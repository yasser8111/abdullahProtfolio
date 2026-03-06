import { siteData } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="container h-[calc(100vh-72px)] mx-auto my-16 p-8 flex flex-col justify-between"
    >
      <h1 className="text-9xl font-bold">
        {siteData.heroSection.sloganLines[0]}
        <br />
        {siteData.heroSection.sloganLines[1]}
      </h1>

      <div className="flex gap-20">
        <p className="text-3xl text-black-400 w-110">
          {siteData.heroSection.descriptions[0]}
        </p>
        <p className="text-3xl text-black-400 w-110">
          {siteData.heroSection.descriptions[1]}
        </p>
      </div>

      <div className="flex justify-between items-end">
        <p className="text-black-500 font-medium text-8xl">
          @{siteData.heroSection.year}
        </p>
        <p className="text-black-500 font-medium text-4xl">
          /{siteData.heroSection.designerCredit}
        </p>
      </div>
    </section>
  );
};

export default Hero;
