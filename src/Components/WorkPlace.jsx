import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { technologies } from "../Data/constant";

const WorkPlace = () => {
  const [position, setPosition] = useState(0);

  function onRight() {
    if (position < technologies.length - 1) {
      setPosition(position + 1);
    }
  }

  function onLeft() {
    if (position > 0) {
      setPosition(position - 1);
    }
  }

  return (
    <section className="py-12 overflow-hidden relative mt-6">
      <div className="bg__purple w-[400px] h-[400px] rounded-full absolute left-0 right-0 -top-[200px] mx-auto -z-10" />
      <div className="container mx-auto px-4 space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl text-white text-center font-bold md:text-3xl">
            Our Workplace Technologies
          </h2>
          <p className="font-normal text-dimWhite text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis consequuntur ad, cum eos architecto animi? Consectetur,
            ut distinctio rerum cumque labore in fuga at modi odit omnis nisi,
            nostrum magni.
          </p>
        </div>
        {/* slider */}
        <div className="relative overflow-hidden py-12 flex justify-start items-center">
          {technologies.map((tech, index) => (
            <motion.div
              className="absolute h-20 w-20"
              key={index}
              initial={{ scale: 0, rotation: -180 }}
              animate={{
                scale: 1,
                rotate: 0,
                left: `${(index - position) * 150}px`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <img src={tech} alt="" className="w-full h-full" />
            </motion.div>
          ))}

          <button
            className="text-xl text-primary bg-dimWhite absolute top-1/2 left-0 p-2 rounded-full -translate-y-1/2 z-50"
            onClick={onLeft}
          >
            <FaArrowLeft />
          </button>
          <button
            className="text-xl text-primary bg-dimWhite absolute top-1/2 right-0 p-2 rounded-full -translate-y-1/2 z-50"
            onClick={onRight}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkPlace;
