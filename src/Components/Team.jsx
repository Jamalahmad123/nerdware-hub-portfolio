import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
// import { TeamMembers } from "../assets";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const Team = () => {
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState(0);
  const caresoual = useRef();

  useEffect(() => {
    setWidth(caresoual.current.scrollWidth - caresoual.current.offsetWidth);
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 space-y-8">
        <h2 className="text-2xl font-bold text-center text-white capitalize md:text-3xl">
          Team Members
        </h2>

        {/* Team Members */}
        <motion.div
          ref={caresoual}
          whileTap={{ cursor: "grabbing" }}
          className="cursor-grab overflow-hidden mt-10 relative"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8"
          >
            {TeamMembers.map((member, i) => (
              <motion.div
                className="group min-h-[15rem] min-w-[15rem]  md:min-w-[20rem] relative rounded-md overflow-hidden group-hover:scale-105"
                key={i}
                animate={{ left: 0 }}
              >
                <img
                  src={member}
                  alt="Person"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-2">
                  <a href="#" className="text-secondary opacity-0 invisible">
                    <FaFacebook size={25} />
                  </a>
                  <a href="#" className="text-secondary opacity-0 invisible">
                    <FaTwitter size={25} />
                  </a>
                  <a href="#" className="text-secondary opacity-0 invisible">
                    <FaLinkedin size={25} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <button
            className="absolute bg-white left-0 top-1/2 p-2 rounded-full -translate-y-1/2 text-primary z-50"
            onClick={onLeft}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute bg-white right-0 top-1/2 p-2 rounded-full -translate-y-1/2 text-primary z-50"
            onClick={onRight}
          >
            <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
