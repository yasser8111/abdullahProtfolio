import React, { useState, useEffect } from "react";

const Loading = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center fixed top-0 left-0 z-50 bg-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white w-64 text-center">
        /Loading{dots}
      </h1>
    </div>
  );
};

export default Loading;