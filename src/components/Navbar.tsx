import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isDark, setIsDark] = useState(
    !document.documentElement.classList.contains("light")
  );

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("light")) {
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    } else {
      html.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    }
  };

  return (
    <div className="header">
      <a href="/#" className="navbar-title" data-cursor="disable">
        HT
      </a>
      <a
        href="mailto:muhammadhuwaizatahir@gmail.com"
        className="navbar-connect"
        data-cursor="disable"
      >
        muhammadhuwaizatahir@gmail.com
      </a>
      <ul>
        <li>
          <a data-href="#about" href="#about">
            <HoverLinks text="ABOUT" />
          </a>
        </li>
        <li>
          <a data-href="#work" href="#work">
            <HoverLinks text="WORK" />
          </a>
        </li>
        <li>
          <a data-href="#contact" href="#contact">
            <HoverLinks text="CONTACT" />
          </a>
        </li>
        <li>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            data-cursor="disable"
            aria-label="Toggle theme"
          >
            {isDark ? "☀" : "☾"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
