import React from "react";

function Grids({ side = "left" }) {
  const isRight = side === "right";

  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 ${
        isRight ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
      } z-0 pointer-events-none flex items-center justify-center`}
    >
      <img
        src="/grids.svg"
        className={`absolute z-10 max-w-none pointer-events-none opacity-30 w-[1400px] ${
          isRight ? "scale-x-[-1]" : ""
        }`}
        alt=""
      />
      <div className="w-250 h-250 bg-[#EE5A2A] rounded-full blur-[120px] opacity-50"></div>
    </div>
  );
}

export default Grids;
