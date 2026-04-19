import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container section-container">
        <span className="section-label">ABOUT</span>
        <p className="about-text">
          I build <strong>scalable backend systems</strong> and high-traffic
          platforms. Currently backend lead at <strong>Arbisoft</strong>,
          architecting distributed systems that serve{" "}
          <strong>250K+ monthly active users</strong>. Experienced in{" "}
          <strong>cloud infrastructure</strong>, AI orchestration, and pushing
          the limits of what backend systems can do.
        </p>
      </div>
    </div>
  );
};

export default About;
