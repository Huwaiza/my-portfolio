import "./styles/WhatIDo.css";

const WhatIDo = () => {
  return (
    <div className="whatido-section" id="whatido">
      <div className="whatido-container section-container">
        <span className="section-label">WHAT I DO</span>
        <div className="whatido-grid">
          <div className="whatido-block">
            <h3>Backend</h3>
            <p>
              Designing and building high-performance distributed backends,
              APIs, and cloud infrastructure that scale to millions of users.
            </p>
            <div className="whatido-tags">
              {["Python", "Django", "Flask", "DRF", "Node.js", "React", "Redis", "PostgreSQL", "Neo4j", "Elasticsearch"].map((tag) => (
                <span className="whatido-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="whatido-block">
            <h3>Cloud &amp; AI</h3>
            <p>
              Architecting cloud-native solutions on AWS, Azure and GCP, and
              building AI-powered systems with LLMs, RAG pipelines, and
              generative AI orchestration.
            </p>
            <div className="whatido-tags">
              {["AWS", "Azure", "GCP", "Firebase", "LLMs", "RAG", "New Relic", "K6", "JMeter", "Docker"].map((tag) => (
                <span className="whatido-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
