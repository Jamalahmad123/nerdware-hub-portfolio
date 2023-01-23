import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { projects } from "../Data/constant";

const ProjectsGrid = () => {
  return (
    <div className="grid-cols-3 space-y-2 md:space-y-0 md:grid md:gap-3 md:grid-rows-3">
      {projects.map((project) => (
        <div
          className={`group w-full relative overlay ${project?.style}`}
          key={project.id}
        >
          <img
            src={project.image}
            alt="Photo by Claudio Schwarz on Unsplash"
            className="inset-0 h-full w-full object-cover object-center rounded-2xl group-hover:opacity-100 smooth"
          />
          <div className="absolute left-0 bottom-0 w-full opacity-0 group-hover:opacity-100 smooth flex items-center justify-between">
            <div className="p-2">
              <h3 className="text-white text-2xl">{project.title}</h3>
              <p className="text-white">{project.tech}</p>
            </div>
            <Link className="p-6 bg-white rounded-br-2xl rounded-tl-2xl self-end">
              <FaLink />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
