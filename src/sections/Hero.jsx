import { siteData } from "../constants/index";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="container min-h-[calc(100dvh-72px)] mx-auto my-16 p-4 md:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-[800px_1fr]"
    >
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight">
          {siteData.heroSection.sloganLines[0]}
          <br />
          {siteData.heroSection.sloganLines[1]}
        </h1>

        <p className="text-lg lg:text-3xl text-black-400 max-w-[700px]">
          {siteData.heroSection.descriptions}
        </p>

        <div className="flex flex-wrap gap-4 flex-col sm:flex-row">
          <Button to="/#work" variant="black">
            {siteData.bioSection.buttons.resume}
          </Button>
          <Button
            to="/#bio"
            variant="outline"
            icon={<i className="fa-solid fa-arrow-right -rotate-45"></i>}
          >
            {siteData.bioSection.buttons.about}
          </Button>
        </div>
      </div>

      <div className="flex justify-center items-center  mt-6">
        <img
          src="/imges/hero-imge.svg"
          alt="Hero"
          className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 pointer-events-none"
        />
      </div>
    </section>
  );
};

export default Hero;
