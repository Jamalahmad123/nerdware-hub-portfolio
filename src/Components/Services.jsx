import { services } from "../assets/index";
import ServicesCards from "./shared/ServicesCards";
import { homeServices } from "../Data/constant";
import Wrapper from "./shared/Wrapper";
import { commonStyles } from "../Styles";

const Services = () => {
  return (
    <section>
      <Wrapper
        className={`${commonStyles.flexCenter} flex-col gap-6 lg:flex-row lg:gap-0`}
      >
        <div className="flex-1">
          <header>
            <h2 className="text-3xl font-bold text-white capitalize md:text-4xl">
              creative <span className="text-gradient">website solution</span>
            </h2>
            <p className="mt-6 font-normal text-dimWhite text-lg"></p>
          </header>
          <div className="mt-6 flex items-center flex-wrap gap-4 w-full">
            {homeServices.map((service) => (
              <ServicesCards service={service} key={service.id} />
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
      </Wrapper>
    </section>
  );
};

export default Services;
