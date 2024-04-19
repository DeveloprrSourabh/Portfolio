import React from "react";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Project from "../components/Project";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="all">
      <div className="row flex-wrap w-100 justify-content-between">
        <div id="main-col" className="col-lg-4 py-4 ps-5">
          <Profile />
        </div>
        <div id="home" className="col-lg-8 p-4">
          <Layout>
            <div id="main" className="py-3">
              <section className="project-section">
                <p className="tag">Let's Meet!</p>
                <div id="projects" className="py-3">
                  <h2 className=" pb-1 content-heading self-detail">
                    I'm Sourabh
                  </h2>
                  <h2 className=" pb-4 content-heading self-detail">
                    Fullstack Web Developer
                  </h2>
                </div>
                <div className="d-flex justify-content-lg-start gap-3">
                  <a className="tag tag2">My Works</a>
                  <a href="./images/Sourabhresume.jpg" className="tag tag2">
                    Download CV
                  </a>
                </div>
              </section>
              <Project />
              <About />
              <Experience />
              <Contact />
              <h2 className=" last-heading pb-4 content-heading">
                Want to know more about me, tell me about your project or just
                to say hello?
                <a
                  className="last-link"
                  href="mailto:developrr.sourabh@gmail.com"
                >
                  Drop me a line{" "}
                </a>
                and I'll get back as soon as possible.
              </h2>
              <div className="contact-lines__item">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="pro-section py-2">
                      <p className="special">Location</p>
                      <div className="about-me">Sirsa, Haryana</div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="pro-section py-2">
                      <p className="special">Phone</p>
                      <div className="about-me">
                        <a
                          href="tel:9306435750"
                          className="text-decoration-none"
                        >
                          +91 93064-35750
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
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
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default Home;
