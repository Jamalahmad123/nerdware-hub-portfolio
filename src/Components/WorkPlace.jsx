import { useState, useRef, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { technologies } from "../Data/constant";
import Wrapper from "./shared/Wrapper";
import { Autoplay } from "swiper";
import MyImage from "./shared/MyImage";

const WorkPlace = () => {
  return (
    <section className="overflow-hidden relative">
      <div className="bg__orange w-[400px] h-[400px] rounded-full absolute left-0 right-0 -top-[200px] mx-auto -z-10" />
      <Wrapper className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl text-white text-center font-bold md:text-3xl">
            Our Workplace Technologies
          </h2>
          <p className="font-normal text-dimWhite text-lg max-w-4xl mx-auto text-center">
            Our team of experts stays up-to-date with the latest technologies
            and trends, ensuring that our clients always have access to the most
            effective and efficient solutions. We pride ourselves on our ability
            to understand and meet the unique needs of each client, and our
            commitment to delivering results that exceed expectations. Choose
            Nerdwarehub for the best digital solutions that will take your
            business to the next level.
          </p>
        </div>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          grabCursor={true}
          autoplay={{
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          loop
          breakpoints={{
            300: {
              // width: 576,
              slidesPerView: 3,
            },
            668: {
              // width: 576,
              slidesPerView: 4,
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
              {/* <img src={tech} alt={tech} className="w-[100px] object-cover" /> */}
              <MyImage src={tech} alt={tech} style="w-[100px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  );
};

export default WorkPlace;
