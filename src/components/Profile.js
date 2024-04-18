import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="profile py-4">
        <h2 className="name  text-center m-0 pb-3">Sourabh</h2>
        <div className="my-img text-center">
          <img
            src="./images/profile.jpg"
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
  );
};

export default Profile;
