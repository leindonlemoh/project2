import React from "react";
import "./css/style.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            <h1 class="brand">nerD.</h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 navbar-right mb-lg-0  justify-content-end">
              <li class="nav-item">
                <a
                  class="nav-link  fs-5 fw-semibold"
                  aria-current="page"
                  href="#"
                >
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  fs-5 fw-semibold"
                  aria-current="page"
                  href="#"
                >
                  COURSES
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  fs-5 fw-semibold"
                  aria-current="page"
                  href="#"
                >
                  OUR MISSION
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-5 fw-semibold" href="#">
                  MEET THE TEAM
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-5 fw-semibold" href="#">
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  fs-5 fw-semibold"
                  aria-current="page"
                  href="#"
                >
                  CONTACT
                </a>
              </li>
              <li>
                <button class=" sign rounded-pill " type="submit">
                  Sign Up
                </button>
              </li>
            </ul>
            <form class="d-flex" role="search"></form>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
