import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div className="row">
      <div
        id="main-col
      "
        className="col-sm-4 py-4 ps-5"
      >
        <div className="profile py-4">
          <h2 className="name  text-center m-0 pb-3">Sourabh</h2>
          <div className="my-img text-center">
            <img
              src="/images/profile.jpg"
              alt="profile-img"
              className="profile-img "
            />
          </div>
          <div className="myself ">
            <p className="special">Specialization:</p>
            <div className="about-me">UI/UX designer </div>
            <div className="about-me">and frontend developer</div>
          </div>
          <div className="myself pt-1">
            <p className="special">Based in:</p>
            <div className="about-me">Sirsa, India </div>
          </div>
          <div className="profile-btn">
            <a href="#" className="work-btn">
              <span className="btn-caption">Let's Work Together!</span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-8 p-4">
        <Layout>
          <div id="main" className="py-3">
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
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Home;
