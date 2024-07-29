import "./skills.css";

import { skillsContent } from "../../components/skill_cat/Skill";

function Skills() {
  return (
    <div className="site__skills section__padding">
      <div className="site__skills-heading">
        <h2 className="section__heading gradient__text section__text-heading">
          My Skills
        </h2>
        <p className="site__skill-heading_intro section__text-paragraph gradient__text-light">
          Apart from doing a bootcamps, I've taken some online courses to help
          enhance my understanding of software developments
        </p>
      </div>
      <div className="site__skills-content">
        <div className="site__skills-content_categories">{skillsContent}</div>
      </div>
    </div>
  );
}

export default Skills;
