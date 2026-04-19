import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: "01",
    name: "Xiangqi Platform",
    category: "Gaming Platform",
    stack: "Django · Redis · New Relic · K6 · 250K MAU",
  },
  {
    num: "02",
    name: "Trier",
    category: "Emergency Triage System",
    stack: "Neo4j · RAG · LLMs · Conformal Prediction",
  },
  {
    num: "03",
    name: "Vboard ETL Solution",
    category: "Data Pipeline",
    stack: "Django · Elasticsearch · Stripe · YouTube API",
  },
  {
    num: "04",
    name: "Waste2x Platform",
    category: "Sustainability SaaS",
    stack: "Django · Firebase · Docusign · DRF",
  },
  {
    num: "05",
    name: "OWL Sense",
    category: "Intelligence Platform",
    stack: "Sentiment · Narrative Analysis · Crime Geomapping",
  },
  {
    num: "06",
    name: "Xiangqi Maia",
    category: "AI Game Engine",
    stack: "Neural Network · Python · Game AI",
  },
];

const Work = () => {
  useEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const workFlex = document.querySelector(".work-flex")!;
      const containerWidth = workFlex.parentElement!.getBoundingClientRect().width;
      const totalWidth = workFlex.scrollWidth;
      translateX = Math.max(0, totalWidth - containerWidth);
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <span className="section-label">WORK</span>
        </div>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tech Stack</h4>
                <p>{project.stack}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
