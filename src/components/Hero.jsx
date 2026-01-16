import React from "react";
import GlassBox from "./GlassBox";
import Grids from "./grids";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      <GlassBox className="z-10 p-6">
        <h1 className="text-[7rem] text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 ">
          PORTFOLIO
        </h1>
        <div className="absolute -top-12 -right-20 rotate-30">
          <GlassBox className="p-2 rounded-full">
            <p className="text-white text-2xl font-bold  bg-accent/80 rounded-full px-5">
              2025
            </p>
          </GlassBox>
        </div>
      </GlassBox>
      <Grids />
    </section>
  );
}

export default Hero;
