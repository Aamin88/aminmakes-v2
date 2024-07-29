import "./footerIcon.css";
import { FaLocationArrow } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";

const socialInfo = [
  {
    name: "Twitter or X",
    url: "https://x.com/AminForkah",
    icon: <BsTwitter />,
  },
  {
    name: "Github",
    url: "https://github.com/aamin087",
    icon: <BsGithub />,
  },
  {
    name: "Email",
    url: "mailto:https://github.com/aamin087",
    icon: <FaLocationArrow />,
  },
];

const FooterIcon = ({ name, icon, link }) => {
  return (
    <a className="site__footer-social_link" title={name} href={link}>
      <span className="icon">{icon}</span>
    </a>
  );
};

export const footerContent = socialInfo.map((social, idx) => {
  return (
    <FooterIcon
      name={social.name}
      icon={social.icon}
      link={social.url}
      key={idx}
    />
  );
});

export default FooterIcon;
