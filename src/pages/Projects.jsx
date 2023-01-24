import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProjectsGrid from "../Components/ProjectsGrid";
import Wrapper from "../Components/shared/Wrapper";
import { useTitle } from "../CustomHooks/CustomHook";
import { projects } from "../Data/constant";

const Projects = () => {

  useTitle("NerdWareHub Digital Ageny | Projects")

  return (
    <>
      <header className={`py-16 bg-center bg-no-repeat bg-cover bg-project`}>
        <Wrapper className="space-y-7 md:py-20">
          {/* <PageName page="Contact" /> */}
          <h1 className="text-white">
            Some of Our Best Work That <br className="hidden md:block" />{" "}
            <span className="text-[#ff5723]">We Are Proud of</span>
          </h1>
          <p className="max-w-2xl text-gray-200">
            At Nerdwarehub, we take great pride in our work and are excited to
            showcase some of our most notable projects. Our portfolio includes a
            wide range of web and app development, digital marketing and
            ecommerce solutions that we have delivered to businesses and
            organizations of all sizes across various industries
          </p>
        </Wrapper>
      </header>
      <section className="bg-gray-100">
        <Wrapper className="space-y-14">
          <div className="space-y-5">
            <h2 className="text-primary">Our Selected Works</h2>
            <p className="text-gray-700">
              Your ingenious digital partner for expanding your brand globally.
            </p>
          </div>
          <ProjectsGrid />
        </Wrapper>
      </section>
    </>
  );
};

export default Projects;

//
//

/*

*/
