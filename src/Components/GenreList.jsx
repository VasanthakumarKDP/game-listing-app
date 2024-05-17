import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList() {
  const [GenreList, setGenreList] = useState([]);
  const [activeIndex, setactiveIndex] = useState(0);
  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">
        {GenreList.map((item, index) => (
          <div
            onClick={() => setactiveIndex(index)}
            className={`flex gap-2 items-center mb-2 cursor-pointer
           hover:bg-gray-300 p-2 group rounded-lg
           hover:dark:bg-slate-500 ${
             activeIndex == index
               ? "bg-gradient-to-r from-amber-200 to-yellow-400 dark:bg-yellow-200"
               : null
           }`}
          >
            <img
              src={item.image_background}
              className="w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300"
            />

            <h3
              className={`dark:text-white text-[15px] font-normal group-hover:font-bold scale-105 transition-all ease-out duration-300 ${
                activeIndex == index ? " dark:text-black" : null
              }`}
            >
              {item.name}
            </h3>
          </div>
        ))}
      </h2>
    </div>
  );
}

export default GenreList;
