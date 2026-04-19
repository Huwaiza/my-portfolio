import "./styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-eyebrow">SENIOR SOFTWARE ENGINEER</div>
        <div className="landing-name">
          <span>HUWAIZA</span>
          <span>TAHIR</span>
        </div>
        <div className="landing-meta">
          <div className="landing-meta-item">
            <span className="meta-label">CURRENTLY AT</span>
            <span className="meta-value meta-highlight">Arbisoft</span>
          </div>
          <div className="landing-meta-item">
            <span className="meta-label">PLATFORM SCALE</span>
            <span className="meta-value">250K+ MAU</span>
          </div>
          <div className="landing-meta-item">
            <span className="meta-label">EXPERIENCE</span>
            <span className="meta-value">5+ years</span>
          </div>
          <div className="landing-meta-item">
            <span className="meta-label">FOCUS</span>
            <span className="meta-value">Backend · Cloud · AI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
