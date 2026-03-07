import { Link } from "react-router-dom";
import { projects } from "../constants";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="block cursor-pointer group">
      <div className="w-full h-100 rounded-[20px] overflow-hidden bg-black-200 transition-colors duration-300 relative">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
      </div>
      <div className="mt-4">
        <h3 className="text-3xl font-semibold text-black-600 group-hover:text-black transition-colors">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-3 mt-2">
          <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
            {project.category}
          </span>
          {project.technologies?.[0] && (
            <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
              {project.technologies[0]}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

const Project = () => {
  return (
    <section
      id="work"
      className="container min-h-screen mx-auto my-16 p-8 flex flex-col justify-center gap-8"
    >
      <h2 className="text-5xl font-medium text-black mb-5">/ًWorks</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
