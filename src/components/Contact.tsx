import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container section-container">
        <h2 className="contact-heading">Let's talk.</h2>
        <div className="contact-grid">
          <div>
            <div className="contact-item">
              <span className="contact-item-label">EMAIL</span>
              <a href="mailto:muhammadhuwaizatahir@gmail.com" data-cursor="disable">
                muhammadhuwaizatahir@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">LINKEDIN</span>
              <a href="https://www.linkedin.com/in/huwaiza-tahir-80092a147/" target="_blank" data-cursor="disable">
                huwaiza-tahir
              </a>
            </div>
          </div>
          <div>
            <span className="contact-item-label" style={{ display: "block", marginBottom: "16px" }}>SOCIAL</span>
            <div className="contact-links">
              <a href="https://github.com/Huwaiza" target="_blank" data-cursor="disable" className="contact-link">
                <span>Github</span>
                <MdArrowOutward />
              </a>
              <a href="https://www.linkedin.com/in/huwaiza-tahir-80092a147/" target="_blank" data-cursor="disable" className="contact-link">
                <span>LinkedIn</span>
                <MdArrowOutward />
              </a>
              <a href="https://medium.com/@muhammadhuwaizatahir" target="_blank" data-cursor="disable" className="contact-link">
                <span>Medium</span>
                <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="site-footer section-container">
        <span>HUWAIZA TAHIR © 2025</span>
        <span>BACKEND · CLOUD · AI</span>
      </footer>
    </div>
  );
};

export default Contact;
