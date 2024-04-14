import React from "react";

const Project = () => {
  return (
    <div>
      <section className="project-section">
        <p className="tag">Portfolio</p>
        <div id="projects" className="py-3">
          <h2 className=" pb-4 content-heading">
            Check out my featured projects
          </h2>
          <div className="row g-4">
            <div className="col-sm-6">
              <div className="project-img ">
                <img
                  className="picture"
                  src="./images/project1.webp"
                  alt="project-img"
                />
                <div className="about-project">
                  <a href="#" className="tag">
                    Illustration
                  </a>
                  <a href="#" className="tag">
                    Figma
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="project-img ">
                <img
                  className="picture"
                  src="./images/project1.webp"
                  alt="project-img"
                />
                <div className="about-project">
                  <a href="#" className="tag">
                    Illustration
                  </a>
                  <a href="#" className="tag">
                    Figma
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="project-img ">
                <img
                  className="picture"
                  src="./images/project1.webp"
                  alt="project-img"
                />
                <div className="about-project">
                  <a href="#" className="tag">
                    Illustration
                  </a>
                  <a href="#" className="tag">
                    Figma
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="project-img ">
                <img
                  className="picture"
                  src="./images/project1.webp"
                  alt="project-img"
                />
                <div className="about-project">
                  <a href="#" className="tag">
                    Illustration
                  </a>
                  <a href="#" className="tag">
                    Figma
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
