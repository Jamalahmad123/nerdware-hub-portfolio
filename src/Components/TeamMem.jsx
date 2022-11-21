import { motion } from "framer-motion";
import { useState } from "react";
import { team } from "../Data/constant";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TeamMem = () => {
  const [position, setPosition] = useState(0);

  function onRight() {
    if (position < team.length - 1) {
      setPosition(position + 1);
    }
  }

  function onLeft() {
    if (position > 0) {
      setPosition(position - 1);
    }
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-2xl font-bold text-center text-white capitalize md:text-3xl">
          Team Members
        </h2>

        {/* Team Members */}
        <motion.div className="overflow-hidden relative max-w-[100rem] h-[400px] flex justify-start items-center mt-12">
          {team.map((person, index) => (
            <motion.div
              key={person.id}
              className="absolute w-[300px] h-[350px] bg-black employe-top"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                rotate: 0,
                translateX: `${(index - position) * 106}%`,
              }}
              transition={{
                type: "spring",
              }}
            >
              <motion.div className="relative overflow-hidden rounded-md employe z-0">
                <img
                  src={person.image}
                  alt=""
                  className="w-[300px] h-[350px] object-cover"
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full space-y-6">
                  <div className="text-center role">
                    <h2 className="text-white text-2xl font-bold">
                      {person.name}
                    </h2>

                    <p className="text-gray-100 font-semibold text-lg">
                      {person.title}
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    {person.socialLinks.map((link) => (
                      <a
                        href={link.link}
                        className="text-primary bg-white p-2 rounded-md"
                        key={link.id}
                        target="_blank"
                      >
                        <link.Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
          <button
            className="absolute bg-white right-1/2 -bottom-2 p-2 rounded-full -translate-y-1/2 text-primary z-[100]"
            onClick={onLeft}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute bg-white left-1/2 -bottom-2 p-2 rounded-full -translate-y-1/2 text-primary z-50 ml-4"
            onClick={onRight}
          >
            <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamMem;
