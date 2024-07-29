import "./project.css";
import { RiLinksLine } from "react-icons/ri";
import { CiSquareMore } from "react-icons/ci";

const projectData = [
  {
    projectName: "EcoDrive",
    description:
      "A sustainable transportation app that encourages eco-friendly driving habits.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    liveLink: "https://example.com/ecodrive",
    viewMoreLink: "https://example.com/projects/ecodrive",
    imageLink: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  },
  {
    projectName: "FoodieFinds",
    description:
      "A social platform for discovering and sharing unique culinary experiences.",
    tags: ["Angular", "Firebase", "TypeScript", "SCSS", "Google Maps API"],
    liveLink: "https://example.com/foodiefinds",
    viewMoreLink: "https://example.com/projects/foodiefinds",
    imageLink: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9",
  },
  {
    projectName: "TravelMate",
    description:
      "An all-in-one travel planning app that helps you organize your trips efficiently.",
    tags: ["Vue.js", "Vuetify", "Laravel", "MySQL", "PHP"],
    liveLink: "https://example.com/travelmate",
    viewMoreLink: "https://example.com/projects/travelmate",
    imageLink: "https://images.unsplash.com/photo-1514894789611-9c1f5ed7c5da",
  },
  {
    projectName: "HealthTrack",
    description:
      "A comprehensive health monitoring app to track your wellness and fitness goals.",
    tags: ["Flutter", "Dart", "Firebase", "Google Fit API", "REST API"],
    liveLink: "https://example.com/healthtrack",
    viewMoreLink: "https://example.com/projects/healthtrack",
    imageLink: "https://images.unsplash.com/photo-1571019613911-7c61c05cf1d8",
  },
  {
    projectName: "EduConnect",
    description:
      "An educational platform connecting students with tutors for personalized learning.",
    tags: ["React", "Redux", "Node.js", "PostgreSQL", "GraphQL"],
    liveLink: "https://example.com/educonnect",
    viewMoreLink: "https://example.com/projects/educonnect",
    imageLink: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
];

import ai from "../../assets/image1 2.png";
import { Tag } from "..";
function Project({
  projectName,
  description,
  tags,
  liveLink,
  viewMoreLink,
  imageLink,
}) {
  return (
    <article className="project">
      <div className="project__header">
        <img src={imageLink} alt={projectName} />
      </div>
      <div className="project__content">
        <div className="project__content-text">
          <a href={liveLink}>
            <h4 className="project__content-text_title gradient__text">
              {projectName}
              <RiLinksLine className="icon" />
            </h4>
          </a>
          <p className="project__content-text_desc gradient__text-light section__text-paragraph">
            {description}
          </p>
        </div>

        <div className="project__content-links">
          <a href={viewMoreLink}>
            <p
              className="project__content-links_link"
              style={{ color: "whitesmoke" }}
            >
              View project
              <CiSquareMore className="icon" />
            </p>
          </a>
          <a href="">
            <p
              className="project__content-links_link"
              style={{ color: "whitesmoke" }}
            >
              Live Link <RiLinksLine className="icon" />
            </p>
          </a>
        </div>

        <div className="project__content-tags">
          {tags?.map((tag, idx) => (
            <Tag text={tag} key={idx} />
          ))}
        </div>
      </div>
    </article>
  );
}

// construct the content for UI
export const projectsContent = projectData.map(
  (
    { projectName, description, tags, liveLink, viewMoreLink, imageLink },
    idx
  ) => {
    return (
      <Project
        key={idx}
        projectName={projectName}
        description={description}
        tags={tags}
        liveLink={liveLink}
        viewMoreLink={viewMoreLink}
        imageLink={imageLink}
      />
    );
  }
);

export default Project;
