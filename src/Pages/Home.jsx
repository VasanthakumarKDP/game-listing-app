import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import TrendingSlider from "../Components/TrendingSlider";

function Home() {
  const [allGameList, setAllGameList] = useState([]);
  useEffect(() => {
    getAllGamesList();
  });
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      console.log(resp.data.results);
      setAllGameList(resp.data.results);
    });
  };
  return (
    <div className="grid grid-cols-4 px-8">
      <div className=" h-full hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGameList?.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            {/* <TrendingGames gamelist={allGameList} /> */}
            <TrendingSlider gamelist={allGameList} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
