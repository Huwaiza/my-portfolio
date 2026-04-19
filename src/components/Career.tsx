import "./styles/Career.css";

const careers = [
  {
    year: "2020",
    role: "Software Engineer",
    company: "Phaedra Solutions",
    description:
      "Full stack engineer on Waste2x Enmass Energy — built Django portals, integrated Firebase live tracking, Docusign contract signing, and DRF APIs for mobile. Improved unit test coverage to 64% with Pytest.",
    status: "OCT 2020",
    now: false,
  },
  {
    year: "2022",
    role: "Lead Software Engineer",
    company: "SpyreSync",
    description:
      "Led a team of 4 engineers on Vboard ETL Solution. Migrated a legacy Java Spring Boot app to Django, built ETL pipelines extracting video data from YouTube, Twitter & Elephant, and designed a Stripe subscription API.",
    status: "JAN 2022",
    now: false,
  },
  {
    year: "NOW",
    role: "Senior Software Engineer",
    company: "Arbisoft",
    description:
      "Backend lead for a 250K+ MAU gaming platform. Optimized APIs and database layer by 80%, built Redis caching for real-time gameplay, New Relic telemetry, K6 load testing, and Xiangqi Maia — a neural network trained on millions of platform games.",
    status: "PRESENT",
    now: true,
  },
];

const Career = () => {
  return (
    <div className="career-section" id="career">
      <div className="career-container section-container">
        <span className="section-label">CAREER</span>
        <div className="career-list">
          {careers.map((item) => (
            <div className="career-item" key={item.year}>
              <span className="career-year">{item.year}</span>
              <div className="career-role">
                <h4>{item.role}</h4>
                <h5>{item.company}</h5>
                <p>{item.description}</p>
              </div>
              <span className={`career-status${item.now ? " career-status-now" : ""}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
