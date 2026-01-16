import React from "react";
import GlassBox from "./GlassBox";
import Grids from "./grids";

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <GlassBox className="z-10 px-6">
        <h1 className="text-[7rem] font-bold text-white relative z-10">
          PORTFOLIO
        </h1>
        <div className="absolute -top-5 -right-20 rotate-30">
          <GlassBox className="px-6 py-1">
            <p className="text-[#EE5A2A] text-2xl font-bold">2026</p>
          </GlassBox>
        </div>
      </GlassBox>
      <Grids />
    </section>
  );
}

export default Hero;
