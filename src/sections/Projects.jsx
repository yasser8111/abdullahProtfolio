import { Link } from "react-router-dom";
import { projects } from "../constants";
import Badge from "../components/Badge";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="block cursor-pointer group">
      <div className="w-full aspect-video rounded-2xl lg:rounded-3xl overflow-hidden bg-black-100 transition-all duration-500 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10" />
      </div>
      <div className="mt-2 md:mt-4 lg:mt-6 space-y-3">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black-800 group-hover:text-black transition-colors tracking-tight">
          {project.title}
        </h3>
        <div className="flex flex-nowrap items-center gap-2 overflow-hidden">
          {project.technologies?.slice(0, 3).map((tech, index) => (
            <Badge key={index} className="whitespace-nowrap">
              {tech}
            </Badge>
          ))}
          {project.technologies?.length > 3 && (
            <span className="text-md sm:text-lg md:text-xl text-black-300 whitespace-nowrap px-0 lg:px-3">
              more...
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
      className="container min-h-[calc(100vh-72px)] mx-auto my-16 p-4 md:p-6 lg:p-8 flex flex-col justify-between"
    >
      <h2 className="text-4xl lg:text-5xl font-medium text-black-600">
        /Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
