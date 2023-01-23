import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProjectsGrid from "../Components/ProjectsGrid";
import Wrapper from "../Components/shared/Wrapper";
import { projects } from "../Data/constant";

const Projects = () => {
  return (
    <>
      <header className={`py-16 bg-center bg-no-repeat bg-cover bg-project`}>
        <Wrapper className="space-y-7 md:py-20">
          {/* <PageName page="Contact" /> */}
          <h1 className="text-white">
            Some of Our Best Work That <br className="hidden md:block" />{" "}
            <span className="text-tertiary">We Are Proud of</span>
          </h1>
          <p className="max-w-xl text-white">
            Expertise helps Blueket tackle the world's most difficult
            challenges. Blueket provides digital products for worldwide brands
            on the web.
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
