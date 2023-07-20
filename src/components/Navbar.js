import React from "react";

import { SiGithub, SiLinkedin } from "react-icons/si";
// import PropType from 'prop-types';


export default function Navbar(props) {
  return (
    <nav
      className={` navbar navbar-expand-lg   sticky-top  border-bottom border-2     text-light `}
      style={{
        background: "#042743",
        borderRadius: " 0px 0px 0px 50rem",
      }}
    >
      <div className="container-fluid d-flex justify-content-between px-5">
        <div class="p-2 px-4 mx-4 fs-5 ">{props.title}</div>
        <div class="d-flex gap-3  ">
          <div class="p-2">
            <a href="https://github.com/whoisbunny/wordo" className="nav-link">
              <SiGithub />
            </a>
          </div>
          <div class="vr"></div>
          <div class="p-2">
            <a
              href="https://www.linkedin.com/in/whoisbunny/"
              className="nav-link"
            >
              <SiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
