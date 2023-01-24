import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  aboutHero1,
  aboutHero2,
  missionAbout,
  officeView,
  adeel,
  jamal,
  team1,
  founderImg,
} from "../assets";
import PageName from "../Components/shared/PageName";
import Statistics from "../Components/shared/Statistics";
import Wrapper from "../Components/shared/Wrapper";
import { team } from "../Data/constant";
import { commonStyles } from "../Styles";

const About = () => {
  return (
    <>
      <header className="py-16">
        <Wrapper className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <header className="">
            {/* <PageName page="About" /> */}
            <h1 className="text-tertiary">About Us</h1>
            <p className={`${commonStyles.sectionpara} mt-8 mb-4`}>
              Introducing Nerdware Hub, your one-stop-shop for all things
              digital. We are a newly launched startup with a proven track
              record of success, having completed 7 projects with 100% client
              satisfaction. Our team of experts specializes in website and
              mobile app development, UI/UX design, graphic design, video
              editing, and animation.
            </p>
            <p className={`${commonStyles.sectionpara}`}>
              We understand the importance of creating a visually stunning and
              user-friendly digital presence for your business. That's why we
              take the time to understand your needs and tailor our services to
              help you achieve your goals.
            </p>
          </header>
          <div className={`${commonStyles.flex} gap-4 self-end`}>
            <figure className="w-1/2">
              <img
                src={aboutHero1}
                alt="about hero img"
                className="rounded-xl w-full"
              />
            </figure>
            <figure className="w-1/2">
              <img
                src={aboutHero2}
                alt="about hero img"
                className="rounded-xl w-full"
              />
            </figure>
          </div>
        </Wrapper>
      </header>
      <section>
        <Wrapper className="flex flex-col gap-12 items-center justify-center md:flex-row lg:gap-24">
          <div className="flex-1 w-full">
            <figure>
              <img src={missionAbout} alt="mission-about" />
            </figure>
          </div>
          <header className="flex-1 space-y-8">
            <h5 className={`${commonStyles.scriptHeading}`}>Mission</h5>
            <h4 className="text-[1.2rem] leading-[2rem] md:leading-[3rem] font-semibold text-tertiary md:text-[2rem]">
              To bring inspiration and innovation to every business in the
              world.
            </h4>
            <p className={`${commonStyles.sectionpara}`}>
              At Nerdwarehub, our mission is to empower businesses and
              organizations with cutting-edge digital solutions that drive
              growth and success. We strive to deliver innovative and
              personalized services that help our clients stay ahead of the
              competition and achieve their goals. From website development and
              design to digital marketing and analytics, we are dedicated to
              providing the expertise and support needed to thrive in today's
              digital landscape.
            </p>
            {/* <h4 className="text-[1.2rem] leading-[2rem] md:leading-[2.5rem] font-semibold text-tertiary md:text-[1.6rem]">
              We are a multi-award-winning digital consulting and engineering
              firm that provides end-to-end software solutions to enterprises,
              independent software vendors, digital agencies, and startups.
            </h4> */}
          </header>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <div className="w-full relative">
            <img
              src={officeView}
              alt="office view"
              className="rounded-xl -z-10 w-full"
            />
            {/* NerdwareHub Stats */}
            <Statistics styles="shadow-xl bg-gray-100 lg:w-[95%] mt-8 p-6 lg:-mt-20" />
          </div>
        </Wrapper>
      </section>
      <section className="bg-[#f6f7ff]">
        <Wrapper className="space-y-12">
          <header className="space-y-6">
            <h2 className="text-primary capitalize">Meet the Team</h2>
            <p className={`max-w-2xl text-primary`}>
              Our staff is full of talented, bright, and outgoing individuals.
              We push each other to be the greatest and happiest versions of
              ourselves on a daily basis.
            </p>
          </header>
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            <figure className="flex-1">
              <img
                src={founderImg}
                alt="adeel the founder"
                className="border-none rounded-xl"
              />
            </figure>
            <div className="flex-1">
              <h2>Adeel Atif</h2>
              <p className="text-orange-600 font-light mt-3 mb-8">
                Founder & Director of NerdwareHub
              </p>
              <p className="text-primary">
                The founder of Nerdwarehub, a digital agency, is a visionary
                entrepreneur with a passion for technology and a track record of
                success in the industry. With a background in computer science
                and a deep understanding of the digital landscape, they founded
                Nerdwarehub with the goal of providing businesses and
                organizations with the tools and expertise they need to thrive
                in today's digital world.
              </p>
              <div className="mt-8 space-y-4">
                <span className="text-dimGray text-sm">Follow me on</span>
                <div className="flex gap-4">
                  <Link>
                    <FaLinkedin className="text-primary" size={25} />
                  </Link>
                  <Link>
                    <FaTwitter className="text-primary" size={25} />
                  </Link>
                  <Link>
                    <FaInstagram className="text-primary" size={25} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="team-member-container overflow-hidden">
              <div className="relative min-h-[235px]">
                <div className="team-member-inner overlay">
                  <img src={team1} alt="" className="rounded-[14px] w-full" />
                </div>
                <div className="absolute bottom-0 left-0 p-3">
                  <h3 className="text-primary text-lg font-semibold">
                    Adeel Khan
                  </h3>
                  <p className="text-primary text-sm">Founder</p>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default About;
