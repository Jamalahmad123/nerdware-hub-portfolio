import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { team } from "../Data/constant";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Team = () => {
  const [width, setWidth] = useState(0);
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
            {team.map((person, i) => (
              <motion.div
                className="group max-h-[25rem] min-w-[15rem]  md:min-w-[20rem] relative rounded-md overflow-hidden group-hover:scale-105 employe-top"
                key={i}
                animate={{ left: 0 }}
              >
                <motion.div className="relative overflow-hidden rounded-md employe z-0 w-full h-full">
                  <img
                    src={person.image}
                    alt=""
                    className="w-full h-full object-cover"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
