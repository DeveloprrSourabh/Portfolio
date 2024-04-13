import React from "react";

const Header = () => {
  return (
    <header>
      <div className="main-header">
        <div className="header-menu d-flex justify-content-between align-items-baseline">
          <ul className=" p-0 menu-list d-flex justify-content-start">
            <li className="list-item mx-2">
              <a href="" className="menu-link">
                <span className="main-caption">Home</span>
              </a>
            </li>
            <li className="list-item mx-2">
              <a href="" className="menu-link">
                <span className="main-caption">Portfolio</span>
              </a>
            </li>
            <li className="list-item mx-2">
              <a href="" className="menu-link">
                <span className="main-caption">About Me</span>
              </a>
            </li>
            <li className="list-item mx-2">
              <a href="" className="menu-link">
                <span className="main-caption">Resume</span>
              </a>
            </li>
            <li className="list-item mx-2">
              <a href="" className="menu-link">
                <span className="main-caption">Contact</span>
              </a>
            </li>
          </ul>
          <div className="nav-btn">
            <a href="#" class="work-btn work-btn2">
              <span class="btn-caption ">Let's Talk!</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
