import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { projects } from "../constants";
import Badge from "../components/Badge";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black text-4xl font-medium">
        /Project Not Found
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      <main className="mt-18">
        <div className="container min-h-[calc(100dvh-72px)] mx-auto p-4 md:p-6 lg:p-8 flex flex-col justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xl lg:text-2xl font-medium text-black-600 hover:text-black mb-4 lg:mb-10 transition-colors snap"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Back to Home
          </Link>

          <div className="mb-4 md:mb-6 lg:mb-12">
            <h1 className="text-3xl sm:text-6xl md:text-8xl font-semibold mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-black-500">
              /{project.category}
            </p>
          </div>

          <div className="w-full h-[50vh] md:h-[70vh] rounded-[30px] overflow-hidden mb-4 md:mb-8 lg:mb-16 bg-black-100 snap">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 snap snap-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-3 lg:mb-6">
                /Desc
              </h2>
              <p className="text-md :mdtext-xl lg:text-2xl text-black-600 font-light">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-3 lg:mb-6">
                  /Techs
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index}>{tech}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-4">
                  <Button
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    variant="black"
                    icon={
                      <i className="fa-solid fa-arrow-up-right-from-square text-xl "></i>
                    }
                  >
                    Live Website
                  </Button>
                  <Button
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    variant="white"
                    icon={<i className="fa-brands fa-github text-2xl"></i>}
                  >
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
