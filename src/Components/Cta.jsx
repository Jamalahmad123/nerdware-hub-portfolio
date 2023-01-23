import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import BtnLink from "./shared/BtnLink";
import Button from "./shared/Button";
import Wrapper from "./shared/Wrapper";

const Cta = ({ styles }) => {
  return (
    <section id="contact" className={`${styles}`}>
      <Wrapper>
        <div className="flex flex-col justify-start items-center gap-8 rounded-2xl px-6 py-14 md:justify-between md:flex-row md:gap-0 bg-black-gradient-2">
          <div>
            <h2 className="text-2xl font-bold text-center text-white md:text-3xl md:text-left">
              Let's Create an Amazing
              <br className="hidden md:block" /> Project Together!
            </h2>
          </div>
          <div>
            <BtnLink
              path="/contact"
              styles="group text-gray-800 bg-white rounded-full inline-block"
            >
              <span>get started</span>
              <FaLongArrowAltRight className="inline-block ml-2 group-hover:ml-4 smooth" />
            </BtnLink>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Cta;
