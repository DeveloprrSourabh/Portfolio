import React from "react";
import toast from "react-hot-toast";

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
              <div className="col-lg-6">
                <input
                  required
                  type="text"
                  placeholder="Your Name*"
                  className="form-input"
                />
              </div>
              <div className="col-lg-6">
                <input
                  required
                  type="text"
                  placeholder="Company Name*"
                  className="form-input"
                />
              </div>
              <div className="col-lg-6">
                <input
                  required
                  type="email"
                  placeholder="Email Address*"
                  className="form-input"
                />
              </div>
              <div className="col-lg-6">
                <input
                  required
                  type="tel"
                  placeholder="Phone Number*"
                  className="form-input"
                />
              </div>
              <div className="col-lg-12">
                <textarea
                  required
                  name="message"
                  placeholder="A Few Words*"
                  className="form-input"
                  cols="30"
                  rows="7"
                ></textarea>
              </div>
              <div className="col-lg-4">
                <div className="nav-btn">
                  <button type="submit" className="btn-caption ">
                    <div
                      className="work-btn work-btn2"
                      onClick={() => {
                        toast.success("Thanks For Contacting..");
                      }}
                    >
                      Send Message
                    </div>
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
