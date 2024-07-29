import "./projects.css";
import { Project } from "../../components";
import { projectsContent } from "../../components/Project/Project";

function Projects() {
  return (
    <div className="site__projects section__padding">
      <div className="site__projects-header">
        <h1 className="section__heading gradient__text section__text-heading">
          Projects
        </h1>
        <p className=" section__text-paragraph gradient__text-light">
          I always like to stay busy and have a project I am working on. Have a
          look at some project I am currently working on or have completed in
          the past.
        </p>
      </div>

      <div className="site__projects-content">
        {/* <p className="gradient__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos
          iste doloremque, minima quas molestias quia laboriosam laudantium
          quibusdam consequatur facilis natus officia mollitia dolore nihil
          aperiam ab at doloribus.
        </p> */}
        {/* <Project
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos iste doloremque, minima quas molestias quia laboriosam laudantium quibusdam consequatur facilis natus officia mollitia dolore nihil aperiam ab at doloribus."
          }
          title={"Come on "}
        /> */}

        {projectsContent}
      </div>
    </div>
  );
}

export default Projects;
