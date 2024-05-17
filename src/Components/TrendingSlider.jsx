import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

const slideDimensions = {
  width: "250px",
  height: "350px",
};

const TrendingSlider = ({ gamelist }) => {
  return (
    <>
      <div className="mt-1 hidden md:block">
        <h2 className="font-bold text-[30px] dark:text-white pt-8">
          Trending Games
        </h2>
        <div className="flex justify-center items-center">
          <Swiper
            slidesPerView={4}
            spaceBetween={5}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper text-white py-10"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {gamelist.map((item, index) => (
              <SwiperSlide
                key={index}
                className=" bg-gradient-to-r from-amber-200 to-yellow-500 shadow-lg rounded-lg p-3 group transition-transform duration-300 ease-in-out cursor-pointer flex flex-col items-center hover:scale-110 hover:backdrop-blur-md hover:shadow-lg"
                style={slideDimensions}
              >
                <div className="h-full w-full flex flex-col ">
                  <img
                    src={item.background_image}
                    alt={item.name}
                    className="w-full h-3/4 rounded-t-lg object-cover"
                  />
                  <h2 className="w-full text-center text-black font-medium text-md dark:text-black pt-2">
                    {item.name}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TrendingSlider;
