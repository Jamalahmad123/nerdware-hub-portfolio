import { services } from "../assets/index";
import ServicesCards from "./shared/ServicesCards";
import { homeServices } from "../Data/constant";

const Services = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 lg:flex-row lg:gap-0">
        <div className="flex-1">
          <header>
            <h2 className="text-3xl font-bold text-white capitalize md:text-4xl">
              creative <span className="text-gradient">website solution</span>
            </h2>
            <p className="font-normal text-dimWhite text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              autem.
            </p>
          </header>
          <div className="mt-6 flex items-center flex-wrap gap-4 w-full">
            {homeServices.map((service) => (
              <ServicesCards title={service.title} key={service.id} />
            ))}
          </div>
        </div>
        <div className="flex-1 relative">
          <img
            src={services}
            alt="services banner"
            className="w-full h-full z-10"
          />
          {/* <div className="absolute -left-1/2 top-0 w-1/2 h-1/2 z-[3] rounded-full white__gradient" />
          <div className="absolute -left-1/2 bottom-0 w-1/2 h-1/2 z-0 rounded-full pink__gradient" /> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
