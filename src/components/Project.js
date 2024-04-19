import React from "react";

const Project = () => {
  return (
    <div>
      <section id="portfolio" className="project-section">
        <p className="tag">Portfolio</p>
        <div id="projects" className="py-3">
          <h2 className=" pb-4 content-heading">
            Check out my featured projects
          </h2>
          <div className="row g-4">
            <div className="col-sm-6">
              <a
                href="https://github.com/DeveloprrSourabh/iDiscuss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-img ">
                  <img
                    className="picture"
                    src="./images/discuss.png"
                    alt="project-img"
                  />
                  <div className="about-project">
                    <a href="#" className="tag">
                      Frontended
                    </a>
                    <a href="#" className="tag">
                      Php
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6">
              <a
                target="_blank"
                href="https://github.com/DeveloprrSourabh/Fazfood"
              >
                <div className="project-img ">
                  <img
                    className="picture"
                    src="./images/project1.webp"
                    alt="project-img"
                  />
                  <div className="about-project">
                    <a href="#" className="tag">
                      ReactJS
                    </a>
                    <a href="#" className="tag">
                      NodeJS
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6">
              <a
                target="_blank"
                href="https://github.com/DeveloprrSourabh/Lenskart"
              >
                <div className="project-img ">
                  <img
                    className="picture"
                    src="./images/lenskart.png"
                    alt="project-img"
                  />
                  <div className="about-project">
                    <a href="#" className="tag">
                      ReactJS
                    </a>
                    <a href="#" className="tag">
                      NodeJS
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6">
              <a
                target="_blank"
                href="https://github.com/DeveloprrSourabh/Whatsapp"
              >
                <div className="project-img ">
                  <img
                    className="picture"
                    src="./images/whatsapp.webp"
                    alt="project-img"
                  />
                  <div className="about-project">
                    <a href="#" className="tag">
                      ReactJS
                    </a>
                    <a href="#" className="tag">
                      NodeJS
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
