import "./links.css";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

function Links({ icon, name, link }) {
  return (
    <a
      href={`${link}`}
      title={name}
      target="_blank"
      className="site__social-link gradient__text-light"
    >
      <span>{icon}</span>
    </a>
  );
}

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aminalhassan01/",
    icon: BsLinkedin,
  },
  {
    name: "Github",
    url: "https://github.com/Aamin087",
    icon: BsTwitter,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/AminForkah",
    Icon: BsGithub,
  },
];

const socialStack = socials.map(({ name, url }, idx) => (
  <Links
    key={idx}
    link={url}
    icon={
      name === "LinkedIn" ? (
        <BsLinkedin className="icon" size={24} />
      ) : name === "Github" ? (
        <BsGithub className="icon" size={24} />
      ) : (
        <BsTwitter className="icon" size={24} />
      )
    }
    name={name}
  />
));
export default Links;
export { socialStack };
