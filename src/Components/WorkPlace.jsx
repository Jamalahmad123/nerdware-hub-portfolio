import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

import { technologies } from "../Data/constant";
import Wrapper from "./shared/Wrapper";

const WorkPlace = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

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
        <motion.div ref={carouselRef} className="overflow-hidden cursor-grab">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-14"
          >
            {technologies.map((tech, index) => (
              <motion.div
                className="pointer-events-none min-h-[6rem] min-w-[6rem]"
                key={index}
              >
                <img
                  src={tech}
                  alt={tech}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default WorkPlace;
