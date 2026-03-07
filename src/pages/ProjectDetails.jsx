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

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-2xl font-medium text-black-600 hover:text-black mb-10 transition-colors snap"
          >
            <i className="fa-solid fa-arrow-left "></i>
            Back to Home
          </Link>

          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-semibold mb-4">
              {project.title}
            </h1>
            <p className="text-3xl text-black-500">/{project.category}</p>
          </div>

          <div className="w-full h-[50vh] md:h-[70vh] rounded-[30px] overflow-hidden mb-16 bg-black-100 snap">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 snap snap-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-medium mb-6">/Description</h2>
              <p className="text-2xl text-black-600 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-3xl font-medium mb-5">/Techs</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index}>{tech}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-medium mb-5">/Links</h3>
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
