import React, { useRef } from "react";
import Home from "./pages/Home";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const box = useRef();
 const container = document.querySelector('html');
    const circle = document.querySelector('.cursor-circle');

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    container.addEventListener('mouseleave', () => {
      circle.style.display = 'none';
    });

    container.addEventListener('mouseenter', () => {
      circle.style.display = 'block';
    });

    function animate() {
      // Lerp toward the mouse position
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      circle.style.left = `${currentX}px`;
      circle.style.top = `${currentY}px`;

      requestAnimationFrame(animate);
    }

    animate(); // Start animation loop
  useGSAP(
    () => {
      // Portfolio view
      let portfolio = gsap.timeline({
        scrollTrigger: {
          trigger: "#portfolio",
          start: "top center",
          end: "top 100px",
          scrub: 1,
        },
      });
      portfolio.to(".content-heading", { top: "0", opacity: "1" });
      portfolio.to(".project-img", { top: "0", opacity: "1" });

      // About view
      let about = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          end: "top 100px",
          scrub: 1,
        },
      });
      about.to(".content-heading", { top: "0", opacity: "1" });
      about.to(".count-box", { top: "0", opacity: "1" });
      // about.to(".desc", { right: "0", color: "#fff" });
      about.to(".pro-section", { left: "0", opacity: "1" });

      // Resume view
      let resume = gsap.timeline({
        scrollTrigger: {
          trigger: "#resume",
          start: "0 100%",
          end: "top 100px",
          scrub: 0,
        },
      });
      resume.to(".content-heading", { top: "0", opacity: "1" });

      // study view
      let study = gsap.timeline({
        scrollTrigger: {
          trigger: ".study",
          start: "0% 100%",
          end: "top 100px",
          scrub: 1,
        },
      });
      study.to(".education", { top: "0", opacity: "1" });
      study.to(".edu-heading", { top: "0", opacity: "1" });

      // study tool view
      let tool = gsap.timeline({
        scrollTrigger: {
          trigger: ".tools",
          start: "0% 100%",
          end: "top 100px",
          scrub: 1,
        },
      });
      tool.to(".edu-heading", { top: "0", opacity: "1" });
      tool.to(".tools1", { top: "0", opacity: "1" });

      // contact view
      let contact = gsap.timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "0% 100%",
          end: "top 100px",
          scrub: 1,
        },
      });
      tool.to(".edu-heading", { top: "0", opacity: "1" });
      contact.to(".form-input", { left: "0", opacity: "1" });
      contact.to(".form-input", { right: "0", opacity: "1" });
      contact.to("textarea", { top: "0", opacity: "1" });
    },
    { scope: box }
  );

  return (
    <div id="app" ref={box}>
      <Home />
    </div>
  );
};

export default App;
