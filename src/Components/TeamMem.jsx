import { motion } from "framer-motion";
import { useState } from "react";
import { team } from "../Data/constant";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const TeamMem = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 relative space-y-12">
        <h2 className="text-2xl font-bold text-center text-white capitalize md:text-3xl">
          Team Members
        </h2>

        {/* Team Members */}
        <Swiper
          spaceBetween={30}
          grabCursor={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 1,
            },
          }}
        >
          {team.map((person) => (
            <SwiperSlide
              key={person.id}
              className="employe-top w-[350px] md:w-auto"
            >
              <div className="overflow-hidden rounded-md employe relative">
                <img
                  src={person.image}
                  alt=""
                  className="w-full object-cover h-[450px]"
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full space-y-6">
                  <div className="text-center role w-full h-full">
                    <h2 className="text-white text-2xl font-bold">
                      {person.name}
                    </h2>

                    <p className="text-gray-100 font-semibold text-lg">
                      {person.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamMem;
