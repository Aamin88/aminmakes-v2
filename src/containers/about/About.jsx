import "./about.css";
import ai from "../../assets/hero.png";
function About() {
  console.log("");
  return (
    <div className="site__about section__padding">
      <div className="site__about-content">
        <div className="site__about-content_left">
          <div className="site__about-content_title">
            <h2 className="section__heading gradient__text section__text-heading">
              About Me
            </h2>
          </div>

          <p className="section__text-paragraph gradient__text-light">
            My journey began with a curiosity about how things work under the
            hood. That curiosity led me down the rabbit hole of web development,
            where I&apos;ve honed my skills in both front-end and back-end
            technologies. From responsive UI designs that catch the eye, to
            robust server-side logic that keeps everything humming, I love every
            aspect of bringing ideas to life through code.
          </p>

          <h4 className="gradient__cta-text section__text-paragraph ">
            What sets me apart?
          </h4>
          <ul className="section__text-paragraph gradient__text-light">
            <li>
              A hunger for learning: I devour new technologies and best
              practices like they&apos;re going out of style.
            </li>

            <li>
              Attention to detail: I believe that clean, well-documented code is
              a work of art.
            </li>

            <li>
              Collaborative spirit: I thrive in team environments and love
              bouncing ideas off fellow developers.
            </li>
          </ul>
          <p className="section__text-paragraph gradient__text-light">
            When I&apos;m not knee-deep in code, you might find me [insert a
            personal hobby or interest that showcases your personality, e.g.
            &quot;tinkering with Arduino projects&quot; or &quot;exploring local
            coffee shops in search of the perfect brew&quot;].
          </p>

          <p className="section__text-paragraph gradient__text-light">
            I&apos;m on the lookout for opportunities to contribute my skills to
            innovative projects and grow alongside seasoned professionals. If
            you&apos;re seeking a dedicated developer who brings fresh
            perspectives and a can-do attitude, let&apos;s connect!
          </p>

          <p className="section__text-paragraph gradient__text-light">
            Explore my projects below to see what I can do, or reach out if
            you&apos;d like to chat about how we can create something amazing
            together.
          </p>
        </div>

        <div className="site__about-content_right section__margin">
          <img src={ai} alt="hero" className="thegenius" />
        </div>
      </div>
    </div>
  );
}

export default About;
