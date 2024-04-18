import { set } from "mongoose";
import React, { useEffect, useState } from "react";

const Header = () => {
  const classFunc = () => {
    document
      .querySelectorAll(".content-heading")
      .forEach((ele) => ele.classList.toggle("heading-light"));
    document
      .querySelectorAll(".count-box")
      .forEach((ele) => ele.classList.toggle("active"));
    document
      .querySelectorAll(".form-input")
      .forEach((ele) => ele.classList.toggle("active"));
    document
      .querySelectorAll(".education .row")
      .forEach((ele) => ele.classList.toggle("active"));
    document
      .querySelectorAll(".contact-lines__item")
      .forEach((ele) => ele.classList.toggle("active"));
  };
  // navbar toggle
  const navFunc = () => {
    document
      .querySelectorAll(".main-header")
      .forEach((ele) => ele.classList.toggle("active"));
    document
      .querySelectorAll(".bars")
      .forEach((ele) => ele.classList.toggle("active"));
  };
  const [light, setLight] = useState(false);
  let body = document.getElementById("main-body");
  let card = document.querySelectorAll(".profile");
  let section = document.querySelectorAll(".project-section");
  let tag = document.querySelectorAll(".tag");
  let link1 = document.querySelectorAll(".pro-section");
  let link = document.querySelectorAll("a");
  let link3 = document.querySelectorAll(".work-btn");

  useEffect(() => {
    console.log(light);

    if (light) {
      body.style.backgroundColor = "#e6ebf4";
      card.forEach((item) => (item.style.color = "#000"));
      card.forEach((item) => (item.style.borderColor = "#00000045"));
      section.forEach((item) => (item.style.color = "#000"));
      tag.forEach((item) => (item.style.color = "#000"));
      link.forEach((item) => (item.style.color = "#000"));
      link3.forEach((item) => (item.style.color = "#000"));
      link1.forEach((item) => (item.style.color = "#000"));
    } else {
      body.style.backgroundColor = "black";
      card.forEach((item) => (item.style.color = "#e6ebf4"));
      card.forEach((item) => (item.style.borderColor = "#fff"));
      section.forEach((item) => (item.style.color = "#fff"));
      link.forEach((item) => (item.style.color = "#fff"));
      link3.forEach((item) => (item.style.color = "#000"));
      link1.forEach((item) => (item.style.color = "#fff"));
      tag.forEach((item) => (item.style.color = "#fff"));
    }
  }, [light]);
  return (
    <header>
      <div className="main-header">
        <div className="header-menu d-flex justify-content-between align-items-baseline">
          <ul className=" p-0 menu-list d-flex justify-content-start">
            <li className="list-item mx-2">
              <a href="#home" className="menu-link">
                <span className="main-caption">Home</span>
              </a>
            </li>
            <li className="list-item mx-2">
              <a href="#portfolio" className="menu-link">
                <span className="main-caption">Portfolio</span>
              </a>
            </li>
            <li className="list-item mx-2">
              <a href="#about" className="menu-link">
                <span className="main-caption">About Me</span>
              </a>
            </li>
            <li className="list-item mx-2">
              <a href="#resume" className="menu-link">
                <span className="main-caption">Resume</span>
              </a>
            </li>
            <li className="list-item mx-2">
              <a href="#contact" className="menu-link">
                <span className="main-caption">Contact</span>
              </a>
            </li>
          </ul>
          <div className="nav-btn d-flex gap-3 sun-btn " onClick={classFunc}>
            {!light ? (
              <div className="theme-icon" onClick={() => setLight(true)}>
                <i className="fa-regular fa-sun"></i>
              </div>
            ) : (
              <div className="theme-icon" onClick={() => setLight(false)}>
                <i className="fa-regular fa-moon"></i>
              </div>
            )}

            <a href="#" className="work-btn work-btn2">
              <span className="btn-caption ">Let's Talk!</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bars" onClick={navFunc}>
        |||
      </div>
    </header>
  );
};

export default Header;
