import { hero } from "../assets/index";
import Button from "./shared/Button";

const Hero = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 flex flex-col-reverse items-center gap-8 md:flex-row md:gap-0">
        <div className="space-y-6">
          <h1 className="text-white text-3xl font-bold md:text-4xl">
            Encourage innovation with trusted <br className="hidden md:block" />
            <span className="text-gradient">Technology Solutions</span>
          </h1>
          <p className="max-w-md font-normal text-dimWhite text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, magna
            aliqua. ipsum is simply dummy text of the printing.
          </p>
          <Button styles="bg-blue-gradient rounded-md">
            <a href="#">learn more</a>
          </Button>
        </div>
        <div className="relative">
          <img src={hero} alt="hero banner" />
          <div className="absolute top-0 w-[40%] h-[35%] z-0 pink__gradient" />
          <div className="absolute bottom-40 w-[80%] h-[80%] z-1 rounded-full white__gradient" />
          <div className="absolute right-20 bottom-20 w-[50%] h-[50%] z-0 blue__gradient" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
