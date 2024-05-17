import React, { useEffect } from "react";

function Banner({ gameBanner }) {
  useEffect(() => {
    console.log(gameBanner);
  }, []);
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-yellow-100 to-transparent w-full">
        <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
        <button className="bg-blue-700 text-white">Get Now</button>
      </div>
      <img
        className="md:h-[320px] w-full object-cover rounded-lg"
        src={gameBanner.background_image}
      />
    </div>
  );
}

export default Banner;
