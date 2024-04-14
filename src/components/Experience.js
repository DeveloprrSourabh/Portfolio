import React from "react";

const Experience = () => {
  return (
    <div>
      <section className="project-section">
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
            <div className="col-sm-2">2015 - 2016</div>
            <div className="col-sm-5">
              <div className="study">
                <div className="course">Drawing Concentration</div>
                <div className="school">Course by New York Academy of Art</div>
              </div>
            </div>
            <div className="col-sm-5">
              <p className="desc">
                Intensive drawing courses that present the fundamental
                principles of drawing.
              </p>
            </div>
          </div>
          <div className="row align-align-items-lg-start">
            <div className="col-sm-2">2015 - 2016</div>
            <div className="col-sm-5">
              <div className="study">
                <div className="course">Drawing Concentration</div>
                <div className="school">Course by New York Academy of Art</div>
              </div>
            </div>
            <div className="col-sm-5">
              <p className="desc">
                Intensive drawing courses that present the fundamental
                principles of drawing.
              </p>
            </div>
          </div>
        </div>
        {/* Education  */}
        {/* Work */}
        <div className="education">
          <h2 className="edu-heading py-5">Work experience</h2>
          <div className="row align-align-items-lg-start">
            <div className="col-sm-2">2015 - 2016</div>
            <div className="col-sm-5">
              <div className="study">
                <div className="course">Drawing Concentration</div>
                <div className="school">Course by New York Academy of Art</div>
              </div>
            </div>
            <div className="col-sm-5">
              <p className="desc">
                Intensive drawing courses that present the fundamental
                principles of drawing.
              </p>
            </div>
          </div>
          <div className="row align-align-items-lg-start">
            <div className="col-sm-2">2015 - 2016</div>
            <div className="col-sm-5">
              <div className="study">
                <div className="course">Drawing Concentration</div>
                <div className="school">Course by New York Academy of Art</div>
              </div>
            </div>
            <div className="col-sm-5">
              <p className="desc">
                Intensive drawing courses that present the fundamental
                principles of drawing.
              </p>
            </div>
          </div>
        </div>
        {/* Work */}
        {/* Favourite tool */}
        <div className="education tools">
          <h2 className="edu-heading py-5">My favourite tools</h2>
          <div className="d-flex flex-wrap gap-3">
            <div class="count-box">
              <h2 class="count">
                <img src="./images/html.svg" alt="" />
              </h2>
              <h2 class="happy-client">HTML5</h2>
            </div>
            <div class="count-box">
              <h2 class="count">
                <img src="./images/css.svg" alt="" />
              </h2>
              <h2 class="happy-client">CSS3</h2>
            </div>
            <div class="count-box">
              <h2 class="count">
                <img src="./images/html.svg" alt="" />
              </h2>
              <h2 class="happy-client">HTML5</h2>
            </div>
            <div class="count-box">
              <h2 class="count">
                <img src="./images/css.svg" alt="" />
              </h2>
              <h2 class="happy-client">CSS3</h2>
            </div>
            <div class="count-box">
              <h2 class="count">
                <img src="./images/html.svg" alt="" />
              </h2>
              <h2 class="happy-client">HTML5</h2>
            </div>
          </div>
        </div>
        {/* Favourite tool */}
      </section>
    </div>
  );
};

export default Experience;
