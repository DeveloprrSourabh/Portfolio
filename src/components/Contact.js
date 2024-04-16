import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="project-section">
        <p className="tag">Contact</p>
        <div id="projects" className="py-3">
          <h2 className=" pb-4 content-heading">
            Let's make something awesome together!
          </h2>
          <div className="contact-form">
            <div className="row">
              <div className="col-sm-6">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="form-input"
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="text"
                  placeholder="Company Name*"
                  className="form-input"
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="form-input"
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="form-input"
                />
              </div>
              <div className="col-sm-12">
                <textarea
                  name="message"
                  placeholder="A Few Words*"
                  className="form-input"
                  cols="30"
                  rows="7"
                ></textarea>
              </div>
              <div className="col-sm-4">
                <div className="nav-btn">
                  <button type="submit" className="btn-caption ">
                    <div className="work-btn work-btn2 ">Send Message</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
