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
              We are a multi-award-winning digital consulting and engineering
              firm that provides end-to-end software solutions to enterprises,
              independent software vendors, digital agencies, and startups.
            </p>
            <p className={`${commonStyles.sectionpara}`}>
              Since our inception in 2008, we have served over 6800 consumers
              from over 38 countries. Our agile/DevOps development methodology,
              SLA-driven strategy, and on-time project delivery have earned us a
              strong reputation among our clients.
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
        <Wrapper className="flex flex-col gap-12 items-start lg:flex-row lg:gap-24">
          <div className="flex-1 w-full space-y-14">
            <h4 className="text-[1.2rem] leading-[2rem] md:leading-[3rem] font-semibold text-tertiary md:text-[2rem]">
              To bring inspiration and innovation to every business in the
              world.
            </h4>
            <figure>
              <img src={missionAbout} alt="mission-about" />
            </figure>
          </div>
          <header className="flex-1 space-y-8">
            <h5 className={`${commonStyles.scriptHeading}`}>Mission</h5>
            <p className={`${commonStyles.sectionpara}`}>
              We are a multi-award-winning digital consulting and engineering
              firm that provides end-to-end Online solutions to enterprises,
              independent firms.
            </p>
            <h4 className="text-[1.2rem] leading-[2rem] md:leading-[2.5rem] font-semibold text-tertiary md:text-[1.6rem]">
              We are a multi-award-winning digital consulting and engineering
              firm that provides end-to-end software solutions to enterprises,
              independent software vendors, digital agencies, and startups.
            </h4>
            <p className={`${commonStyles.sectionpara}`}>
              Expertise helps Blueket tackle the world's most difficult
              challenges. Blueket provides digital products for worldwide brands
              on the web.
            </p>
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
                src={adeel}
                alt="adeel the founder"
                className="border-none rounded-xl"
              />
            </figure>
            <div className="flex-1">
              <h2>Mike Chavker</h2>
              <p className="text-orange-600 font-light mt-3 mb-8">
                Founder & Director of Blueket
              </p>
              <p className="text-primary">
                This approach enables us to deliver effective digital solutions
                that empower businesses and allow them to scale. We create
                unparalleled technological experiences for their clients and
                help them stay ahead of the digital curve.
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
