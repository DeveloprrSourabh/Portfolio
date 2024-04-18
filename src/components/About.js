import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="project-section">
        <p className="tag">About Me</p>
        <div id="projects" className="py-3">
          <h2 className=" pb-4 content-heading">
            Turning complex problems into simple design
          </h2>
          <div className="row g-4 justify-content-between">
            <div className="col-lg-4">
              <div className="count-box">
                <h2 className="count">40+</h2>
                <h2 className="happy-client">Happy clients</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="count-box">
                <h2 className="count">2+</h2>
                <h2 className="happy-client">Years of experience</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="count-box">
                <h2 className="count">50+</h2>
                <h2 className="happy-client">Projects done</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <p className="desc">
                I wonder if I've been changed in the night? Let me think. Was I
                the same when I got up this morning? I almost think I can
                remember feeling a little different. But if I'm not the same,
                the next question is 'Who in the world am I?' Ah, that's the
                great puzzle!
              </p>
              <p className="desc">
                I wonder if I've been changed in the night? Let me think. Was I
                the same when I got up this morning? I almost think I can
                remember feeling a little different. But if I'm not the same,
                the next question is 'Who in the world am I?' Ah, that's the
                great puzzle!
              </p>
              <div className=" w-50 nav-btn">
                <a href="#" className="work-btn work-btn2">
                  <span className="btn-caption ">Download CV</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pro-section py-2">
                <p className="special">Name</p>
                <div className="about-me">Sourabh</div>
              </div>
              <div className="pro-section py-2">
                <p className="special">Phone</p>
                <div className="about-me">
                  <a href="tel:9306435750" className="text-decoration-none">
                    +91 93064-35750
                  </a>
                </div>
              </div>
              <div className="pro-section py-2">
                <p className="special">Email</p>
                <div className="about-me">
                  <a
                    href="mailto:developrr.sourabh@gmail.com"
                    className="text-decoration-none"
                  >
                    developrr.sourabh@gmail.com
                  </a>
                </div>
              </div>
              <div className="pro-section py-2">
                <p className="special">Location</p>
                <div className="about-me">Sirsa, Haryana</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
