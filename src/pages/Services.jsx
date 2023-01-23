import BtnLink from "../Components/shared/BtnLink";
import Wrapper from "../Components/shared/Wrapper";
import { FaLongArrowAltRight } from "react-icons/fa";
import { commonStyles } from "../Styles";
import {
  android,
  computer1,
  computer2,
  copywritingIcon,
  developer1,
  developer2,
  doubtImg,
  experience,
  investment,
  onlineLearning,
  onTime,
  seoIcon,
  serviceProject1,
  serviceProject2,
  shopIcon,
  webIcon,
} from "../assets";
import Statistics from "../Components/shared/Statistics";
import WorkPlace from "../Components/WorkPlace";
import Cta from "../Components/Cta";
import AccordianList from "../Components/shared/AccordianList";

const services = [
  {
    id: 1,
    title: "App Development",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    Icon: android,
  },
  {
    id: 2,
    title: "Web Development",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    Icon: webIcon,
  },
  {
    id: 3,
    title: "Digital Marketing",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    Icon: seoIcon,
  },
  {
    id: 4,
    title: "Content Writing",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    Icon: copywritingIcon,
  },
  {
    id: 5,
    title: "eCommerce Development",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    Icon: shopIcon,
  },
];

const hireUs = [
  {
    id: 1,
    title: "Experienced & Skilled Resources",
    desc: "Blueket is a company that specialises in risk management and general safety. We will bring value to your business farm while also ensuring.",
    icon: experience,
  },
  {
    id: 2,
    title: "Cost-effective & On-time Delivery",
    desc: "If you think to have a better outcome with low cost then Blueket is the one. We are offering the best technology solution at an affordable price.",
    icon: onTime,
  },
  {
    id: 3,
    title: "Flexible Pricing & Working Models",
    desc: "We always ensure that our task is handed over within the given time. Our main priority is customers gratification.",
    icon: investment,
  },
  {
    id: 4,
    title: "No Expenses on Training & Retaining",
    desc: "We always ensure that our task is handed over within the given time. Our main priority is customers gratification.",
    icon: onlineLearning,
  },
];

const Services = () => {
  return (
    <>
      <section className={`bg-service min-h-screen ${commonStyles.flexCenter}`}>
        <Wrapper className="flex items-center justify-between">
          <div className="px-6 py-14 border-2 border-l-0 rounded-tr-[100px] rounded-br-2xl border-white md:flex-2 relative service-content">
            <span className="-rotate-90 absolute left-[-105px] top-[47%] block text-white text-sm">
              Web Design & Development
            </span>
            <div className="space-y-8">
              <h1 className="text-white uppercase relative">
                creative web design service
              </h1>
              <p className="text-white">
                Our creative web development firm has been creating apps that
                are specifically adapted to our clients' needs.
              </p>
              <BtnLink styles="rounded-full bg__orange text-white inline-block group">
                Get a Quote{" "}
                <FaLongArrowAltRight className="inline-block ml-2 group-hover:ml-4 smooth" />
              </BtnLink>
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="bg-white overflow-hidden py-24">
        <Wrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-between">
            <div>
              <h5 className={`${commonStyles.scriptHeading} mb-2`}>Overview</h5>
              <h2 className="text-primary">Web Design Agency</h2>
              <p className="mt-8 mb-5 text-gray-700">
                Design and development of high-quality web and mobile
                applications that will help you reach new heights in your
                business.
              </p>
              <p className="text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="flex gap-4 relative">
              <div className="bg__shape--square absolute -right-[30px] -top-[40px] w-[6rem] h-[6rem] md:w-[9rem] md:h-[9rem] z-0 opacity-70" />
              <div className="flex-1 shadow-lg z-[10]">
                <img
                  src={serviceProject1}
                  alt="services image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 shadow-lg z-[10]">
                <img
                  src={serviceProject2}
                  alt="service image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg__shape--circle absolute -bottom-[30px] -left-[20px] w-[9rem] h-[9rem] z-0 opacity-70" />
            </div>
          </div>
          {/* Statistics */}
          <Statistics styles="w-[100%] mt-10 pt-16" />
        </Wrapper>
      </section>
      <section className="bg-[#f5f5f5]">
        <Wrapper className="space-y-12">
          <header>
            <h5 className={`${commonStyles.scriptHeading} mb-2`}>
              Our Service
            </h5>
            <h2>
              Our Mobile App & WebSite <br className="hidden md:block" />{" "}
              Development Services
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8">
            {services.map((service) => (
              <div
                className="py-8 px-6 border border-gray-200 rounded-lg space-y-8 smooth hover:border-orange-400 hover:bg-white hover:shadow-md"
                key={service.id}
              >
                <div className="space-y-6">
                  <img
                    src={service.Icon}
                    alt={service.title}
                    className="w-16 h-16 object-cover"
                  />
                  <h3 className="text-primary text-xl md:text-2xl lg:text-3xl">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
      {/* Technologies */}
      <WorkPlace />
      <section className="bg-[#f6f7ff] overflow-hidden">
        <Wrapper className="flex items-center flex-col gap-20 justify-between lg:flex-row">
          <div className="flex items-center justify-center flex-wrap gap-2 relative flex-1">
            <div className="bg__shape--square absolute -right-[20px] top-4 w-[6rem] h-[6rem] md:w-[9rem] md:h-[9rem] z-0 opacity-70" />
            <div className="flex-[0_0_auto] w-1/3 shadow-lg">
              <img
                src={developer1}
                alt="developer image"
                className="w-full h-full object-fill rounded-lg"
              />
            </div>
            <div className="flex-[0_0_auto] w-1/2 self-end z-10 shadow-lg">
              <img
                src={developer2}
                alt="developer image"
                className="w-full h-full object-fill rounded-lg"
              />
            </div>
            <div className="flex-[0_0_auto] w-1/2 z-10 shadow-lg">
              <img
                src={computer1}
                alt="computer image"
                className="w-full h-full object-fill rounded-lg"
              />
            </div>
            <div className="flex-[0_0_auto] w-1/3 self-start shadow-lg">
              <img
                src={computer2}
                alt="computer image"
                className="w-full h-full object-fill rounded-lg"
              />
            </div>
            <div className="bg__shape--circle absolute -bottom-[30px] -left-[50px] w-[9rem] h-[9rem] z-0 opacity-70" />
          </div>
          <div className="flex-1">
            <h5 className={`${commonStyles.scriptHeading} mb-3`}>Hire Us</h5>
            <h2 className="text-primary">
              Why Hire The Blueket As Your Mobile App Development Company?
            </h2>
            <div className="mt-10 space-y-6">
              {hireUs.map((item) => (
                <div className="flex items-start gap-5" key={item.id}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 object-cover"
                  />
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </section>
      {/* Frequently Ask Questions */}
      <section className="bg-[#fff]">
        <Wrapper className="flex flex-col md:flex-row items-center justify-between gap-14">
          <div className="flex-1 w-full">
            <img src={doubtImg} alt="have a question banner" />
          </div>
          <div className="flex-1">
            <div>
              <h5 className={`${commonStyles.scriptHeading} mb-3`}>
                Have a Doubt?
              </h5>
              <h2 className="text-primary">Frequently Asked Question</h2>
            </div>
            <AccordianList />
          </div>
        </Wrapper>
      </section>
      {/* CTA */}
      <Cta styles="bg-[#f6f7ff]" />
    </>
  );
};

export default Services;

//
