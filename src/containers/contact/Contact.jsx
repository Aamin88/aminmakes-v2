import "./contact.css";
import { ContactButton } from "../../components";

function Contact() {
  return (
    <div className="site__contact section__padding">
      <h2 className="section__heading gradient__text section__text-heading">
        Get In Touch
      </h2>
      <p className="section__text-paragraph gradient__text-light">
        I&apos;m currently looking for any new opportunities and my inbox is
        always open. Whether you have a question or just want to say hi,
        I&apos;ll try my best to get back to you!
      </p>
      <div className="site__contact-cta section__margin">
        <ContactButton />
      </div>
    </div>
  );
}

export default Contact;
