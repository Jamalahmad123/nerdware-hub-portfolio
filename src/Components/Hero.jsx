import { motion } from "framer-motion";

// Components
import { hero } from "../assets/index";
import Button from "./shared/Button";
import Wrapper from "./shared/Wrapper";

// Custom Hook
import { scrollToView } from "../CustomHooks/CustomHook";
import { commonStyles } from "../Styles";
import MyImage from "./shared/MyImage";

const Hero = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.95, ease: "easeOut" }}
      className="py-12 min-h-screen grid place-items-center"
    >
      <Wrapper className="flex flex-col-reverse items-center gap-8 md:flex-row">
        <div className="flex-1 space-y-6">
          <h1 className="text-white">
            Encourage innovation with trusted <br className="hidden md:block" />
            <span className="text-gradient">Technology Solutions</span>
          </h1>
          <p className={`${commonStyles.sectionpara}`}>
            Our company, Nerdware Hub, is a leader in the digital industry. We
            specialize in developing cutting-edge software solutions for a
            variety of clients across various sectors.
          </p>
          <Button
            styles="bg-blue-gradient rounded-md"
            onClick={() => scrollToView("contact")}
          >
            <p>Get Started</p>
          </Button>
        </div>
        <div className="flex-1 relative max-w-[500px] max-h-[500px]">
          <img src={hero} alt="hero banner" className="w-full h-full" />
          <div className="absolute top-0 w-[40%] h-[35%] z-0 pink__gradient" />
          <div className="absolute bottom-40 w-[80%] h-[80%] z-1 rounded-full white__gradient" />
          <div className="absolute right-20 bottom-20 w-[50%] h-[50%] z-0 blue__gradient" />
        </div>
      </Wrapper>
    </motion.header>
  );
};

export default Hero;
