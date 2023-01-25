import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import BtnLink from "../Components/shared/BtnLink";
import Wrapper from "../Components/shared/Wrapper";
import { commonStyles } from "../Styles";
import Statistics from "../Components/shared/Statistics";
import WorkPlace from "../Components/WorkPlace";
import Cta from "../Components/Cta";
import AccordianList from "../Components/shared/AccordianList";
import MyImage from "../Components/shared/MyImage";
import {
  computer1,
  computer2,
  developer1,
  developer2,
  doubtImg,
  serviceProject1,
  serviceProject2,
} from "../assets";
import { hireUs, servicesData } from "../Data/constant";
import { useTitle } from "../CustomHooks/CustomHook";

const Services = () => {
  useTitle("NerdWareHub Digital Ageny | Services");

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.95, ease: "easeOut" }}
        className={`bg-service min-h-screen ${commonStyles.flexCenter}`}
      >
        <Wrapper className="flex items-center justify-between">
          <div className="px-6 py-14 border-2 border-l-0 rounded-tr-[100px] rounded-br-2xl border-white md:flex-[0_0_60%] relative service-content">
            <span className="-rotate-90 absolute left-[-130px] top-[47%] block text-white text-sm">
              Web and App Development Mastery
            </span>
            <div className="space-y-8">
              <h1 className="text-white uppercase relative">
                Unleash Your Business Potential with{" "}
                <span className="text-[#ff5723]">Nerdwarehub</span>
              </h1>
              <p className="text-gray-200">
                Our creative web development firm has been creating apps that
                are specifically adapted to our clients' needs. Choose
                Nerdwarehub for the best digital solutions that will take your
                business to the next level.
              </p>
              <BtnLink styles="rounded-full bg__orange text-white inline-block group">
                Get a Quote{" "}
                <FaLongArrowAltRight className="inline-block ml-2 group-hover:ml-4 smooth" />
              </BtnLink>
            </div>
          </div>
        </Wrapper>
      </motion.section>
      <section className="bg-white overflow-hidden py-24">
        <Wrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-between">
            <div>
              <h5 className={`${commonStyles.scriptHeading} mb-2`}>Overview</h5>
              <h2 className="text-primary">Web Design Agency</h2>
              <p className="mt-8 mb-5 text-gray-700">
                Nerdwarehub is a web design agency that specializes in creating
                visually stunning and user-friendly websites that help
                businesses and organizations achieve their goals. We understand
                that a website is often the first point of contact for potential
                customers and it's crucial to have a professional and attractive
                website to make a great first impression.
              </p>
              <p className="text-gray-700">
                Design and development of high-quality web and mobile
                applications that will help you reach new heights in your
                business. Choose Nerdwarehub for professional and high-quality
                web design services that will help your business succeed in the
                digital world.
              </p>
            </div>
            <div className="flex gap-4 relative">
              <div className="bg__shape--square absolute -right-[30px] -top-[40px] w-[6rem] h-[6rem] md:w-[9rem] md:h-[9rem] z-0 opacity-70" />
              <div className="flex-1 shadow-lg z-[10]">
                {/* <img
                  src={serviceProject1}
                  alt="services image 1"
                  className="w-full h-full object-cover"
                /> */}
                <MyImage
                  src={serviceProject1}
                  alt="services image 1"
                  style="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 shadow-lg z-[10]">
                {/* <img
                  src={serviceProject2}
                  alt="service image 2"
                  className="w-full h-full object-cover"
                /> */}
                <MyImage
                  src={serviceProject2}
                  alt="services image 2"
                  style="w-full h-full object-cover"
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
              Services Offered by <br className="hidden md:block" />{" "}
              <span className="text-[#ff5723]">Nerdwarehub</span>
            </h2>
            <p className="mt-6 text-gray-700 max-w-2xl">
              At Nerdwarehub, we specialize in providing expert web and app
              development, and digital solutions that drive growth and success
              for businesses and organizations of all sizes. Our services
              include:
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8">
            {servicesData.map((service) => (
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
              {/* <img
                src={developer1}
                alt="developer image"
                className="w-full h-full object-fill rounded-lg"
              /> */}
              <MyImage
                src={developer1}
                alt="developer image"
                style="w-full h-full object-fill rounded-lg"
              />
            </div>
            <div className="flex-[0_0_auto] w-1/2 self-end z-10 shadow-lg">
              {/* <img
                src={developer2}
                alt="developer image"
                className="w-full h-full object-fill rounded-lg"
              /> */}
              <MyImage
                src={developer2}
                alt="developer image"
                style="w-full h-full object-fill rounded-lg"
              />
            </div>
            <div className="flex-[0_0_auto] w-1/2 z-10 shadow-lg">
              {/* <img
                src={computer1}
                alt="computer image"
                className="w-full h-full object-fill rounded-lg"
              /> */}
              <MyImage
                src={computer1}
                alt="computer image"
                style="w-full h-full object-fill rounded-lg"
              />
            </div>
            <div className="flex-[0_0_auto] w-1/3 self-start shadow-lg">
              {/* <img
                src={computer2}
                alt="computer image"
                className="w-full h-full object-fill rounded-lg"
              /> */}
              <MyImage
                src={computer2}
                alt="computer image"
                style="w-full h-full object-fill rounded-lg"
              />
            </div>
            <div className="bg__shape--circle absolute -bottom-[30px] -left-[50px] w-[9rem] h-[9rem] z-0 opacity-70" />
          </div>
          <div className="flex-1">
            <h5 className={`${commonStyles.scriptHeading} mb-3`}>Hire Us</h5>
            <h2 className="text-primary">
              {/* Why Hire The Nerdwarehub As Your Digital Solutions Company? */}
              Why Nerdwarehub
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
            {/* <img src={doubtImg} alt="have a question banner" /> */}
            <MyImage
              src={doubtImg}
              alt="have a question banner"
              style="w-full h-full object-fill rounded-lg"
            />
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
