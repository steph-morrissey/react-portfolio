import React from "react";
import projectData from "../../projectData/projects.json";
//import { Row } from "antd";
import ProjectCol from "./ProjectCol";

const ProjectSection = () => {
  console.log(projectData);
  return (
    <section>
      <h1> Projects </h1>
      <div className='d-flex flex-wrap bd-highlight justify-content-center'>
        {projectData.map((project) => {
          const projectInfo = {
            name: project.name,
            description: project.description,
            technologies: project.technologies,
            imageName: project.imageName,
            repoLink: project.repoLink,
            deployedLink: project.deployedLink,
          };
          return <ProjectCol key={project.name} info={projectInfo} />;
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
