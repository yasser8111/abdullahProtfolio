const projects = [
  {
    id: 1,
    title: "Project 01",
    category: "Web Application",
  },
  {
    id: 2,
    title: "Project 02",
    category: "Mobile App",
  },
  {
    id: 3,
    title: "Project 03",
    category: "Dashboard",
  },
  {
    id: 4,
    title: "Project 04",
    category: "Landing Page",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="cursor-pointer">
      <div className="w-full h-100 rounded-[20px] overflow-hidden bg-black-200 transition-colors duration-300" />
      <div className="mt-4">
        <h3 className="text-3xl font-semibold text-black-600">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-3 mt-2">
          <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
            HTML5
          </span>
          <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
            CSS3
          </span>
          <span className="h-8 px-4 min-w-30 rounded-3xl bg-black-200 text-black-700 font-medium text-2xl text-center">
            JavaScript
          </span>
          
        </div>
      </div>
    </div>
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
