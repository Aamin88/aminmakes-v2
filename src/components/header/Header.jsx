import "./header.css";
import { socialStack } from "../Links/Links";
import ContactButton from "../ContactButton/ContactButton";

function Header() {
  return (
    <div className="site__header section__padding">
      <div className="site__header-content">
        <h1 className="gradient__text section__text-heading">Amin Alhassan</h1>

        <h2 className="section__heading gradient__text section__text-heading">
          Software Developer
        </h2>

        <p className="site__heading-intro gradient__text-light section__text-paragraph">
          I like to craft solid and scalable frontend products with great user
          experiences.
        </p>

        <div className="site__header-content_icon">{socialStack}</div>

        <div className="site__heading-content_cv">
          <ContactButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
