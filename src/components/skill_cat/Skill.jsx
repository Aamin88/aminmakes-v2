import "./skill.css";
import { LiaDotCircleSolid } from "react-icons/lia";

const skillsData = [
  {
    title: "Languages",
    items: [
      "JavaScript (ES6)",
      "TypeScript",
      "HTML",
      "CSS/Sass",
      "Python",
      "SQL",
      "R",
    ],
  },
  {
    title: "Frameworks",
    items: ["React", "Node", "Express", "Styled-components"],
  },
  {
    title: "Tools",
    items: ["Postman", "Postman", "MongoDB", "Chrome DevTools", "Git & Github"],
  },
  {
    title: "Design",
    items: ["Figma"],
  },
];

function Skills({ label, items = [] }) {
  return (
    <div className="skills__category">
      <h4 className="skills__category-label gradient__cta-text section__text-paragraph">
        {label}
      </h4>
      <ul>
        {items.map((item, idx) => {
          return (
            <li key={idx} className="skills__category-items gradient__text">
              <p>
                <span className="skills__category-item_icon">
                  {<LiaDotCircleSolid color="white" />}
                </span>
                {item}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const skillsContent = skillsData.map(({ title, items }, idx) => (
  <Skills key={idx} label={title} items={items} />
));

export default Skills;
