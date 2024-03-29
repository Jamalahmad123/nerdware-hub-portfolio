import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { projects } from "../Data/constant";
import Button from "./shared/Button";
import { Link } from "react-router-dom";
import Wrapper from "./shared/Wrapper";
import MyImage from "./shared/MyImage";

const Projects = () => {
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
    <section>
      <Wrapper className="space-y-10 relative">
        <div className="flex items-start flex-col justify-start gap-4 lg:gap-0 lg:flex-row lg:justify-between">
          <h2 className="capitalize text-3xl font-bold text-white md:text-4xl">
            latest projects
          </h2>
          {/* <div className="absolute left-0 bottom-0 w-36 h-36 z-0 opacity-70 bg__shape" /> */}
          <div className="flex justify-between items-center w-full lg:w-auto lg:gap-8">
            <div>
              <h3 className="text-secondary font-semibold text-xl lg:text-2xl ">
                350+
              </h3>
              <p className="font-normal text-dimWhite">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-secondary font-semibold text-xl lg:text-2xl ">
                330
              </h3>
              <p className="font-normal text-dimWhite">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* project slider */}
        <div className="relative flex justify-center items-center overflow-hidden max-w-[100rem] min-h-[600px] md:min-h-[800px] lg:min-h-[450px]">
          {projects.map((project, index) => (
            <motion.div
              initial={{ scale: 0, rotation: -180 }}
              animate={{
                scale: 1,
                rotate: 0,
                translateX: `${(index - current) * 100}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className={`w-full h-full flex flex-col items-center justify-between lg:flex-row bg-black-gradient-2 gap-6 p-8 absolute overflow-hidden`}
              key={project.id}
            >
              <div className="mb-8 space-y-4 lg:mb-0">
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
              <div className="w-full flex-2 mx-auto">
                {/* <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg lg:h-[400px]"
                /> */}
                <MyImage
                  src={project.image}
                  alt={project.title}
                  style={
                    "w-full object-cover rounded-lg h-[200px] md:h-[400px]"
                  }
                />
              </div>
            </motion.div>
          ))}
        </div>
        <button
          className="bg-white p-2 rounded-full absolute -bottom-4 left-1/2"
          onClick={onRight}
        >
          <FaArrowRight />
        </button>
        <button
          className="bg-white p-2 rounded-full absolute -bottom-4 right-1/2 mr-2"
          onClick={onLeft}
        >
          <FaArrowLeft />
        </button>
        <Link
          to="/projects"
          className="absolute right-4 -bottom-8 text-white transition-all hover:border-b hover:border-secondary"
        >
          View More
        </Link>
      </Wrapper>
    </section>
  );
};

export default Projects;
