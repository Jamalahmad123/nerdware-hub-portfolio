import { useState, useRef, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { technologies } from "../Data/constant";
import Wrapper from "./shared/Wrapper";
import { Autoplay } from "swiper";

const WorkPlace = () => {
  return (
    <section className="overflow-hidden relative">
      <div className="bg__purple w-[400px] h-[400px] rounded-full absolute left-0 right-0 -top-[200px] mx-auto -z-10" />
      <Wrapper className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl text-white text-center font-bold md:text-3xl">
            Our Workplace Technologies
          </h2>
          <p className="font-normal text-dimWhite text-lg max-w-4xl mx-auto text-center">
            Our Workplace Technologies Center is focused on working with
            business leaders to help them maximize their productivity, reduce
            costs and meet social needs in the 21st century. Our Workplace
            Technologies Center is focused on working with business leaders to
            help them maximize their productivity, reduce costs and meet social
            needs in the 21st century.
          </p>
        </div>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          grabCursor={true}
          autoplay={{
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop
          breakpoints={{
            300: {
              // width: 576,
              slidesPerView: 2,
            },
            668: {
              // width: 576,
              slidesPerView: 3,
            },
            820: {
              // width: 768,
              slidesPerView: 4,
            },
            1080: {
              // width: 768,
              slidesPerView: 5,
            },
            1280: {
              // width: 768,
              slidesPerView: 6,
            },
            1400: {
              // width: 768,
              slidesPerView: 7,
            },
          }}
          className="mySwiper py-8"
        >
          {technologies.map((tech, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img src={tech} alt={tech} className="w-[100px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  );
};

export default WorkPlace;
