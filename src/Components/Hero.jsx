import { hero } from "../assets/index";
import Button from "./shared/Button";
import Wrapper from "./shared/Wrapper";

const Hero = () => {
  const scrollToView = () => {
    const element = document.getElementById("about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="py-12">
      <Wrapper
        className={`flex flex-col-reverse items-center gap-8 md:flex-row md:gap-0`}
      >
        <div className="space-y-6">
          <h1 className="text-white text-3xl font-bold md:text-4xl">
            Encourage innovation with trusted <br className="hidden md:block" />
            <span className="text-gradient">Technology Solutions</span>
          </h1>
          <p className="max-w-md font-normal text-dimWhite text-lg">
            Our company, Nerdware Hub, is a leader in the digital industry. We
            specialize in developing cutting-edge software solutions for a
            variety of clients across various sectors.
          </p>
          <Button styles="bg-blue-gradient rounded-md" onClick={scrollToView}>
            <p>learn more</p>
          </Button>
        </div>
        <div className="relative">
          <img src={hero} alt="hero banner" />
          <div className="absolute top-0 w-[40%] h-[35%] z-0 pink__gradient" />
          <div className="absolute bottom-40 w-[80%] h-[80%] z-1 rounded-full white__gradient" />
          <div className="absolute right-20 bottom-20 w-[50%] h-[50%] z-0 blue__gradient" />
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
