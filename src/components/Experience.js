import React from "react";

const Experience = () => {
  return (
    <div>
      <section id="resume" className="project-section">
        <p className="tag">Resume</p>
        <div id="projects" className="py-3">
          <h2 className=" pb-4 content-heading">
            Education and practical experience
          </h2>
          <p className="desc">
            Be what you would seem to be - or, if you'd like it put more simply
            - never imagine yourself not to be otherwise than what it might
            appear to others that what you were or might have been was not
            otherwise than what you had been would have appeared to them to be
            otherwise.
          </p>
        </div>
        {/* Education  */}
        <div className="education">
          <h2 className="edu-heading py-5">My education</h2>
          <div className="row align-align-items-lg-start">
            <div className="col-lg-2">2019 - 2020</div>
            <div className="col-lg-5">
              <div className="study">
                <div className="course">10th Standard</div>
                <div className="school">DR Memorial School</div>
              </div>
            </div>
            <div className="col-lg-5">
              <p className="desc">I have completed my 10th in 2020.</p>
            </div>
          </div>
          <div className="row align-align-items-lg-start">
            <div className="col-lg-2">2021 - 2022</div>
            <div className="col-lg-5">
              <div className="study">
                <div className="course">12th Standard</div>
                <div className="school">Gov. Senior Secondary School</div>
              </div>
            </div>
            <div className="col-lg-5">
              <p className="desc">I have completed my 10th in 2020.</p>
            </div>
          </div>
        </div>
        {/* Education  */}
        {/* Work */}
        <div className="education">
          <h2 className="edu-heading py-5">Work experience</h2>
          <div className="row align-align-items-lg-start">
            <div className="col-lg-2">2023 - 2024</div>
            <div className="col-lg-5">
              <div className="study">
                <div className="course">Worked As a Full Stack Developer</div>
                <div className="school">D3 Logics Jaipur, Rajsthan</div>
              </div>
            </div>
            <div className="col-lg-5">
              <p className="desc">
                During this I had Worked on Laravel, Php, Wordpress, Mern
                Project
              </p>
            </div>
          </div>
        </div>
        {/* Work */}
        {/* Favourite tool */}
        <div className="education tools">
          <h2 className="edu-heading py-5">My favourite tools</h2>
          <div className="d-flex flex-wrap gap-3 tools1">
            <div className="count-box ">
              <h2 className="count">
                <img src="./images/html.svg" alt="" />
              </h2>
              <h2 className="happy-client">HTML5</h2>
            </div>
            <div className="count-box ">
              <h2 className="count">
                <img src="./images/css.svg" alt="" />
              </h2>
              <h2 className="happy-client">CSS3</h2>
            </div>
            <div className="count-box ">
              <h2 className="count">
                <img src="./images/icons8-javascript.svg" alt="" />
              </h2>
              <h2 className="happy-client">JS</h2>
            </div>
            <div className="count-box ">
              <h2 className="count">
                <img src="./images/bootstrap-4.svg" alt="" />
              </h2>
              <h2 className="happy-client">BOOTSTRAP</h2>
            </div>
            <div className="count-box ">
              <h2 className="count">
                <img src="./images/react-1-logo-svgrepo-com.svg" alt="" />
              </h2>
              <h2 className="happy-client">REACT</h2>
            </div>
            <div className="count-box ">
              <h2 className="count">
                <img src="./images/nodejs-svgrepo-com.svg" alt="" />
              </h2>
              <h2 className="happy-client">NODE JS</h2>
            </div>
            <div className="count-box ">
              <h2 className="count">
                <img src="./images/jquery-svgrepo-com.svg" alt="" />
              </h2>
              <h2 className="happy-client">JQUERY</h2>
            </div>
            <div className="count-box ">
              <h2 className="count">
                <img src="./images/mongodb-svgrepo-com-1.svg" alt="" />
              </h2>
              <h2 className="happy-client">MONGO DB</h2>
            </div>
          </div>
        </div>
        {/* Favourite tool */}
      </section>
    </div>
  );
};

export default Experience;
