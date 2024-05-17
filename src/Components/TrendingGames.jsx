import React, { useEffect } from "react";

function TrendingGames({ gamelist }) {
  return (
    <div className="mt-2 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className=" md:grid md:grid-cols-3 mt-5 gap-5 lg:grid-cols-4">
        {gamelist.map((item, index) => (
          <div className="bg-[#76a8f75e] rounded-lg p-1 group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <img
              src={item.background_image}
              className="h-[270px] rounded-t-lg object-cover"
            />
            <h2 className="dark:text-white text-[18px] font-normal px-2">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingGames;
