import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = ({ sliderData }) => {
  const [current, setCurrent] = useState(0);

  function onRight() {
    if (current < projects.length - 1) {
      setCurrent(current + 1);
    }
  }

  function onLeft() {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  return (
    <motion.div
      initial={{ scale: 0, rotation: -180 }}
      animate={{
        scale: 1,
        rotate: 0,
        left: `${(index - current) * 1000}px`,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`w-full h-full flex flex-col justify-center items-center lg:flex-row bg-black-gradient-2 gap-6 p-8 absolute overflow-hidden`}
      key={project.id}
    >
      <div className="flex-1 space-y-4">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          {project.title}
        </h2>
        <p className="font-normal text-dimWhite text-base lg:text-lg">
          {project.desc}
        </p>
        <Button styles="bg-primary text-white rounded-full">
          <a href={project.link} className="flex gap-2 items-center">
            View Live
            <FaArrowRight />
          </a>
        </Button>
      </div>
      <div className="flex-2">
        <img
          src={project.image}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </motion.div>
  );
};

export default Slider;
